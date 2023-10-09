import React, { useState, useEffect } from 'react'
import styles from './Block.module.css'
import BlockCardAdmin from './BlockCard/BlockCardAdmin'
import Modal from 'react-modal'
import axios from 'axios'
import Alert from '@mui/material/Alert'

const Block = ({ title, events, getEvents, type }) => {
  const typeText =
    type === 'events'
      ? 'Event'
      : type === 'achievements'
      ? 'Achievement'
      : 'Project'
  const [open, setOpen] = useState(false)
  const [formError, setFromError] = useState('')
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
    setFromError('')
  }

  const handleAddEvent = async () => {
    if (eventData.title.trim() == '') {
      setFromError('Title should not be empty')
    } else
      try {
        await axios.post(`/api/admin/${type}`, eventData)
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
        console.error('Error adding' + typeText, error)
        setFromError('Error adding ' + typeText)
      }
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setFromError(null)
  }

  return (
    <>
      {formError ? (
        <Alert
          className={styles.errorBox}
          severity='error'
          onClose={() => {
            setFromError(null)
          }}
        >
          {JSON.stringify(formError, null, 2).replace(/"/g, '')}{' '}
          {/* Remove double quotes */}
        </Alert>
      ) : null}
      <div id='blocksId' className={styles.blocksWrapper}>
        <div className={`${styles.blocksMain} page-wrapper`}>
          <div className={styles.blocksHeading}>
            <div className={styles.text_block}>
              <h2>{title}</h2>
            </div>
          </div>
          <button className={styles.addButton} onClick={handleOpen}>
            Add {typeText}
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
            }}
            className={styles.blockModal}
          >
            <h2>Add New {typeText}</h2>
            <input
              type='text'
              name='title'
              value={eventData.title}
              onChange={handleInputChange}
              placeholder={typeText + ' Title'}
            />

            <textarea
              type='text'
              name='description'
              value={eventData.description}
              onChange={handleInputChange}
              placeholder={typeText + ' Description'}
            />
            <select
              value={eventData.start_month}
              onChange={handleInputChange}
              name='start_month'
            >
              <option value='January' selected>
                January
              </option>
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
              placeholder={typeText + ' URL'}
            />
            <input
              type='text'
              name='image_url'
              value={eventData.image_url}
              onChange={handleInputChange}
              placeholder='Image URL'
            />
            <br />
            <button onClick={handleAddEvent}>Add {typeText}</button>
            <button onClick={handleClose}>Cancel</button>
          </Modal>
          <div className={styles.blocksCardWrapper}>
            {events.map((data, index) => (
              <BlockCardAdmin
                data={data}
                getEvents={getEvents}
                number={index + 1}
                leftSideImage={index % 2 === 0}
                type={type}
                typeText={typeText}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Block
