import { it } from 'node:test'

interface Props {
  data_items: string[]
  index_row: number
}

const IndividualCol = ({ index_row, data_items }: Props) => {
  return (
    <tr
      className='border-b bg-gray-800 odd:bg-gray-500 even:bg-gray-400'
      key={index_row}
    >
      {data_items.map((item, index) => {
        if (index === 0) {
          return (
            <th
              scope='row'
              className='px-6 py-4 md:px-10 font-medium text-white whitespace-nowrap'
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
