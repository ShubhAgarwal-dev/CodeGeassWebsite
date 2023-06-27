import { prisma } from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    let gd_ppl

    try {
      gd_ppl = await prisma.gameDev.findMany({
        select: {
          member: {
            select: {
              name: true,
              roll_number: true,
            },
          },
          role: true,
        },
      })
    } catch (error) {
      return res.status(400).json({
        errorMessage:
          'We have a problem with our database, please try again after some time',
      })
    }

    return res.status(200).json({
      gameDevMembers: JSON.stringify(gd_ppl, (key, value) => {
        return typeof value === 'bigint' ? value.toString() : value
      }),
    })
  }
  return res.status(404).json('Unknown endpoint')
}
