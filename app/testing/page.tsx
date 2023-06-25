'use client'

import Loading from '@/components/Loading/Loading'
import InfoTable from '@/components/Table/InfoTable'

interface Props {}

const base_path = process.env.NEXT_PUBLIC_BASE_PATH || 'http:localhost:3000'

const fetchLeetcodeUsersByAPI = async () => {
  console.log(base_path)
  const res = await fetch(`${base_path}/api/fetch/leetcode`, {
    next: { revalidate: 60 },
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

const Page = async ({}) => {
  let arr = await fetchLeetcodeUsersByAPI()
  const headings_lt: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Ranking',
    'Stars',
  ]
  if (!arr) return <Loading />
  return (
    <InfoTable table_heading='LeetCode' headings={headings_lt} row_data={arr} />
  )
}

export default Page
