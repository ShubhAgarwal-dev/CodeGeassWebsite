import { prisma } from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log('Got Request')
  if (req.method === 'GET') {
    let cf_mem_ppl
    let lt_mem_ppl

    try {
      cf_mem_ppl = await prisma.codeforces.findMany({
        select: {
          member: {
            select: {
              name: true,
              roll_number: true,
            },
          },
          handle: true,
        },
      })
      lt_mem_ppl = await prisma.leetcode.findMany({
        select: {
          member: {
            select: {
              name: true,
              roll_number: true,
            },
          },
          handle: true,
        },
      })
    } catch (error) {
      return res.status(400).json({
        errorMessage:
          'We have a problem with our database, please try again after some time',
      })
    }

    return res.status(200).json({
      codeforces: JSON.stringify(cf_mem_ppl, (key, value) => {
        return typeof value === 'bigint' ? value.toString() : value
      }),
      leetcode: JSON.stringify(lt_mem_ppl, (key, value) => {
        return typeof value === 'bigint' ? value.toString() : value
      }),
    })
  }
  return res.status(404).json('Unknown endpoint')
}
