// pages/api/login.js

import { client } from '@/client'
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import {signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


export default function handler(req, res) {
  // const router = useRouter();
    // Handle the HTTP request
    if (req.method === 'GET') {
      // Perform actions for GET request
      res.status(200).json({ message: 'GET request received' });
    } else if (req.method === 'POST') {
      try{
          console.log(req.body)
          const userQuery = `*[_type == "user"]`
          let users = {}
          client.fetch(userQuery)
        .then((response) => {
          const user = response.find(user => user.email === req.body.email && user.password === req.body.password)
          if (user){
              console.log(user)
              // signIn()
              // router.push('/')
              
              // return Promise.resolve(user)
          } else{
            console('not found user')
              return Promise.resolve(null)
          }
          })

        .catch((error) => {console.error(error)})

         res.status(200).json({message:'All good my guy'})
      }
      catch(err){
        console.log(err)
      }
      // Perform actions for POST request
    } else {
      // Handle other HTTP methods if needed
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }