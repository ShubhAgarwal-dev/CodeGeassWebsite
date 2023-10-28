'use client'

import { NextPage } from 'next'
import RegBlock from './RegBlock/RegBlock'
import { useState, useContext } from 'react'
import Modal from 'react-modal'
import styles from './Registration.module.css'
import { Tabs } from 'flowbite-react'
import axios from 'axios'
import data from '../../app/achievements/data'
import useAuth from '@/hooks/useAuth'
import { State } from '@/types/AuthContext/AuthContext.type'
import { useRouter } from 'next/navigation'

interface Props {}

interface FormData {
  fullName: string
  rollNumber: string
  userHandle: string
  url: string
}

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

  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  })

  const { registerIn } = useAuth()
  const router = useRouter()

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
  const [formdata, setFormdata] = useState<FormData>({
    fullName: '',
    rollNumber: '',
    userHandle: '',
    url: '',
  })

  const handleOpen = (data: any) => {
    setFormdata(data)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  // const handleResendOTP = () => {
  //   const data = {
  //     name: formdata.fullName,
  //     email: `${formdata.rollNumber}@iitdh.ac.in`,
  //     userHandle: formdata.userHandle,
  //   }

  //   axios
  //     .post('/api/email/sendEmail', data)
  //     .then(response => {
  //       // Handle the successful response from the server
  //       console.log('Server Response:', response.data)
  //     })
  //     .catch(error => {
  //       // Handle any errors that occurred during the request
  //       console.error('Error:', error)
  //     })
  // }

  const handleSubmitOTP = () => {
    axios
      .post('/api/email/verifyOtp', {
        email: formdata.rollNumber + '@iitdh.ac.in',
        userOtp: otp,
      })
      .then(res => {
        console.log(res)
        registerIn(formdata, setAuthState)
        if (authState.error === null) {
          router.push('/leaderboard')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const [open, setOpen] = useState(false)
  const [otp, setOtp] = useState('')

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        className={styles.customModal}
      >
        <div className='modal-content grid grid-col-1 gap-2'>
          <button
            className='close-icon w-max justify-self-end text-2xl'
            onClick={handleClose}
          >
            &times;
          </button>
          <h2 className='text-left justify-self-center mt-10'>Enter OTP</h2>
          <input
            className='bg-black c-white text-left mx-3 rounded w-fit justify-self-center'
            type='text'
            placeholder='Enter OTP'
            value={otp}
            onChange={e => setOtp(e.target.value)}
            maxLength={4}
          />
          <button
            className='bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded justify-self-center w-fit mt-24 mb-5'
            onClick={handleSubmitOTP}
          >
            Submit
          </button>
          {/* <button onClick={handleResendOTP}>Resend OTP</button> */}
        </div>
      </Modal>

      <div
        className={`${styles.RegWrapper} grid gap-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1`}
      >
        <Tabs.Group
          aria-label='Pills'
          style='default'
          className={
            styles.tabGroup +
            ' text-center justify-center text-sm border-b-0 my-0 gap-y-0 gap-x-0.5 py-0'
          }
        >
          <Tabs.Item active title='Codeforces'>
            <div>
              <RegBlock
                title='Codeforces'
                inputs={inputs_cf}
                handleChangeInput={handleChangeInput_cf}
                handleOpen={handleOpen}
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
                handleOpen={handleOpen}
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
