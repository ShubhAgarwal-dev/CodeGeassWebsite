import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Tabs, type TabsRef } from 'flowbite-react'
import Loading from '@/components/Loading/Loading'
import InfoTable from '@/components/Table/InfoTable'
import styles from './../../app/members/page.module.css'
import { FOSS } from '@/types/Members/foss.types'
import { CP } from '@/types/Members/cp.types'
import { GD } from '@/types/Members/gd.types'
import { members } from '@/types/Members/members.types'
import { SiBmcsoftware, SiCodeforces } from 'react-icons/si'
import { IoGameController } from 'react-icons/io5'
import { IoIosPeople } from 'react-icons/io'
import Modal from 'react-modal'

const MEMBERS_REVALIDATION_TIME = 60 * 60 * 12

interface FormData {
  name: string
  roll_number: string
  wing: string
}

const Page = () => {
  const [memArr, setMemArr] = useState<string[][]>([[]])
  const [cpArr, setCpArr] = useState<string[][]>([[]])
  const [gdArr, setGdArr] = useState<string[][]>([[]])
  const [fossArr, SetFossArr] = useState<string[][]>([[]])
  const [activeTab, setActiveTab] = useState<number>(0)
  const tabsRef = useRef<TabsRef>(null)
  const props = { setActiveTab, tabsRef }

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    roll_number: '',
    wing: 'FOSS',
  })

  const handleOpen = () => {
    setIsModalVisible(true)
  }

  const handleClose = () => {
    setIsModalVisible(false)
  }

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/admin/members', formData)
      console.log(response.data)
      fetchDataMembers()
      fetchDataFoss()
    } catch (error) {
      console.error('Error adding member:', error)
    }

    handleClose()
  }

  const fetchDataMembers = async () => {
    const res = await fetch(`/api/fetch/members`, {
      next: {
        revalidate: MEMBERS_REVALIDATION_TIME,
      },
      method: 'GET',
    })
    if (res.status !== 200) {
      setMemArr([[]])
    }
    const data = await res.json()
    const dict_data: members[] = JSON.parse(data.members)
    const arr: string[][] = []
    dict_data.forEach(element => {
      arr.push(Object.values(element).map(e => e.toString()))
    })
    setMemArr(arr)
  }

  useEffect(() => {
    fetchDataMembers()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/cpmembers`, {
        next: {
          revalidate: MEMBERS_REVALIDATION_TIME,
        },
        method: 'GET',
      })
      if (res.status !== 200) {
        setCpArr([[]])
      }
      const data = await res.json()
      const cf_data: CP[] = JSON.parse(data.codeforces)
      const lt_data: CP[] = JSON.parse(data.leetcode)
      const arr: string[][] = []
      cf_data.forEach(element => {
        let new_ele = {
          name: '',
          roll_number: 0,
          handle: '',
        }
        new_ele['name'] = element.member.name
        new_ele['roll_number'] = element.member.roll_number
        new_ele['handle'] = element.handle
        arr.push(Object.values(new_ele).map(e => e.toString()))
      })
      lt_data.forEach(element => {
        let new_ele = {
          name: '',
          roll_number: 0,
          handle: '',
        }
        new_ele['name'] = element.member.name
        new_ele['roll_number'] = element.member.roll_number
        new_ele['handle'] = element.handle
        arr.push(Object.values(new_ele).map(e => e.toString()))
      })
      setCpArr(arr)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/gdmembers`, {
        next: {
          revalidate: MEMBERS_REVALIDATION_TIME,
        },
        method: 'GET',
      })
      if (res.status !== 200) {
        setGdArr([[]])
      }
      const data = await res.json()
      const dict_data: GD[] = JSON.parse(data.gameDevMembers)
      const arr: string[][] = []
      dict_data.forEach(element => {
        let new_ele = {
          name: '',
          roll_number: 0,
          role: '',
        }
        new_ele['name'] = element.member.name
        new_ele['roll_number'] = element.member.roll_number
        new_ele['role'] = element.role
        arr.push(Object.values(new_ele).map(e => e.toString()))
      })
      setGdArr(arr)
    }
    fetchData()
  }, [])

  const fetchDataFoss = async () => {
    const res = await fetch(`/api/fetch/fossmembers`, {
      next: {
        revalidate: MEMBERS_REVALIDATION_TIME,
      },
      method: 'GET',
    })
    if (res.status !== 200) {
      SetFossArr([[]])
    }
    const data = await res.json()
    const dict_data: FOSS[] = JSON.parse(data.foss)
    const arr: string[][] = []
    dict_data.forEach(element => {
      let new_ele = {
        name: '',
        roll_number: 0,
        github_uname: '',
      }
      new_ele['name'] = element.member.name
      new_ele['roll_number'] = element.member.roll_number
      new_ele['github_uname'] = element.github_uname
      arr.push(Object.values(new_ele).map(e => e.toString()))
    })
    SetFossArr(arr)
  }
  useEffect(() => {
    fetchDataFoss()
  }, [])

  const headings_mem: string[] = ['Name', 'Roll Number', 'Wing']
  const headings_foss: string[] = ['Name', 'Roll Number', 'GitHub ID']
  const headings_cp: string[] = ['Name', 'Roll Number', 'handle']
  const headings_gd: string[] = ['Name', 'Roll Number', 'Role']

  return (
    <>
      <div className={styles.membersWrapper}>
        <Modal
          isOpen={isModalVisible}
          onRequestClose={handleClose}
          shouldCloseOnOverlayClick={true}
          style={{
            // change to separate css file
            overlay: {
              zIndex: '100',
            },
            content: {
              backgroundColor: 'green',
              margin: 'auto',
              width: '70%',
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleFormChange}
              />
            </label>
            <br />
            <label>
              Roll Number:
              <input
                type='text'
                name='roll_number'
                value={formData.roll_number}
                onChange={handleFormChange}
              />
            </label>
            <br />
            <label>
              Wing:
              <select
                name='wing'
                value={formData.wing}
                onChange={handleFormChange}
              >
                <option value='FOSS'>FOSS</option>
                <option value='GAME_DEV'>Game Dev</option>
                <option value='CP'>Competitive Programming</option>
              </select>
            </label>
            <br />
            <button type='submit'>Submit</button>
          </form>
        </Modal>
        <Tabs.Group
          aria-label='Default tabs'
          style='default'
          ref={props.tabsRef}
          className='bg-transparent px-4 pt-2 sm:pt-6'
          onActiveTabChange={tab => props.setActiveTab(tab)}
        >
          <Tabs.Item active title='Members' icon={IoIosPeople}>
            {memArr ? (
              <>
                <button style={{ backgroundColor: 'red' }} onClick={handleOpen}>
                  Add Data
                </button>
                <InfoTable
                  headings={headings_mem}
                  row_data={memArr}
                  table_heading='Members'
                />
              </>
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Free & Open Source Software' icon={SiBmcsoftware}>
            {fossArr ? (
              <InfoTable
                headings={headings_foss}
                row_data={fossArr}
                table_heading='FOSS MEMBERS'
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Competitive Programming' icon={SiCodeforces}>
            {cpArr ? (
              <InfoTable
                headings={headings_cp}
                row_data={cpArr}
                table_heading='Competitive Programming'
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Game Dev' icon={IoGameController}>
            {gdArr ? (
              <InfoTable
                headings={headings_gd}
                row_data={gdArr}
                table_heading='Game Development'
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </>
  )
}

export default Page
