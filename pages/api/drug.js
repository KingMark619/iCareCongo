import { client } from "@/client"

export default async function handler(req, res) {
    const { name, commercial } = JSON.parse(req.body)
    
    try {
        await client.create({
            _type:'drug',
            post:{
              // _type:'reference',
              _ref: _id
            },
            name,
            commercial,
          })
    }catch(err){
        return res.status(500).json({message:"couldnt submit", err})
      }
      console.log("patient submitted")
      return res.status(200).json({message:"success"})
  }