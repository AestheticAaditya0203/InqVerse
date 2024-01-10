// auth.js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { compare } from 'bcryptjs'
import { User } from '../../../models' // Replace with your User model

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password",  type: "password" }
      },
      authorize: async (credentials) => {
        const user = await User.findOne({ username: credentials.username })

        if (!user) {
          return null
        }

        const isValid = await compare(credentials.password, user.password)

        if (!isValid) {
          return null
        }

        return { id: user._id, username: user.username }
      },
    }),
  ],
  session: {
    jwt: true,
  },
})
