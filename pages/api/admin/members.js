import prisma from './prismaClient'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body

      const newMember = await prisma.members.create({
        data: data,
      })

      res.status(201).json(newMember)
    } catch (error) {
      console.error('Error adding member:', error)
      res.status(500).json({ error: 'Could not add member' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
