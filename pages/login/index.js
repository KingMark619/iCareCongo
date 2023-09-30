'use client'
import { useEffect, useState, useContext } from 'react';
import { loginFunction, useStateContext } from '@/pages/context/StateContext'
import jwt from 'jsonwebtoken'
import userActions from '../helpers/userActions';
import {UserContext} from '../context/UserContext';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import {signIn, useSession } from 'next-auth/react'
import logo from '../../assets/logo/blue.png'
import backgrd from '../../assets/background/abstract.jpg'
import Image from 'next/image';
import {useForm} from 'react-hook-form'

export default function LoginPage() {
  const {register, handleSubmit} = useForm()
  const { data: session } = useSession()
  
  const { users } = useStateContext()
  const {setToken,setAuthenticated,setActiveUser } = useAuth()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(false);

  const router = useRouter();

  const submit = async (e) => {
    if(email !== '' && password !== '') {
      const user = users.find(user => user.email === email && user.password === password)
      if(user){
        // if there is a user, set auth status and pass user to the entire app
         setLoading(true)
         setActiveUser(user)
         // delay for loading animation
         setTimeout(() => {
            setLoading(false)
            setAuthenticated(true)
            router.push('/')
         },2000)
          
      } else {
        alert('Invalid credentials, contact system administrator')
      }
    } else {
      alert('Please enter valid credentials')
    }
      
  }
// const  submit = async ()=>{
//   const data = {
//     email: 'gabriel@icloud.com',
//     password: 'password'
//   }
//   try {
//       const response = await fetch('/api/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       const result = await response.json();
//       console.log(result)
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

    // const matchedUser = users.find(user => user.email === email && user.password === password)
    // if (matchedUser){
    //   console.log(matchedUser)
    //   setToken(matchedUser._id)
    //   setAuthenticated(true)
    //   setActiveUser(matchedUser)
    //   // add animation for welcome and delay
    //   alert('Welcome')
    //   // setTimeout(router.push('/'), 2000)
    //   router.push('/')
    // }
    // else{
    //   console.log('Please check Email and Password')
    // }
   
  return (
    <>
    <div style={{
      zIndex:-1,
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      opacity: '0.5',
      // filter:'blur(4px)'
    }}>
    <Image
      src={backgrd}
      alt="Logo" 
      fill
      // style={{objectFit:'cover'}}
    />
    </div>
    
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:'3rem',
      // zIndex:1,
      // position:'relative',
    }}>
<div className="card p-5 m-2" style={{width:'70%'}}>
<div style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      zIndex:1,
      position:'relative',
    }}>
          <div style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-around',
                  alignItems:'center',
                  width: '60%',
                  marginBottom:20
                }}>
                  
                  <Image
                    src={logo} 
                    alt="Logo" 
                    width="150" 
                    height="150" 
                    style={{
                      borderRadius:100,
                      border:'0.5px solid #2c70f4', 
                      padding:2
                    }}
                  />
                  <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'start',
                    paddingLeft:10
                  }}>
                    <p style={{
                      marginBottom:0,
                      color:'#2f80ed',
                      fontSize:28,
                      fontWeight:'400'
                      }}>iCare Congo</p>
                      <p style={{
                      marginBottom:0,
                      color:'red',
                      fontSize:25,
                      fontWeight:'400'
                      }}>Health the modern way</p>
                </div>
              </div>
    </div>
    <form onSubmit={handleSubmit(submit)} style={{
      display:'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4" style={{width: '70%'}}>
  <label className="form-label" htmlFor="form2Example1">Email address</label>
    <input 
      type="email" 
      id="form2Example1" 
      className="form-control" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  { loading?
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only"></span>
    </div> : <></>
  }
  

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4" style={{width:"70%"}}>
  <label className="form-label" htmlFor="form2Example2">Password</label>
    <input 
      type="password" 
      id="form2Example2" 
      className="form-control"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  {/* <!-- 2 column grid layout htmlFor inline styling --> */}
  <div className="row mb-4 d-flex justify-center align-top" style={{width:'70%'}}>
    <div className="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked onChange={()=>{}} />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col d-flex justify-content-center">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
      {error && <p>{error}</p>}
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4" style={{backgroundColor:'#2f80ed'}}>Sign in</button>

  {/* <!-- Register buttons --> */}
  {/* <div className="text-center">
    <p>Not a member? <a href="#!">Contact Administrator</a></p>
  </div> */}
</form>
</div>
    </div>
    
</>
  );
}
