import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './BlockCard.module.css'
import axios from 'axios'
import Modal from 'react-modal'

const BlockCardAdmin = ({ leftSideImage, data, number, getEvents }) => {
  const [open, setOpen] = useState(false)
  const [eventData, setEventData] = useState({
    title: data.title,
    description: data.description,
    start_month: data.start_month,
    url: data.url,
    image_url: data.image_url,
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setEventData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleEdit = async () => {
    try {
      const eventId = data.id
      await axios.put(`/api/events/?eventId=${eventId}`, eventData)
      getEvents()
      handleClose()
    } catch (error) {
      console.error('Error editing event:', error)
    }
  }

  const handleDelete = async () => {
    try {
      const eventId = data.id
      console.log('eventId:', eventId)

      await axios.delete(`/api/events/?eventId=${eventId}`)
      getEvents()
    } catch (error) {
      console.error('Error deleting event:', error)
    }
  }

  return (
    <>
      <div className={styles.blockCardWrapper}>
        <div className={styles.blockCardMain}>
          <div>
            <button onClick={handleOpen} style={{ backgroundColor: 'yellow' }}>
              Edit
            </button>
            <button
              onClick={handleDelete}
              style={{ backgroundColor: 'yellow' }}
            >
              Delete
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
              <h2>Edit Event</h2>
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
              <button onClick={handleEdit}>Edit Event</button>
              <button onClick={handleClose}>Cancel</button>
            </Modal>
          </div>
          <div
            className={`${styles.blockInfo} ${
              leftSideImage && styles.blockInfoLeft
            }`}
          >
            <div className={styles.blockNumber}>
              <h1>{number < 10 ? `0${number}` : number}</h1>
              <div className={styles.styleDiv}></div>
            </div>
            <div className={styles.blockName}>
              <h1>{data.title}</h1>
              <br />
              <h3>{data.start_month}</h3>
            </div>
            <div className={styles.blockInfo}>{data.description}</div>
            <div className={styles.knowMore}>
              <a href={data.url} target='_blank'>
                <div>Know More</div>
                <div className={styles.buttonImage}>
                  <Image
                    alt='button'
                    src='/Events/event-button.svg'
                    fill
                    priority
                  />
                </div>
              </a>
            </div>
          </div>
          <div
            className={`${styles.blockImageWrapper} ${
              leftSideImage && styles.blockImageWrapperLeft
            }`}
          >
            <div className={styles.blockImageCard}>
              <Image
                src={data.image_url}
                fill
                alt={
                  'https://drive.google.com/file/d/1NvfHESPsWNBuLEu7s6pRXmeg7kaVf2iA/view?usp=drive_link'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockCardAdmin
