import Link from 'next/link'

interface Props {}

const HeroSecondry = ({}) => {
  // https://flowbite.com/docs/components/jumbotron/ Inspiration

  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('/Hero/JumbotronImages/1080_img.jpg')]  sm:bg-[url('/Hero/JumbotronImages/1080_img.jpg')] md:bg-[url('/Hero/JumbotronImages/1080_img.jpg')] lg:bg-[url('/Hero/JumbotronImages/1080_img.jpg')] xl:bg-[url('/Hero/JumbotronImages/1080_img.jpg')] bg-gray-700 bg-blend-multiply">
        <div className='px-4 mx-auto min-h-screen max-w-screen-xl text-center py-36 md:py-40 lg:py-80'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-7xl lg:text-6xl'>
            Coding Club, IIT Dharwad
          </h1>
          <h3 className='mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-200 md:text-3xl lg:text-3xl'>
            Put your thinking caps on, It's time to code!
          </h3>
          <p className='mb-7 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
            <Link
              href='/members'
              className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900'
            >
              Members
              <svg
                aria-hidden='true'
                className='ml-2 -mr-1 w-4 h-4'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </Link>
            <a
              href='/leaderboard'
              className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'
            >
              Leaderboard
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSecondry
