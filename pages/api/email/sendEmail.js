const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')

const handler = (req, res) => {
  const { name, email, userHandle } = req.body
  console.log(req.body)

  let config = {
    service: 'gmail',
    auth: {
      user: '210020040@iitdh.ac.in',
      pass: process.env.EMAIL_PASSWORD,
    },
  }

  let transporter = nodemailer.createTransport(config)

  let MailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Mailgen',
      link: 'https://mailgen.js/',
    },
  })

  let response = {
    body: {
      name: name,
      intro: 'Your bill has arrived!',
      table: {
        data: [
          {
            item: 'Nodemailer Stack Book',
            description: 'A Backend application',
            price: '$10.99',
          },
        ],
      },
      outro: 'Looking forward to do more business',
    },
  }

  let mail = MailGenerator.generate(response)

  let message = {
    from: '210020040@iitdh.ac.in',
    to: 'pjayasurya2711@gmail.com',
    subject: 'Place Order',
    html: mail,
  }

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: 'you should receive an email',
      })
    })
    .catch(error => {
      return res.status(500).json({ error })
    })
}

export default handler
