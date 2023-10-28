import prisma from './prismaClient'

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

      console.log('Event added to database:')
      res.status(201).json(createdEvent)
    } catch (error) {
      console.error('Error adding event to database:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else if (req.method === 'PUT') {
    const eventId = req.query.eventId
    const { id, ...eventData } = req.body
    try {
      const updatedEvent = await prisma.event.update({
        where: { id: eventId },
        data: eventData,
      })

      console.log('Event updated in database')
      res.status(200).json(updatedEvent)
    } catch (error) {
      console.error('Error updating event in database:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else if (req.method === 'DELETE') {
    const eventId = req.query.eventId

    try {
      await prisma.event.delete({
        where: {
          id: eventId,
        },
      })

      console.log('Event deleted from database')
      res.status(204).send()
    } catch (error) {
      console.error('Error deleting event from database:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
