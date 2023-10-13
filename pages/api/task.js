import { client } from "@/client"

export default function handler(req, res) {
    const { userId, title } = req.body
    
        try{
            client.create({
             _type:'task',
             task,
             Id,
            })

            res.status(200).json({message:'All good my guy'})
         }
         catch(err){
           console.log(err)
         }
    
    res.status(200).json({ name: 'John Doe' })
  }
  