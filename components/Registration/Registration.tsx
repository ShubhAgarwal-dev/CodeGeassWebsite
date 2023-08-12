'use client'

import { NextPage } from 'next'
import RegBlock from './RegBlock/RegBlock'
import { useState, useContext } from 'react'
import styles from './Registration.module.css'
import { Tabs } from 'flowbite-react'

interface Props {}

const Registration: NextPage<Props> = ({}) => {
  // We are handelling codeforces registration here
  const handleChangeInput_cf = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs_cf({
      ...inputs_cf,
      [e.target.name]: e.target.value,
    })
  }

  const [inputs_cf, setInputs_cf] = useState({
    fullName: '',
    rollNumber: '',
    userHandle: '',
  })

  // We are handelling leetcode registrations here
  const handleChangeInput_lt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs_lt({
      ...inputs_lt,
      [e.target.name]: e.target.value,
    })
  }

  const [inputs_lt, setInputs_lt] = useState({
    fullName: '',
    rollNumber: '',
    userHandle: '',
  })

  return (
    <>
      <div
        className={`${styles.RegWrapper} grid gap-flow-col grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1`}
      >
        <Tabs.Group
          aria-label='Pills'
          style='default'
          className={
            styles.tabGroup + ' text-center justify-center text-sm border-b-0'
          }
        >
          <Tabs.Item active title='Codeforces'>
            <div>
              <RegBlock
                title='Codeforces'
                inputs={inputs_cf}
                handleChangeInput={handleChangeInput_cf}
                type={0}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title='LeetCode'>
            <div>
              <RegBlock
                title='LeetCode'
                inputs={inputs_lt}
                handleChangeInput={handleChangeInput_lt}
                type={1}
              />
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </>
  )
}

export default Registration
