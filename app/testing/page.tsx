'use client'

import { Tabs, type TabsRef } from 'flowbite-react'
import Loading from '@/components/Loading/Loading'
import InfoTable from '@/components/Table/InfoTable'
import { useState, useRef } from 'react'

const base_path = process.env.NEXT_PUBLIC_BASE_PATH || 'http:localhost:3000'

const fetchLeetcodeUsersByAPI = async () => {
  // console.log(`${base_path}/api/fetch/leetcode`)
  const res = await fetch(`../../api/fetch/leetcode`, {
    next: { revalidate: 3600 },
    method: 'GET',
  })
  if (res.status === 400) {
    return
  }
  const data = await res.json()
  const dict_data: object[] = JSON.parse(data.leetcode)

  const arr: string[][] = []
  dict_data.forEach(element => {
    arr.push(Object.values(element).map(e => e.toString()))
  })
  return arr
}

const fetchCodeForcesUsersByAPI = async () => {
  const res = await fetch(`/api/fetch/codeforces`, {
    next: { revalidate: 3600 },
    method: 'GET',
  })
  if (res.status === 400) {
    return
  }
  const data = await res.json()
  const dict_data: object[] = JSON.parse(data.codeforces)

  const arr: string[][] = []
  dict_data.forEach(element => {
    arr.push(Object.values(element).map(e => e.toString()))
  })
  return arr
}

const Page = async () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const tabsRef = useRef<TabsRef>(null)
  const props = { setActiveTab, tabsRef }

  let arr,
    arr_cf = await (fetchLeetcodeUsersByAPI(), fetchLeetcodeUsersByAPI())

  const headings_lt: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Ranking',
    'Stars',
  ]

  fetchLeetcodeUsersByAPI()
  const headings_cf: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Rating',
    'Contests',
    'Last Contest',
  ]

  // let arr_cf = await fetchCodeForcesUsersByAPI()

  return (
    <>
      <h1>Hiii</h1>
      <br />
      <h1>Hiii</h1>
      <br />
      <h1>Hiii</h1>
      <br />
      <h1>Hiii</h1>
      <br />
      <h1>Hiii</h1>
      <br />
      <Tabs.Group
        aria-label='Default tabs'
        style='default'
        ref={props.tabsRef}
        onActiveTabChange={tab => props.setActiveTab(tab)}
      >
        <Tabs.Item active title='Profile'>
          {arr ? (
            <InfoTable
              headings={headings_lt}
              row_data={arr}
              table_heading='LeetCode'
            />
          ) : (
            <Loading />
          )}
        </Tabs.Item>
        <Tabs.Item title='Dashboard'>
          {arr_cf ? (
            <InfoTable
              headings={headings_cf}
              row_data={arr_cf}
              table_heading='CodeForces'
            />
          ) : (
            <Loading />
          )}
        </Tabs.Item>
      </Tabs.Group>
    </>
  )
}

export default Page
