// const express = require('express')
// const app = express()
// const port = 3005

// const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//   host: 'smtp.forwardemail.net',
//   port: 465,
//   secure: true,
//   auth: {
//     user: '210020040@iitdh.ac.in',
//     pass: process.env.EMAIL_PASSWORD,
//   },
// })

// // Function to send an email
// async function sendEmail(name, email, userHandle) {
//   try {
//     // Send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: '210020040@iitdh.ac.in', // Sender's email address
//       to: 'pjayasurya2711@gmail.com', // Recipient's email address
//       subject: 'Hello from Nodemailer', // Subject of the email
//       text: `Hello ${name}?`, // Plain text body
//       html: '<b>Hello world?</b>', // HTML body
//     })

//     console.log('Message sent: %s', info.messageId)
//   } catch (error) {
//     console.error('Error sending email:', error)
//   }
// }

// module.exports = sendEmail

// app.listen(port, () => {
//   console.log(`nodemailerProject is listening at http://localhost:${port}`)
// })
