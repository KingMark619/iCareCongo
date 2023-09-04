import { useEffect, useState } from 'react';
import { loginFunction, useStateContext } from '@/pages/context/StateContext'
import jwt from 'jsonwebtoken'
import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'next/router';
// import { loginUser } from '../lib/auth';

export default function LoginPage() {
  const { users } = useStateContext()
  const {setToken } = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const router = useRouter();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    const matchedUser = users.find(user => user.email === email && user.password === password)
    if (matchedUser){
      console.log(matchedUser)
      setToken(matchedUser._id)
      // setToken(token)
      // pass the user to the whole app
    }
    else{
      console.log('Please check Email and Password')
    }
  };

  return (
    <div className='h-full'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
