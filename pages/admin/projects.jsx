import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlockAdmin from '@/components/Block/BlockAdmin'
import styles from './../../app/projects/page.module.css'

const Projects = () => {
  const [projects, setProjects] = useState([])

  const getProjects = () => {
    axios.get('/api/admin/projects').then(response => {
      setProjects(response.data)
    })
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <div>
      <div className={styles.eventsWrapper}>
        <BlockAdmin
          title='Projects'
          events={projects}
          getEvents={getProjects}
          type={'projects'}
        />
      </div>
    </div>
  )
}

Projects.requireAuth = true

export default Projects
