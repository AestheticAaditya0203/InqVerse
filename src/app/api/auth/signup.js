// pages/api/auth/signup.js
import { hash } from 'bcryptjs'
import { User } from '../../../../models' // Replace with your User model

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    try {
      const hashedPassword = await hash(password, 10) // Hash the password

      // Create a new user in your database
      const newUser = new User({
        username,
        password: hashedPassword,
      })

      await newUser.save()

      res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
