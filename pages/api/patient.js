// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from "@/client"

export default async function patient(req, res) {
    const {firstName, lastName,_id} = JSON.parse(req.body)
    try{
      await client.create({
        _type:'patient',
        post:{
          // _type:'reference',
          _ref: _id
        },
        firstName,
        lastName
      })
    } catch(err){
      return res.status(500).json({message:"couldnt submit", err})
    }
    console.log("patient submitted")
    return res.status(200).json({message:"success"})
  }
  