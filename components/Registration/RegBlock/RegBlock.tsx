'use client'

import { reg_inputs } from '@/types/Registration/RegBlock.types'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styles from './RegBlock.module.css'

interface Props {
  title: string
  inputs: reg_inputs
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: number // 0 for Codeforces and 1 for Leetcode
}

const RegBlock = ({ title, inputs, handleChangeInput, type }: Props) => {
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (
      inputs.fullName &&
      String(inputs.rollNumber).length > 9 &&
      inputs.userHandle
    ) {
      return setDisabled(false)
    }
  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleClick = () => {
    return handleClose()
  }

  const url_cf = `/api/codeforces`
  const url_lt = `/api/leetcode`
  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    try {
      const data = axios({
        url: type ? url_lt : url_cf,
        method: 'POST',
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className={styles.FormHeading}>
        <div className={styles.text_block}>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={`${styles.formWrapper}`}>
        <form className='w-full max-w-sm'>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3 content-center'>
              <label
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='inline-full-name'
              >
                Full Name
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900'
                id='inline-full-name'
                type='text'
                value={inputs.fullName}
                onChange={handleChangeInput}
                name='fullName'
                required
              />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='inline-full-name'
              >
                Roll Number
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900'
                id='inline-full-name'
                type='text'
                value={inputs.rollNumber}
                onChange={handleChangeInput}
                name='rollNumber'
                required
                minLength={9}
                maxLength={9}
              />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='inline-full-name'
              >
                User Handle
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900'
                id='inline-full-name'
                type='text'
                value={inputs.userHandle}
                onChange={handleChangeInput}
                name='userHandle'
                required
              />
            </div>
          </div>
          <div className='md:flex md:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-2/3'>
              <button
                className='shadow bg-gray-700 hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                type='button'
                disabled={disabled}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegBlock
