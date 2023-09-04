// import client from '@sanity/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { client } from '@/client';
import { useStateContext } from '../context/StateContext';
import { useEffect } from 'react';

export async function loginUser (email, password) {
  
  const { users } = useStateContext()

  const [userList, setuserList] = useState([])
  useEffect(() => {
     
     console.log(users)
  },[])
  // const user = await client.fetch(
  //   `*[_type == "user"]`,
  //   { email }
  // );

  if (!user) {
    throw new Error('Invalid email or password');
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  return {
    token,
    user: {
      id: user._id,
      email: user.email,
    },
  };
}

export async function getUser(token) {
  if (!token) {
    return null;
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await sanityClient.fetch(
      `*[_type == "user" && _id == $id][0]`,
      { id }
    );

    if (!user) {
      return null;
    }

    return {
      id: user._id,
      email: user.email,
    };
  } catch (err) {
    return null;
  }
}
