import Heading from './Heading'
import IndividualCol from './IndividualCol'
import styles from './InfoTable.module.css'

interface Props {
  table_heading: string
  headings: string[]
  row_data: string[][]
}

const InfoTable = ({ table_heading, headings, row_data }: Props) => {
  const heading_cf: string[] = [
    'RollNumber',
    'User Handle',
    'Rating',
    'Contests',
  ]
  return (
    <>
      <div className={styles.headingWrapper}>
        <div className={styles.text_block}>{table_heading}</div>
      </div>
      <div className='flex justify-center bg-transparent'>
        <div className='relative overflow-x-auto shadow-md px-4'>
          <div className={styles.tableWrapper}>
            <table className='w-full text-sm text-left text-slate-900 dark:text-white-900'>
              <Heading headings={headings} />
              <tbody>
                {row_data.map((row, index) => {
                  return <IndividualCol data_items={row} index_row={index} />
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoTable
