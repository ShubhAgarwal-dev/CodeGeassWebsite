'use client'

import { NextPage } from 'next'
import RegBlock from './RegBlock/RegBlock'
import { useState, useContext } from 'react'
import Modal from 'react-modal'
import styles from './Registration.module.css'

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

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleResendOTP = () => {
    // Handle OTP resend logic here
  }

  const handleSubmitOTP = () => {
    const response = axios.post('/api/verify', {
      otp,
    })
    console.log(response)
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
            // backgroundColor: 'green',R
            margin: 'auto',
            width: '70%',
            height: '80%',
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
