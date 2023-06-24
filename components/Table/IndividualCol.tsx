import { it } from 'node:test'

interface Props {
  data_items: string[]
  index_row: number
}

const IndividualCol = ({ index_row, data_items }: Props) => {
  return (
    <tr
      className='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-500 even:dark:bg-gray-400'
      key={index_row}
    >
      {data_items.map((item, index) => {
        if (index === 0) {
          return (
            <th
              scope='row'
              className='px-6 py-4 md:px-10 font-medium text-gray-900 dark:text-white whitespace-nowrap'
            >
              {item}
            </th>
          )
        }
        if (index === data_items.length - 1) {
          return <td className='px-6 py-4 md:px-10'>{item}</td>
        }
        return <td className='px-6 py-4 md:px-10'>{item}</td>
      })}
    </tr>
  )
}

export default IndividualCol
