import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import Block from '@/components/Block/Block'
import styles from './../../app/events/page.module.css'

const Events = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    start_month: 'January',
    url: '',
  })
  const [events, setEvents] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    axios.get('/api/events').then(response => {
      setEvents(response.data)
    })
  }, [])

  const handleInputChange = e => {
    const { name, value } = e.target
    setEventData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleAddEvent = async () => {
    try {
      const createdEvent = await axios.post('/api/events', eventData)

      console.log('Event added to database:', createdEvent.data)
      setModalIsOpen(false)
      setEventData({
        title: '',
        description: '',
        start_month: 'January',
        url: '',
      })
    } catch (error) {
      console.error('Error adding event to database:', error)
    }
  }

  return (
    <div>
      <button
        style={{
          position: 'relative',
          // bottom: '10px', // Adjust as needed
          // right: '10px', // Adjust as needed
          zIndex: '100', // Ensure the button is on top
          backgroundColor: 'red',
        }}
        onClick={() => setModalIsOpen(true)}
      >
        Add Event
      </button>

      <div className={styles.eventsWrapper}>
        <Block title='Events' blocksData={events} />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            margin: 'auto',
            dispaly: 'block',
            backgroundColor: 'green',
            maxHeight: '70%', // Adjust the value as needed
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
          <option value='February'>February</option>
          <option value='March'>March</option>
          <option value='April'>April</option>
          <option value='May'>May</option>
          <option value='June'>June</option>
          <option value='July'>July</option>
          <option value='August'>August</option>
          <option value='September'>September</option>
          <option value='October'>October</option>
          <option value='November'>November</option>
          <option value='December'>December</option>
        </select>
        <input
          type='text'
          name='url'
          placeholder='Event URL'
          value={eventData.url}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEvent}>Add Event</button>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  )
}

Events.requireAuth = true

export default Events
