import { LeetCode } from 'leetcode-query'
import { NextApiRequest, NextApiResponse } from 'next'
import validator from 'validator'
import { prisma } from '@/prisma/client'

const leetcode = new LeetCode()

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
      const userWithRollNumber = await prisma.leetCodeLeaderBoard.findUnique({
        where: { rollNumber: String(rollNumber) },
      })
      if (userWithRollNumber) {
        return res.status(400).json({
          errorMessage:
            'This roll number is already present on the leaderboard',
        })
      }
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        errorMessage:
          'Our database is offline, Please try again after sometime or mail to oss@iitdh.ac.in if the issue persists',
      })
    }

    try {
      const userWithUserHandle = await prisma.leetCodeLeaderBoard.findUnique({
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

    let ranking = 1000000
    let points = 0

    try {
      const user = await leetcode.user(userHandle)

      if (user.matchedUser == null) {
        return res.status(400).json({
          errorMessage:
            'Plese check your userHandle, no such user found on Leetcode',
        })
      }

      const userDetails = user.matchedUser
      points = userDetails.contributions.points
      ranking = userDetails.profile.ranking
    } catch (err) {
      res.status(400).json({
        errorMessage:
          'We are experiencing some issues with Leetcode API, please try after some time',
      })
    }

    try {
      const coder = await prisma.leetCodeLeaderBoard.create({
        data: {
          name: fullName,
          rollNumber: String(rollNumber),
          userHandle: userHandle,
          ranking: ranking,
          stars: points,
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
      ranking: ranking,
      stars: points,
    })
  }

  return res.status(404).json('Unknown endpoint')
}

export default handler
