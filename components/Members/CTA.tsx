import Link from 'next/link'

const CTA = () => {
  return (
    <>
      <section className='bg-transparent font-sans'>
        <div className='py-4 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
          <div className='max-w-screen-md'>
            <h2 className='mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-white'>
              We are very excited to welcome you
            </h2>
            <p className='mb-2 font-light sm:text-xl text-gray-400'>
              Membership in the club offers a formal avenue to build a strong
              network, collaborate effectively, and enhance competitiveness.
              Joining provides valuable exposure opportunities to showcase
              skills and talents. Expand your professional connections, foster
              collaboration, and gain visibility by becoming a member.
              <br />
              Prior to submitting your membership application, it is imperative
              to fulfill certain prerequisites. Begin by carefully selecting the
              wing of the club you wish to join. The regulations governing each
              wing are delineated as follows:
            </p>
            <div>
              <ol className='space-y-4 text-white text-2xl sm:text-3xl list-inside list-decimal font-sans font-bold pt-4 tracking-tight'>
                <li>Free and Open Source Software</li>
                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                  <p>
                    The prescribed procedure for applying for membership in the
                    esteemed coding club is to be comprehensively formalized as
                    follows:
                  </p>
                  <li>
                    <span className='font-semibold'>Initial Application: </span>
                    Interested individuals must send their resume to the FOSS
                    Wing Lead, who manages the coding club. The specific skills
                    required may vary depending on the task or projects
                    undertaken by the club. Applicants should have prior
                    experience in coding or programming, demonstrated through
                    personal projects or work experience.
                  </li>
                  <li>
                    <span className='font-semibold'>
                      Contribution from Experienced Developers:{' '}
                    </span>
                    Individuals with experience in open-source development may
                    submit their contributions to relevant projects. This
                    includes submitting code changes, bug fixes, or other
                    valuable contributions to open-source projects.
                  </li>
                  <li>
                    <span className='font-semibold'>Shortlisting: </span>
                    Resumes submitted by applicants will be reviewed, and
                    shortlisted candidates will be selected for the next stage.
                    Shortlisting criteria may include relevant coding skills,
                    project experience, and open-source contributions.
                  </li>
                  <li>
                    <span className='font-semibold'>Selection: </span>
                    Successful candidates, based on their interview performance
                    and overall qualifications, will be offered membership in
                    the coding club.
                  </li>
                  <li>
                    <span className='font-semibold'>Open-to-All Tasks: </span>
                    The coding club will have certain tasks that are open to
                    all, including individuals who are not yet members of the
                    club. Anyone can participate and contribute to these tasks,
                    showcasing their skills and interest in coding.
                  </li>
                  <li>
                    <span className='font-semibold'>
                      Invitation based on Performance:{' '}
                    </span>
                    Exceptional contributors from the open-to-all tasks may
                    receive invitations to join the club, even if they were not
                    initially shortlisted.
                  </li>
                  <li>
                    <span className='font-semibold'>Contribution Proof: </span>
                    Individuals who have contributed to the open-to-all tasks
                    should send proof of their contributions to the FOSS Wing
                    Lead. Proof may include links to code repositories, pull
                    requests, or any other relevant evidence of their
                    contributions.
                  </li>
                  <p className='text-white'>
                    IPlease note that the specific tasks, projects, and club
                    membership criteria may be subject to change or elaboration
                    by the FOSS Wing Lead or the club's Secretary. Interested
                    individuals should contact the club for the most up-to-date
                    information on the application process and club guidelines.
                  </p>
                </ul>
                <li>Competetive Programming</li>
                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                  <p>
                    At present, our membership application process exclusively
                    acknowledges Codeforces and LeetCode as the recognized
                    platforms. The criteria for each platform are outlined as
                    follows:
                  </p>
                  <li>
                    As part of the membership requirements, it is mandatory to
                    participate in a{' '}
                    <span className='font-semibold'>
                      minimum of two contests per month
                    </span>{' '}
                    on either of the designated platforms. Active engagement in
                    contests is essential to demonstrate commitment and growth
                    in your programming skills. Your consistent participation
                    will contribute to the collaborative and competitive
                    atmosphere of the club, fostering personal and collective
                    development.
                  </li>
                  <li>
                    For membership consideration, specific minimum ratings on{' '}
                    <span className='font-semibold'>Codeforces</span> have been
                    established based on the respective batch years. As of the
                    current criteria, the minimum rating requirement for{' '}
                    <span className='font-semibold'>2024</span> batch students
                    is set at <span className='font-semibold'>1100</span>. For{' '}
                    <span className='font-semibold'>2025</span> batch students,
                    the minimum rating is{' '}
                    <span className='font-semibold'>900</span>. Similarly, for{' '}
                    <span className='font-semibold'>2026</span> batch students,
                    a minimum rating of{' '}
                    <span className='font-semibold'>700</span> is expected,
                    while for <span className='font-semibold'>2027</span> batch
                    students, the minimum rating requirement is set at{' '}
                    <span className='font-semibold'>500</span>. These ratings
                    serve as indicators of your competency and proficiency in
                    programming, contributing to a competitive and balanced
                    membership composition.
                  </li>
                  <li>
                    In accordance to previous rule, a minimum contest rating on{' '}
                    <span className='font-semibold'>LeetCode</span> has been
                    established for each batch year. For{' '}
                    <span className='font-semibold'>2024</span> batch students,
                    the minimum contest rating requirement is set at{' '}
                    <span className='font-semibold'>1700</span>. Similarly, for{' '}
                    <span className='font-semibold'>2025</span> batch students,
                    the minimum contest rating is{' '}
                    <span className='font-semibold'>1600</span>. For{' '}
                    <span className='font-semibold'>2026</span> batch students,
                    the minimum contest rating is{' '}
                    <span className='font-semibold'>1500</span>, and for{' '}
                    <span className='font-semibold'>2027</span> batch students,
                    the minimum contest rating requirement is set at{' '}
                    <span className='font-semibold'>1400</span>. These ratings
                    serve as benchmarks to assess your performance and
                    competence in LeetCode contests, ensuring a competitive and
                    balanced membership within the club.
                  </li>
                  <p className='text-white'>
                    To apply for membership in the club, kindly verify that you
                    meet the aforementioned criteria. Next, register yourself on
                    the <Link href='/leaderboard'>leaderboard</Link> of the
                    chosen platform. Finally, send an email to any of the
                    Competitive Programming (CP) administrators, specifying your
                    chosen platform and user handle. This will initiate the
                    membership application process. We look forward to receiving
                    your application and welcoming you to our esteemed club.
                  </p>
                  <li>
                    It is important to adhere to all the required criteria for
                    maintaining membership within the club. Failure to meet any
                    of the necessary criteria for{' '}
                    <span className='font-semibold'>
                      two consecutive months
                    </span>{' '}
                    will result in the termination of your membership.
                    Compliance with the established criteria ensures a fair and
                    consistent environment for all members, fostering active
                    engagement and continuous growth. Please ensure that you
                    fulfill the requirements to sustain your membership status
                    within the club.
                  </li>
                </ul>
                <li>Game Development Wing</li>
                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                  <p>
                    For membership application and recruitment into the club,
                    prospective members are required to take up and complete a
                    task posted on a need basis at{' '}
                    <Link href={'/projects'} className='font-semibold'>
                      Projects Page
                    </Link>
                    . The club will then evaluate them, and an acceptance mail
                    will be sent to the respective member. <br />
                    Some important rules to keep in mind while taking up a task:
                  </p>
                  <li>
                    The task must be completed within the stipulated time;
                    otherwise, it will incur a penalty, and two such penalties
                    might result in the rejection of future applications.
                  </li>
                  <li>
                    The tasks shall be divided into three categories based on
                    the complexity and urgency of the task.
                  </li>
                  <li>
                    The applicant will only be accepted into the club if the
                    task is done to the evaluator's level of expectation.
                  </li>
                  <li>
                    The tasks for the coding division of the game dev wing will
                    be listed for the Unity platform. There shall be another
                    field for specifying the version of Unity being used.
                  </li>
                  <li>
                    The tasks for the design division of the game dev will be
                    done in the same method.
                  </li>
                </ul>
              </ol>
            </div>
            <div className='flex flex-col mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <Link
                href='https://docs.google.com/document/d/1jRucEzPliQFMyHNJ87l-4Q3br8EcPv0_HPgkKTX51Vo/edit?usp=sharing'
                target='_top'
                className='inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-600'
              >
                <svg
                  className='mr-2 -ml-1 w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='2 2 17 21'
                >
                  <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z' />
                  <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                </svg>
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
