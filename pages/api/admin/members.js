import e from 'express'
import prisma from './prismaClient'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        name,
        roll_number,
        wing,
        github_id,
        role,
        leetCode_id,
        codeForces_id,
      } = req.body

      // console.log(req.body)
      const newMember = await prisma.members.create({
        data: {
          name: name,
          roll_number: roll_number,
          wing: wing,
        },
      })
      if (newMember.wing === 'FOSS') {
        const newFOSS = await prisma.fOSS.create({
          data: {
            github_uname: github_id,
            member_id: newMember.id,
          },
        })
      } else if (newMember.wing === 'GAME_DEV') {
        const newGameDev = await prisma.gameDev.create({
          data: {
            role: role,
            member_id: newMember.id,
          },
        })
      } else if (newMember.wing === 'CP') {
        if (leetCode_id) {
          const newCP = await prisma.leetcode.create({
            data: {
              handle: leetCode_id,
              member_id: newMember.id,
            },
          })
        }

        if (codeForces_id) {
          const newCP = await prisma.codeforces.create({
            data: {
              handle: codeForces_id,
              member_id: newMember.id,
            },
          })
        }
      }

      res.status(201).json(newMember)
    } catch (error) {
      console.error('Error adding member:', error)
      res.status(500).json({ error: 'Could not add member' })
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query
      if (!id) {
        return res.status(400).json({ error: 'Missing member ID' })
      }

      const deletedMember = await prisma.members.delete({
        where: {
          id: id,
        },
      })

      res.status(200).json(deletedMember)
    } catch (error) {
      console.error('Error deleting member:', error)
      res.status(500).json({ error: 'Could not delete member' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
