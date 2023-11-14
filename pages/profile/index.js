import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import './profile.module.css'
import { userBig } from '@/assets/icons'
import { useAuth } from '../context/AuthContext'
import { useForm } from 'react-hook-form'
import { app, initFirestore } from '@/firebase/clientApp'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'


const index = () => {
    const db = initFirestore()
    const auth = getAuth(app)

    const {activeUser} = useAuth()
    const {register, handleSubmit} = useForm()

    const [newEmail,setNewEmail] = useState()
    const [newPassword,setNewPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const [disabled,setDisabled] = useState(true)
    const [newFirstName,setNewFirstName] = useState()
    const [newLastName,setNewLastName] = useState()
    const [newPhoneNumber,setNewPhoneNumber] = useState()

    useEffect(() => {
        // console.log(activeUser)
    },[])

    const submit = async (data) => {
        console.log(data)
        const userRef = doc(db, 'users', activeUser?.id);
        try {
            await setDoc(userRef, { 
                ...data,
            }, { merge: true });
        alert('submitted successfully')
        //   router.push('/')
        } catch (err) {
            alert('Fill in every field')
        }
    }
  return (
    <form className="card m-2" onSubmit={handleSubmit(submit)}>
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <Image className="mt-5" alt="profile" width={150} height={150} src={userBig}/>
                <span className="font-weight-bold">{activeUser?.firstNname} {activeUser?.lastName}</span>
                <span className="text-black-50">{activeUser?.email}</span>
                <span> </span>
            </div>
        </div>
        <div className="col-md-7 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <label className="labels">First Name</label>
                        <input 
                            disabled={disabled} 
                            defaultValue={activeUser?.firstNname} 
                            type="text" 
                            className="form-control" 
                            placeholder="first name" 
                            onChange={(e)=>setNewFirstName(e.target.value)}
                            {...register('firstNname')}/>
                    </div>
                    <div className="col-md-6">
                        <label className="labels">Last Name</label>
                        <input 
                            disabled={disabled} 
                            defaultValue={activeUser?.lastName} 
                            type="text" 
                            className="form-control" 
                            placeholder="last name" 
                            onChange={(e)=>setNewLastName(e.target.value)}
                            {...register('lastName')}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <label className="labels">Password</label>
                        <input 
                            disabled={disabled} 
                            type="password" 
                            className="form-control" 
                            placeholder="new password" 
                            onChange={(e)=>setNewPassword(e.target.value)}
                            {...register('password')}/>
                    </div>
                    <div className="col-md-6">
                        <label className="labels">Comfirm password</label>
                        <input 
                            disabled={disabled} 
                            type="password" 
                            className="form-control" 
                            placeholder="comfirm password" 
                            onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <label className="labels">Mobile Number</label>
                        <input 
                            disabled={disabled} 
                            defaultValue={activeUser?.phone} 
                            type="text"
                            className="form-control" 
                            placeholder="enter phone number" 
                            {...register('phone')}/>
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Enter email</label>
                        <input 
                            disabled={disabled} 
                            defaultValue={activeUser?.email} 
                            type="text" 
                            className="form-control" 
                            placeholder="enter email" 
                            {...register('email')}/>
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Comfirm email</label>
                        <input disabled={disabled} type="text" className="form-control" placeholder="comfirm email" onChange={(e)=>setNewEmail(e.target.value)}/>
                    </div>
                </div>
                {/* <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value=""/></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state"/></div>
                </div> */}
                <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems:'center',
                            marginTop:50
                        }}>
                            <button style={{
                                width:'auto',
                                height:40,
                                color:'black',
                                fontSize:12,
                                padding:10,
                                fontWeight:'400',
                                border:'none',
                                marginInlineEnd:15,
                                backgroundColor:'#FFFFFF',
                                border:'0.5px solid lightgray',
                                borderRadius:4,
                            }} onClick={()=>{
                                setDisabled(!disabled)
                            }}>{disabled?'Edit':'Cancel'}</button>

                            {/* <input type="submit" style={{
                                width:'auto',
                                height:40,
                                color:'#0000AC',
                                fontSize:12,
                                padding:10,
                                fontWeight:'400',
                                backgroundColor:'white',
                                border:'0.5px solid #0000AC',
                                borderRadius:4,
                                marginInlineEnd:15,
                            }} /> */}
                            <button 
                            disabled={disabled}
                            type='submit'
                            style={{
                                width:'auto',
                                height:40,
                                color:'white',
                                fontSize:12,
                                padding:10,
                                fontWeight:'400',
                                border:'none',
                                marginInlineEnd:15,
                                backgroundColor:'#0000AC',
                                border:'0.5px solid #0000AC',
                                borderRadius:4,
                            }}>Submit</button>
                        </div>
            </div>
        </div>
        {/* <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value=""/></div> 
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value=""/></div>
            </div>
        </div> */}
    </div>
</div>
</form>

  )
}

export default index