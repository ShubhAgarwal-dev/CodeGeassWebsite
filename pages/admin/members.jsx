import React, { useState } from 'react'

export default function Members() {
  const [data, setData] = useState({
    name: '',
    roll_number: '',
    wing: '',
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch('/api/admin/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        roll_number: data.roll_number,
        wing: data.wing,
      }),
    })

    if (response.ok) {
      console.log('Member added successfully')
    } else {
      console.error('Error adding member')
    }
  }

  return (
    <div>
      <h1>Add Member</h1>
      <input
        type='text'
        name='name'
        value={data.name}
        onChange={handleInputChange}
        placeholder='Name'
      />
      <input
        type='text'
        name='roll_number'
        value={data.roll_number}
        onChange={handleInputChange}
        placeholder='Roll Number'
      />
      <input
        type='text'
        name='wing'
        value={data.wing}
        onChange={handleInputChange}
        placeholder='Wing'
      />

      <button onClick={handleSubmit}>Add Member</button>
    </div>
  )
}
