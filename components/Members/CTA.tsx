const CTA = () => {
  return (
    <>
      <section className='bg-transparent font-sans'>
        <div className='py-4 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
          <div className='max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>
              We are very happy to welcome you
            </h2>
            <p className='mb-8 font-light sm:text-xl text-gray-400'>
              Flowbite helps you connect with friends, family and communities of
              people who share your interests. Connecting with your friends and
              family as well as discovering new ones is easy with features like
              Groups, Watch and Marketplace.
            </p>
            <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-600'
              >
                <svg
                  className='w-[16px] h-[16px] text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='2 2 17 21'
                >
                  <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z' />
                  <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                </svg>
                See it in doc form
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
