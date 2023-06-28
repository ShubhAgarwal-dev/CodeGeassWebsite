import { prisma } from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    let lt_ppl

    try {
      lt_ppl = await prisma.leetCodeLeaderBoard.findMany({
        orderBy: {
          ranking: 'asc',
        },
        select: {
          rollNumber: true,
          name: true,
          userHandle: true,
          ranking: true,
          stars: true,
        },
      })
    } catch (error) {
      return res.status(400).json({
        errorMessage:
          'We have a problem with our database, please try again after some time',
      })
    }

    return res.status(200).json({
      leetcode: JSON.stringify(lt_ppl, (key, value) => {
        return typeof value === 'bigint' ? value.toString() : value
      }),
    })
  }
  return res.status(404).json('Unknown endpoint')
}
