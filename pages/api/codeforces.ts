import { CodeForcesAPI } from 'codeforces-api-ts'
import { NextApiRequest, NextApiResponse } from 'next'
import validator from 'validator'

import { prisma } from '@/prisma/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { fullName, rollNumber, userHandle } = req.body

    if (String(rollNumber)[0] !== '2') {
      return res.status(400).json({
        errorMessage: 'Enter a valid RollNumber',
      })
    }

    const errors: string[] = []
    //need to add validation for roll , for both leetcode and codeforces
    const validtionSchema = [
      {
        valid: validator.isLength(rollNumber, {
          min: 9,
          max: 9,
        }),
        errorMessage: 'Invalid Length Roll Number Detected',
      },
      {
        valid: validator.isNumeric(rollNumber),
        errorMessage: 'Invalid Characters Detected in Roll Number',
      },
    ]

    validtionSchema.forEach(check => {
      if (!check.valid) {
        errors.push(check.errorMessage)
      }
    })

    if (errors.length > 0) {
      return res.status(400).json({
        errorMessage: errors.join(';'),
      })
    }

    const email_id: String = `${rollNumber}@iitdh.ac.in`

    try {
      const userWithRollNumber = await prisma.codeforcesLeaderBoard.findUnique({
        where: { rollNumber: String(rollNumber) },
      })
      if (userWithRollNumber) {
        return res.status(400).json({
          errorMessage:
            'This roll number is already present on the leaderboard',
        })
      }
    } catch (err) {
      console.error(err)
      return res.status(400).json({
        errorMessage:
          'Our database is offline, Please try again after sometime or mail to oss@iitdh.ac.in if the issue persists',
      })
    }

    try {
      const userWithUserHandle = await prisma.codeforcesLeaderBoard.findUnique({
        where: { userHandle: userHandle },
      })
      if (userWithUserHandle) {
        return res.status(400).json({
          errorMessage:
            'User with this username already present on the leaderboard',
        })
      }
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        errorMessage:
          'Our database is offline, Please try again after sometime or mail to oss@iitdh.ac.in if the issue persists',
      })
    }

    let num_contest = 0
    let last_contest = 0
    let rating = 0

    try {
      const userData = await CodeForcesAPI.user.rating({ handle: userHandle })
      num_contest = userData.result.length
      last_contest = userData.result[num_contest - 1].contestId
      rating = userData.result[num_contest - 1].newRating
    } catch (err) {
      res.status(400).json({
        errorMessage:
          'We are experiencing some issues with Codeforces server, please try after some time',
      })
    }

    try {
      const coder = await prisma.codeforcesLeaderBoard.create({
        data: {
          name: fullName,
          rollNumber: String(rollNumber),
          rating: Number(rating),
          last_contest_id: Number(last_contest),
          contests: Number(num_contest),
          userHandle: userHandle,
        },
      })
    } catch (err) {
      return res.status(400).json({
        errorMessage:
          'Our database is offline, Please try again after sometime or mail to oss@iitdh.ac.in if the issue persists',
      })
    }

    return res.status(200).json({
      message: 'Succefully got the request',
      num_contest: num_contest,
      last_contest_ID: last_contest,
      rating: rating,
    })
  }

  return res.status(404).json('Unknown endpoint')
}

export default handler
