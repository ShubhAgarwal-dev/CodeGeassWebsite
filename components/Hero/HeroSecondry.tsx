import Link from 'next/link'

interface Props {}

const HeroSecondry = ({}) => {
  // https://flowbite.com/docs/components/jumbotron/ Inspiration

  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('/Hero/JumbotronImages/1080_img.jpg')]  sm:bg-[url('/Hero/JumbotronImages/1080_img.jpg')] md:bg-[url('/Hero/JumbotronImages/2400.jpg')] lg:bg-[url('/Hero/JumbotronImages/1080_img.jpg')] xl:bg-[url('/Hero/JumbotronImages/1080_img.jpg')] bg-gray-700 bg-blend-multiply">
        <div className='px-4 mx-auto min-h-screen max-w-screen-xl text-center py-36 md:py-48 lg:py-72 font-sans'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-7xl lg:text-6xl'>
            Coding Club, IIT Dharwad
          </h1>
          <h3 className='mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-200 md:text-3xl lg:text-3xl'>
            Put your thinking caps on, It's time to code!
          </h3>
          <p className='mb-7 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 tracking-tight text-justify'>
            The Coding Club, also known as{' '}
            <span className='font-semibold'>Code Geass</span>, is an
            enthusiastic community of students dedicated to the realms of
            coding, Web Development, Game Development, and other programming
            disciplines. Our team consists of one secretary and five admins who
            diligently organize a variety of activities throughout the year.
            These include Development-focused events covering Web Development,
            Open Source projects, and Game/App Development. Additionally, we
            host programming contests and hackathons to promote skill-building
            and engagement.
            <br /> <br />
            Should you have any inquiries, please do not hesitate to reach out
            to any of our esteemed members at your convenience. Join us in
            exploring the exciting world of programming!
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
          <div className='flex flex-row space-y-4 sm:flex-row justify-center sm:space-y-0 sm:space-x-4 py-3 px-5'>
            <Link
              href='/members/wanna_join'
              className='inline-flex items-center font-medium text-gray-500 hover:underline'
            >
              Want to apply for membership?
              <svg
                aria-hidden='true'
                className='w-5 h-5 ml-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSecondry
