import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import BlockAdmin from '@/components/Block/BlockAdmin'
import styles from './../../app/events/page.module.css'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get('/api/events').then(response => {
      setEvents(response.data)
    })
  }, [])

  return (
    <div>
      <div className={styles.eventsWrapper}>
        <BlockAdmin title='Events' blocksData={events} />
      </div>
    </div>
  )
}

Events.requireAuth = true

export default Events
