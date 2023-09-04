// pages/api/login.js
import { client } from '@/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, password } = req.body;

//     try {
//       // Retrieve the user from Sanity based on the username or email
//       const user = client.fetch(
//         `*[_type == 'user' && (username == $username || email == $username)]`,
//         { username }
//       );

//       if (user.length === 0) {
//         return res.status(404).json({ error: 'User not found' });
//       } else {
//         res.status(200).json({ message: 'Login', token });
//       }

//       const { hashedPassword } = user[0];

//     //   Verify the provided password against the stored hashed password
//       const passwordMatch = bcrypt.compare(password, hashedPassword);

//       if (!passwordMatch) {
//         return res.status(401).json({ error: 'Invalid password' });
//       }

//       // Create a JSON Web Token (JWT) for user authentication
//       const token = jwt.sign({ username }, 'YOUR_SECRET_KEY', {
//         expiresIn: '1h', // Set the token expiration time as per your requirements
//       });

//       res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//       console.error('Error logging in user:', error);
//       res.status(500).json({ error: 'Failed to log in user' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

// pages/api/example.js
export default function handler(req, res) {
    // Handle the HTTP request
    if (req.method === 'GET') {
      // Perform actions for GET request
      res.status(200).json({ message: 'GET request received' });
    } else if (req.method === 'POST') {
      console.log(req.body);
      
      const {email,password} = req.body;
      
      try{
      
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