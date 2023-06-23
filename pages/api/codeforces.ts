import { PrismaClient } from '@prisma/client'
import { CodeForcesAPI } from 'codeforces-api-ts'
import { NextApiRequest, NextApiResponse } from 'next'
import validator from 'validator'

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { fullName, rollNumber, userHandle } = req.body

    const errors: string[] = []

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
        where: { rollNumber: rollNumber },
      })
      if (userWithRollNumber) {
        return res.status(400).json({
          errorMessage:
            'This roll number is already present on the leaderboard',
        })
      }
    } catch (err) {
      await prisma.$disconnect()
      return res.status(400).json({
        errorMessage:
          'Our database is offline, Please try again after sometime or mail to oss@iitdh.ac.in if the issue persists',
      })
    }

    try {
      const userData = await CodeForcesAPI.user.rating({ handle: userHandle })
    } catch (err) {
      res.status(400).json({
        errorMessage:
          'We are experiencing some issues with Codeforces server, please try after some time',
      })
    }

    const userData = await CodeForcesAPI.user.rating({ handle: userHandle })
    const num_contest = userData.result.length
    const last_contest = userData.result[num_contest - 1].contestId
    const rating = userData.result[num_contest - 1].newRating

    try {
      const coder = prisma.codeforcesLeaderBoard.create({
        data: {
          name: fullName,
          rollNumber: rollNumber,
          rating: rating,
          last_contest_id: last_contest,
          contests: num_contest,
          userHandle: userHandle,
        }
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
      last_contest: last_contest,
      rating: rating
    })
  }

  return res.status(404).json('Unknown endpoint')
}

export default handler
