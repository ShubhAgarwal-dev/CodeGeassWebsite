import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlockAdmin from '@/components/Block/BlockAdmin'
import styles from './../../app/events/page.module.css'

const Events = () => {
  const [events, setEvents] = useState([])

  const getEvents = () => {
    axios.get('/api/events').then(response => {
      setEvents(response.data)
    })
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div>
      <div className={styles.eventsWrapper}>
        <BlockAdmin title='Events' events={events} getEvents={getEvents} />
      </div>
    </div>
  )
}

Events.requireAuth = true

export default Events
