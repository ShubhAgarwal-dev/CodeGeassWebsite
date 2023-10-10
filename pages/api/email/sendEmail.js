const nodemailer = require('nodemailer')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
import { random } from 'gsap'
import prisma from './../admin/prismaClient'

const handler = async (req, res) => {
  const { name, email, userHandle } = req.body

  try {
    const __dirname = path.dirname(new URL(import.meta.url).pathname)
    const templatePath = path.join(__dirname, 'emailTemplate.ejs')
    const ejsTemplate = fs.readFileSync(templatePath, 'utf-8')
    const generateRandom4DigitNumber = () =>
      Math.floor(Math.random() * 9000) + 1000

    const otp = generateRandom4DigitNumber()

    const existingOtp = await prisma.otp.findUnique({
      where: {
        email: email,
      },
    })

    if (existingOtp) {
      // If an OTP object with the same email exists, update its otp value.
      await prisma.otp.update({
        where: {
          email: email,
        },
        data: {
          otp: toString(otp),
        },
      })
    } else {
      // If no OTP object with the same email exists, create a new one.
      const createdEvent = await prisma.otp.create({
        data: {
          email: email,
          otp: toString(otp),
        },
      })
    }

    console.log('otp created', otp)

    const templateData = {
      name: name,
      email: email,
      userHandle: userHandle,
      otp: otp,
    }

    const htmlTemplate = ejs.render(ejsTemplate, templateData)

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '210020040@iitdh.ac.in', // Replace  Gmail address
        pass: process.env.EMAIL_PASSWORD, // Replace  Gmail password in .env
      },
    })

    let message = {
      from: '210020040@iitdh.ac.in', // change this email address
      to: 'pjayasurya2711@gmail.com', // this also
      subject: 'OTP for CODE GEASE',
      html: htmlTemplate,
    }

    await transporter.sendMail(message)

    return res.status(201).json({
      msg: 'You should receive an email',
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
export default handler
