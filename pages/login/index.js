
import { useStateContext } from "../context/StateContext"
import { useState, useEffect } from "react"
import {useForm} from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Link from "next/link"


const Login =() => {

    const { push } = useRouter();

    const {register, handleSubmit} = useForm()

    const {users} = useStateContext()

    const [userList, setUserList] = useState()
    const [role, setRole] = useState('Nurse')

    useEffect(() => {
        setUserList(users)
        console.log(users)
},[users])
// get new user
    let newUser
    let newPassword
// compare input to database 
const onSubmit = ({newEmail,newPassword}) => {
    
    userList.map(({email,password,role}) => {
        console.log(newEmail)
        if(newEmail === email && newPassword === password) {
            setRole(role)
            
            push('/test')
        } else {
            console.log('Please check your email and password')        
            // display error message to user 
        }
    })
    
}

// assign role through the app 
return(
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input {...register('newEmail')} type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input {...register('newPassword')} type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  {/* <!-- Register buttons --> */}
  {/* <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div> */}
</form>
    </>
)
}
export default Login 