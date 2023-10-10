import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlockAdmin from '@/components/Block/BlockAdmin'
import styles from './../../app/achievements/page.module.css'

const Achievements = () => {
  const [achievements, setAchievements] = useState([])

  const getAchievements = () => {
    axios.get('/api/admin/achievements').then(response => {
      setAchievements(response.data)
    })
  }

  useEffect(() => {
    getAchievements()
  }, [])

  return (
    <div>
      <div className={styles.achievementsWrapper}>
        <BlockAdmin
          title='Achievements'
          events={achievements}
          getEvents={getAchievements}
          type={'achievements'}
        />
      </div>
    </div>
  )
}
//
Achievements.requireAuth = true // Required Authentication

export default Achievements
