interface Props {
  headings: string[]
}

const Heading = ({ headings }: Props) => {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-900 dark:text-gray-400'>
      <tr>
        {headings.map(heading => {
          return (
            <th scope='col' className='px-6 py-3 md:px-10'>
              {heading}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default Heading
