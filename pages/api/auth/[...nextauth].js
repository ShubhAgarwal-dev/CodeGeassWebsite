import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      const allowed_emails = process.env.ALLOWED_EMAILS.split(',')
      var isAllowedToSignIn = false

      allowed_emails.forEach(email => {
        if (email === user.email) {
          isAllowedToSignIn = true
        }
      })

      if (isAllowedToSignIn) {
        return true
      } else {
        return false
      }
    },
  },

  secret: process.env.JWT_SECRET,
})
