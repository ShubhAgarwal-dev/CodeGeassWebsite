'use client'

import { Tabs, type TabsRef } from 'flowbite-react'
import Loading from '@/components/Loading/Loading'
import InfoTable from '@/components/Table/InfoTable'
import { useState, useRef, useEffect } from 'react'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'

import styles from './page.module.css'

// const customTheme: CustomFlowbiteTheme = {
//   base: 'flex flex-col gap-2',
//   tablist: {
//     base: 'flex text-center',
//     styles: {
//       default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
//       underline:
//         'flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
//       pills:
//         'flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2',
//       fullWidth:
//         'w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none',
//     },
//     tabitem: {
//       base: 'flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none',
//       styles: {
//         default: {
//           base: 'rounded-t-lg',
//           active: {
//             on: 'bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500',
//             off: 'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300',
//           },
//         },
//         underline: {
//           base: 'rounded-t-lg',
//           active: {
//             on: 'text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500',
//             off: 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
//           },
//         },
//         pills: {
//           base: '',
//           active: {
//             on: 'rounded-lg bg-cyan-600 text-white',
//             off: 'rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
//           },
//         },
//         fullWidth: {
//           base: 'ml-0 first:ml-0 w-full rounded-none flex',
//           active: {
//             on: 'p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none',
//             off: 'bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none',
//           },
//         },
//       },
//       icon: 'mr-2 h-5 w-5',
//     },
//   },
//   tabpanel: 'py-3',
// }

const Page = async () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [arrLt, setArrlt] = useState<string[][]>([[]])
  const [arrCf, setArrCf] = useState<string[][]>([[]])
  const tabsRef = useRef<TabsRef>(null)
  const props = { setActiveTab, tabsRef }

  useEffect(() => {
    console.log('Leetocde Fetch')
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/leetcode`, {
        next: { revalidate: 60 },
        method: 'GET',
      })
      if (res.status !== 200) {
        console.log('Leetocde Fetch NO RESPONCE')
        setArrlt([[]])
      }
      console.log('Leetocde Fetch WITH RESPONCE')
      const data = await res.json()
      const dict_data: object[] = JSON.parse(data.leetcode)

      const arr: string[][] = []
      dict_data.forEach(element => {
        arr.push(Object.values(element).map(e => e.toString()))
      })
      setArrlt(arr)
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log('Codeforce Fetch')
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/codeforces`, {
        next: { revalidate: 60 },
        method: 'GET',
      })
      if (res.status === 400) {
        console.log('Codeforce Fetch NO RESPONCE')
        setArrCf([[]])
      }
      console.log('Codeforce Fetch WITH RESPONCE')
      const data = await res.json()
      const dict_data: object[] = JSON.parse(data.codeforces)

      const arr: string[][] = []
      dict_data.forEach(element => {
        arr.push(Object.values(element).map(e => e.toString()))
      })
      setArrCf(arr)
    }
    fetchData()
  }, [])

  const headings_lt: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Ranking',
    'Stars',
  ]

  // fetchLeetcodeUsersByAPI()
  const headings_cf: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Rating',
    'Contests',
    'Last Contest',
  ]

  return (
    <>
      <div className={styles.LeaderboardWrapper}>
        {/* <Flowbite theme={{ theme: customTheme }}> */}
        <Tabs.Group
          aria-label='Default tabs'
          style='default'
          ref={props.tabsRef}
          className='bg-transparent px-4 pt-2 sm:pt-6'
          onActiveTabChange={tab => props.setActiveTab(tab)}
        >
          <Tabs.Item
            active
            title='Leetcode'
            icon={SiLeetcode}
            className='active:border-gray-500'
          >
            {arrLt ? (
              <InfoTable
                headings={headings_lt}
                row_data={arrLt}
                table_heading='Leetcode'
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Codeforces' icon={SiCodeforces}>
            {arrCf ? (
              <InfoTable
                headings={headings_cf}
                row_data={arrCf}
                table_heading='Codeforces'
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
        </Tabs.Group>
        {/* </Flowbite> */}
      </div>
    </>
  )
}

export default Page
