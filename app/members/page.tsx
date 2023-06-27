'use client'

import { Tabs, type TabsRef } from 'flowbite-react'
import Loading from '@/components/Loading/Loading'
import InfoTable from '@/components/Table/InfoTable'
import { useState, useRef, useEffect } from 'react'

import styles from './page.module.css'

import { FOSS } from '@/types/Members/foss.types'
import { CP } from '@/types/Members/cp.types'
import { GD } from '@/types/Members/gd.types'
import { members } from '@/types/Members/members.types'

const Page = async () => {
  const [memArr, setMemArr] = useState<string[][]>([[]])
  const [cpArr, setCpArr] = useState<string[][]>([[]])
  const [gdArr, setGdArr] = useState<string[][]>([[]])
  const [fossArr, SetFossArr] = useState<string[][]>([[]])
  const [activeTab, setActiveTab] = useState<number>(0)
  const tabsRef = useRef<TabsRef>(null)
  const props = { setActiveTab, tabsRef }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/members`, {
        next: {
          revalidate: 3600,
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
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/cpmembers`, {
        next: {
          revalidate: 3600,
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
          revalidate: 3600,
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/fossmembers`, {
        next: {
          revalidate: 3600,
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
    fetchData()
  }, [])

  const headings_mem: string[] = ['Name', 'Roll Number', 'Wing']
  const headings_foss: string[] = ['Name', 'Roll Number', 'GitHub ID']
  const headings_cp: string[] = ['Name', 'Roll Number', 'handle']
  const headings_gd: string[] = ['Name', 'Roll Number', 'Role']

  return (
    <>
      <div className={styles.membersWrapper}>
        <Tabs.Group
          aria-label='Default tabs'
          style='default'
          ref={props.tabsRef}
          className='bg-transparent px-4 pt-2 sm:pt-6'
          onActiveTabChange={tab => props.setActiveTab(tab)}
        >
          <Tabs.Item active title='Members'>
            {memArr ? (
              <InfoTable
                headings={headings_mem}
                row_data={memArr}
                table_heading='Members'
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item active title='FOSS'>
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
          <Tabs.Item active title='Competetive Programming'>
            {cpArr ? (
              <InfoTable
                headings={headings_cp}
                row_data={cpArr}
                table_heading='Competetive Programming'
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item active title='Game Dev'>
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
