import prisma from './../admin/prismaClient'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { userOtp, email } = req.body
    console.log('userOtp', userOtp)
    try {
      const otp = await prisma.otp.findMany({
        where: {
          email: email,
          otp: toString(userOtp),
        },
      })

      if (otp.length > 0) {
        // OTP matched
        console.log(otp)
        console.log(
          '-------------------- ------------------- ------------------------------------------------',
        )
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
