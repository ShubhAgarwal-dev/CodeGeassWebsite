import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const events = await prisma.event.findMany()
      res.status(200).json(events)
    } catch (error) {
      console.error('Error fetching events:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else if (req.method === 'POST') {
    const eventData = req.body

    try {
      const createdEvent = await prisma.event.create({
        data: eventData,
      })

      console.log('Event added to database:', createdEvent)
      res.status(201).json(createdEvent)
    } catch (error) {
      console.error('Error adding event to database:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
