import Heading from './Heading'
import IndividualCol from './IndividualCol'

interface Props {}

const InfoTable = ({}: Props) => {
  const heading_cf: string[] = [
    'RollNumber',
    'User Handle',
    'Rating',
    'Contests',
  ]
  const data_reg1: string[] = ['210020047', 'shubhagarwal539', '1100', '1816']
  const data_reg2: string[] = ['2100200048', 'RoopikaKaPreemi', '1169', '1812']
  return (
    <>
      <div className='flex justify-center bg-transparent'>
        <div className='relative overflow-x-auto shadow-md px-4 sm:px-8 md:px-12 lg:px-36 xl:px-56'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'></table>
          <Heading headings={heading_cf} />
          <tbody>
            <IndividualCol data_items={data_reg1} index_row={0} />
            <IndividualCol data_items={data_reg2} index_row={1} />
          </tbody>
        </div>
      </div>
    </>
  )
}

export default InfoTable
