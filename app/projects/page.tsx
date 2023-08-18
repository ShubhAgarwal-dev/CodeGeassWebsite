'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Block from '@/components/Block/Block'
import styles from './page.module.css'

export default function Events() {
  const [eventsData, setEventsData] = useState([])

  const getEvents = () => {
    axios.get('/api/admin/projects').then(response => {
      setEventsData(response.data)
    })
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div className={styles.eventsWrapper}>
      <Block title='Projects' blocksData={eventsData} />
    </div>
  )
}
