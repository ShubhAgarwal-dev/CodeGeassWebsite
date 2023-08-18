import React, { useState, useEffect } from 'react'
import styles from './Block.module.css'
import BlockCardAdmin from './BlockCard/BlockCardAdmin'
import Modal from 'react-modal'
import axios from 'axios'

const Block = ({ title, events, getEvents }) => {
  const [open, setOpen] = useState(false)
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    start_month: 'January',
    url: '',
    image_url: '',
  })
  const handleInputChange = event => {
    const { name, value } = event.target
    setEventData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleAddEvent = async () => {
    try {
      await axios.post('/api/events', eventData)
      handleClose()
      getEvents()
      setEventData({
        title: '',
        description: '',
        start_month: 'January',
        url: '',
        image_url: '',
      })
    } catch (error) {
      console.error('Error adding event:', error)
    }
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div id='blocksId' className={styles.blocksWrapper}>
      <div className={`${styles.blocksMain} page-wrapper`}>
        <div className={styles.blocksHeading}>
          <div className={styles.text_block}>
            <h2>{title}</h2>
          </div>
        </div>
        <button style={{ backgroundColor: 'red' }} onClick={handleOpen}>
          Add Event
        </button>
        <Modal
          isOpen={open}
          onRequestClose={handleClose}
          shouldCloseOnOverlayClick={true}
          style={{
            // change to separate css file
            overlay: {
              zIndex: '100',
            },
            content: {
              backgroundColor: 'green',
              margin: 'auto',
              width: '70%',
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <h2>Add New Event</h2>
          <input
            type='text'
            name='title'
            value={eventData.title}
            onChange={handleInputChange}
            placeholder='Event Title'
          />
          <input
            type='text'
            name='description'
            value={eventData.description}
            onChange={handleInputChange}
            placeholder='Event Description'
          />
          <select
            value={eventData.start_month}
            onChange={handleInputChange}
            name='start_month'
          >
            <option value=''>Select Month</option>
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
            value={eventData.url}
            onChange={handleInputChange}
            placeholder='Event URL'
          />
          <input
            type='text'
            name='image_url'
            value={eventData.image_url}
            onChange={handleInputChange}
            placeholder='Image URL'
          />
          <button onClick={handleAddEvent}>Add Event</button>
          <button onClick={handleClose}>Cancel</button>
        </Modal>
        <div className={styles.blocksCardWrapper}>
          {events.map((data, index) => (
            <BlockCardAdmin
              data={data}
              getEvents={getEvents}
              number={index + 1}
              leftSideImage={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Block
