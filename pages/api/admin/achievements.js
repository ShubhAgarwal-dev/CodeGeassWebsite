import prisma from './prismaClient'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const achievements = await prisma.achievement.findMany()
      res.status(200).json(achievements)
    } catch (error) {
      console.error('Error fetching achievements:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else if (req.method === 'POST') {
    const eventData = req.body

    try {
      const createdEvent = await prisma.achievement.create({
        data: eventData,
      })

      console.log('Event added to database:')
      res.status(201).json(createdEvent)
    } catch (error) {
      console.error('Error adding achievement to database:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else if (req.method === 'PUT') {
    const eventId = req.query.eventId
    const { id, ...eventData } = req.body
    try {
      const updatedEvent = await prisma.achievement.update({
        where: { id: eventId },
        data: eventData,
      })

      console.log('Event updated in database:')
      res.status(200).json(updatedEvent)
    } catch (error) {
      console.error('Error updating achievement in database:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else if (req.method === 'DELETE') {
    const eventId = req.query.eventId

    try {
      await prisma.achievement.delete({
        where: {
          id: eventId,
        },
      })

      console.log('Event deleted from database')
      res.status(204).send()
    } catch (error) {
      console.error('Error deleting achievement from database:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
