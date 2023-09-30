// pages/api/auth/[...nextauth].js
import { client } from '@/client'
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'


export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email:{ label: "Email", type: "email" },
        password: {  label: "Password",  type: "password" },
      },
      authorize: async (credentials) => {
       
        // Implement your authentication logic here, e.g., check credentials against Sanity.
        const userQuery = `*[_type == "user"]`
        let users = {}
        client.fetch(userQuery)
       .then((response) => {
        const user = response.find(user => user.email === credentials.email && user.password === credentials.password)
        if (user){
            console.log(user)
            signIn()
            return Promise.resolve(user)
        } else{
          console.log('failed')
            return Promise.resolve(null)
        }
        })

       .catch((error) => {console.error(error)}) 
      },
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.user.id = user._id
    console.log(session)
      return Promise.resolve(session)
    },
  },
  // Add other configuration options here
})
