const nodemailer = require('nodemailer')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

const handler = async (req, res) => {
  const { name, email, userHandle } = req.body

  try {
    const __dirname = path.dirname(new URL(import.meta.url).pathname)
    const templatePath = path.join(__dirname, 'emailTemplate.ejs')
    const ejsTemplate = fs.readFileSync(templatePath, 'utf-8')

    const templateData = {
      name: name,
      email: email,
      userHandle: userHandle,
      otp: '1234',
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
      subject: 'Place Order',
      html: htmlTemplate,
    }

    // await transporter.sendMail(message)

    return res.status(201).json({
      msg: 'You should receive an email',
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
export default handler
