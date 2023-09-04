// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from "@/client"

// export default async function patient(req, res) {
//     const {
//       firstName,
//       lastName,
//       age,
//       appointment,
//       bloodOxygen,
//       bloodPressure,
//       bmi,
//       department,
//       doctor,
//       email,
//       emergencyContact,
//       generalCondition,
//       height,
//       medication,
//       phone,
//       pulse,
//       status,
//       temperature,
//       weight,
//       } = req.body
    
//     try{
//       await client.create({
//         _type:'patient',
//         post:{
//           // _type:'reference',
//           _ref: _id
//         },
//         firstName,
//         lastName,
//         age,
//         appointment,
//         bloodOxygen,
//         bloodPressure,
//         bmi,
//         department,
//         doctor,
//         email,
//         emergencyContact,
//         generalCondition,
//         height,
//         medication,
//         phone,
//         pulse,
//         status,
//         temperature,
//         weight,
//       })
//     } catch(err){
//       return res.status(500).json({message:"couldnt submit", err})
//     }
//     console.log("patient submitted")
//     return res.status(200).json({message:"success"})
//   }
  

// pages/api/example.js
export default function handler(req, res) {
  // Handle the HTTP request
  if (req.method === 'GET') {
    // Perform actions for GET request
    res.status(200).json({ message: 'GET request received' });
  } else if (req.method === 'POST') {
    console.log('POST request received')
    
    const {firstName,
      lastName,
      age,
      appointment,
      bloodOxygen,
      bloodPressure,
      bmi,
      department,
      doctor,
      email,
      emergencyContact,
      generalCondition,
      height,
      medication,
      phone,
      pulse,
      status,
      temperature,
      weight} = req.body
    
    try{
       client.create({
        _type:'patient',
        firstName,
        lastName,
        age,
        appointment,
        bloodOxygen,
        bloodPressure,
        bmi,
        department,
        doctor,
        email,
        emergencyContact,
        generalCondition,
        height,
        medication,
        phone,
        pulse,
        status,
        temperature,
        weight
       })
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
