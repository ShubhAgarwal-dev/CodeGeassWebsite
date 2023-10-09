'use client'

import { NextPage } from 'next'
import RegBlock from './RegBlock/RegBlock'
import { useState, useContext } from 'react'
import Modal from 'react-modal'
import styles from './Registration.module.css'
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
  const handleResendOTP = () => {
    // Handle OTP resend logic here
  }

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
        shouldCloseOnOverlayClick={false}
        className='custom-modal'
        overlayClassName='custom-modal-overlay'
        style={{
          // change to separate css file
          overlay: {
            zIndex: '100',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',

            position: 'absolute',
            backgroundColor: 'green',
            margin: 'auto',
            width: '40%',
            height: '40%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <div className='modal-content'>
          <span className='close-icon' onClick={handleClose}>
            &times;
          </span>
          <h2>Enter OTP</h2>
          <input
            type='text'
            placeholder='Enter OTP'
            value={otp}
            onChange={e => setOtp(e.target.value)}
            maxLength={4}
          />
          <button onClick={handleSubmitOTP}>Submit</button>
          <button onClick={handleResendOTP}>Resend OTP</button>
        </div>
      </Modal>

      <div
        className={`${styles.RegWrapper} grid gap-flow-col grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1`}
      >
        <div>
          <RegBlock
            title='Codeforces'
            inputs={inputs_cf}
            handleChangeInput={handleChangeInput_cf}
            handleOpen={handleOpen}
            type={0}
          />
        </div>
        <div>
          <RegBlock
            title='LeetCode'
            inputs={inputs_lt}
            handleChangeInput={handleChangeInput_lt}
            handleOpen={handleOpen}
            type={1}
          />
        </div>
      </div>
    </>
  )
}

export default Registration
