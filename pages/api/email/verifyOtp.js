import prisma from './../admin/prismaClient'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { userOtp, email } = req.body
    console.log('userOtp', userOtp)

    try {
      const otp = await prisma.otp.findFirst({
        where: {
          email: email,
        },
      })

      // console.log('otp', otp.otp)
      // console.log(
      //   '-------------------- ------------------- ---------------------------------------------------',
      // )

      if (otp.otp === userOtp) {
        // OTP matched
        console.log(otp)

        res.status(200).json({ msg: 'OTP verified' })
      } else {
        // OTP did not match
        res.status(400).json({ msg: 'OTP not verified' })
      }
    } catch (error) {
      console.error('Error verifying otp:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

export default handler
