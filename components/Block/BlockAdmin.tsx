import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import BlockCardAdmin from './BlockCard/BlockCardAdmin'
import styles from './Block.module.css'

interface EventData {
  id: string
  title: string
  description: string
  start_month: string
  url: string
  image_url: string
}

interface Props {
  title: string
  blocksData: EventData[]
  onEdit: (editedData: EventData) => void
  onDelete: (id: string) => void
}

export default function BlockAdmin({
  title,
  blocksData,
  onEdit,
  onDelete,
}: Props) {
  const [eventData, setEventData] = useState<EventData>({
    id: '',
    title: '',
    description: '',
    start_month: 'January',
    url: '',
    image_url: '',
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<EventData | null>(null)

  useEffect(() => {
    if (editingEvent) {
      setEventData(editingEvent)
    }
  }, [editingEvent])

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setEventData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleEdit = (editedData: EventData) => {
    setEditingEvent(editedData)
    setModalIsOpen(true)
  }

  const handleDelete = async (eventId: string) => {
    try {
      await axios.delete(`/api/events/${eventId}`)
      fetchEvents()
    } catch (error) {
      console.error('Error deleting event:', error)
    }
  }

  const handleAddEvent = async () => {
    try {
      if (editingEvent) {
        const updatedEvent = await axios.put(`/api/events/${editingEvent.id}`, {
          ...eventData,
        })
        onEdit(updatedEvent.data)
      } else {
        const createdEvent = await axios.post('/api/events', eventData)
        console.log('Event added to database:', createdEvent.data)
      }
      setModalIsOpen(false)
      setEventData({
        id: '',
        title: '',
        description: '',
        start_month: 'January',
        url: '',
        image_url: '',
      })
      setEditingEvent(null)
    } catch (error) {
      console.error('Error adding/editing event:', error)
    }
  }

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events')
      setEventData(response.data)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  return (
    <div id='blocksId' className={styles.blocksWrapper}>
      <div className={`${styles.blocksMain} page-wrapper`}>
        <div className={styles.blocksHeading}>
          <div className={styles.text_block}>
            <h2>{title}</h2>
          </div>
        </div>
        <button
          style={{
            position: 'relative',
            zIndex: 100,
            backgroundColor: 'red',
          }}
          onClick={() => setModalIsOpen(true)}
        >
          Add Event
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            content: {
              margin: 'auto',
              backgroundColor: 'green',
              maxHeight: '70%',
              width: '70%',
            },
          }}
        >
          <h2>Add Event</h2>
          <input
            type='text'
            name='title'
            placeholder='Event Title'
            value={eventData.title}
            onChange={handleInputChange}
          />
          <textarea
            name='description'
            placeholder='Event Description'
            value={eventData.description}
            onChange={handleInputChange}
          />
          <select
            name='start_month'
            value={eventData.start_month}
            onChange={handleInputChange}
          >
            <option value='January'>January</option>
          </select>
          <input
            type='text'
            name='url'
            placeholder='Event URL'
            value={eventData.url}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='image_url'
            placeholder='Image URL'
            value={eventData.image_url}
            onChange={handleInputChange}
          />
          <button onClick={handleAddEvent}>Add Event</button>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
        <div className={styles.blocksCardWrapper}>
          {blocksData.map((data, index) => {
            return (
              <BlockCardAdmin
                data={data}
                key={index}
                number={index + 1}
                leftSideImage={index % 2 === 0} // Adjust this condition
                onEdit={handleEdit} // Pass the onEdit function
                onDelete={handleDelete} // Pass the onDelete function
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
