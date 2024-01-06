'use client'

import React,{useState} from 'react'
import Layout from '../components/Layout/Layout'
import {useForm} from 'react-hook-form'
import Divider from '../components/Divider/Divider'
import { app, initFirestore } from '@/firebase/clientApp'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Register = () => {
    const db = initFirestore()
    const auth = getAuth(app)

    const router = useRouter()

    const {register, handleSubmit} = useForm()
    const [data, setData] = useState()
    const [date,setDate] = useState()

    const [weight,setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBMI] = useState(0)

    const [loader, setLoader] = useState(false)

    
    const setCalendar = (date) => {
        // Define a regular expression to match the date components
        const dateRegex = /^(\w{3}) (\w{3}) (\d{2}) (\d{4})/
        // Use the exec method to extract the matched groups
        const match = dateRegex.exec(date);

        if (match) {
            const day = match[1];    // Day (e.g., Sat)
            const month = match[2];  // Month (e.g., Jan)
            const date = match[3];   // Date (e.g., 06)
            const year = match[4];   // Year (e.g., 2024)

            // Concatenate the date components into a string
            const calendar = `${date} ${month} ${year}`
            setDate(calendar)
        } else {
        // console.log("No match found");
        }
    }
    useEffect(()=>{
        const currentDate = new Date();
        setCalendar(currentDate)
    },[])

    const checkData = () => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        //check password
        if (firstName !== '' && 
            address !== '' && 
            phone !== '' && 
            birthday !== '' && 
            specification !== '' && 
            weight !== '' && 
            height !== '' && 
            appointment && 
            purpose
            ) {
                // submit all the info
                submit()
            }
        else {
            alert('Please fill the form')
        }
    }
    const handleBMI=()=>{
        let bmi
        if(height && weight){
           bmi = height / weight * weight 
           setBMI(bmi)
        }
    }
    const submit = async (data) => {
        if(data.firstName !== '' && 
        data.lastName !== '' && 
        data.phone !== '' )
        {
            // setLoader(true)
           try {
            await addDoc(collection(db, "patients",), {
            date,
            ...data
          });
          alert('patient added successfully')
        //   setLoader(false)
          router.push('/')
            } catch (err) {
                console.log(err)
            } 
        } else {
            alert('Complete Patient Information')
        } 
    }
    // const  submit = async (data)=>{
    //     // setData(data)
    //     console.log(data)
    //     try {
    //         const response = await fetch('/api/patient', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(data),
    //         });
    //         const result = await response.json();
    //         console.log(result)
    //       } catch (error) {
    //         console.error('Error submitting data:', error);
    //       }
    //     };

  return (
    <>
        <div className="card m-2 p-2" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {/* content below */}
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white'
            }}>
                    {/* form */}
                    <form onSubmit={handleSubmit(submit)} style={{padding:10}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly', 
                    }}>
                        <div style={{
                            paddingLeft: 20,
                            paddingRight:20,
                            marginBottom: 10,
                            display:'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <p style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    marginBottom:0,
                                    color:'black'
                                }}>Patient Information</p>
                            <p>
                                Date: {date}
                            </p>
                        </div>
                        
                        {/* Form Bellow */}
                        <div className="row">
                            <div className="col">
                                {/* <!-- Name input --> */}
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example3">First name</label>
                                <input type="text" id="form8Example3" className="form-control"{...register('firstName')} />
                                
                                </div>
                            </div>
                            <div className="col">
                                {/* <!-- Name input --> */}
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example4">Last name</label>
                                <input type="text" id="form8Example4" className="form-control" {...register('lastName')} />
                                </div>
                            </div>
                            <div className="col">
                                {/* <!-- Email input --> */}
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example5">Email address</label>
                                <input type="email" id="form8Example5" className="form-control" {...register('email')} />
                                
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                {/* <!-- sex input --> */}
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="form8Example5">Sex</label>
                                    <select className="form-select" aria-label="Default select example" {...register('sex')}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                {/* <!-- Age input --> */}
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="form8Example3">Age</label>
                                    <input type="number" id="form8Example3" className="form-control" {...register('age')} />
                                </div>
                            </div>
                            <div className="col">
                                {/* <!-- Phone input --> */}
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="form8Example4">Phone</label>
                                    <input type="text" id="form8Example4" className="form-control" {...register('phone')} /> 
                                </div>
                            </div>
                        </div>

                        <Divider/>

                        <div style={{
                            paddingLeft: 20,
                            marginBottom: 10
                        }}>
                        <p style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    marginBottom:0,
                                    color:'black'
                                }}>Vitals and Other</p>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example3">BP</label>
                                <input type="number" id="form8Example3" className="form-control" {...register('bloodPressure')} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example4">Pulse</label>
                                <input type="number" id="form8Example4" className="form-control" {...register('pulse')} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example5">Temperature</label>
                                <input type="number" id="form8Example5" className="form-control" {...register('temperature')} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example3">Height (cm)</label>
                                <input type="number" id="form8Example3" className="form-control" {...register('height')} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example4">Weight (kg)</label>
                                <input type="number" id="form8Example4" className="form-control" {...register('weight')}  />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example5">BMI</label>
                                <input type="text" id="form8Example5" className="form-control" {...register('bmi')} value={bmi} /> 
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example3">Blood Oxygen</label>
                                <input type="number" id="form8Example3" className="form-control" {...register('bloodOxygen')} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example4">General Conditions</label>
                                <input type="text" id="form8Example4" className="form-control" {...register('generalCondition')}/>
                                </div>
                            </div>
                            {/* <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example5">BMI</label>
                                <input type="text" id="form8Example5" className="form-control" /> 
                                </div>
                            </div> */}
                        </div>

                        <Divider/>
                        {/* Loader */}
                        { loader?
                            <div className="spinner-border text-primary" role="status">
                            <span className="sr-only"></span>
                            </div> : <></>
                        }
                        {/* Symptoms */}
                        <div style={{
                            paddingLeft: 20,
                            marginBottom: 10
                        }}>
                        <p style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    marginBottom:0,
                                    color:'black'
                                }}>Symptoms and Conditions</p>
                        </div>
                        <div className='col'>
                            <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example4">Patient status</label>
                                <textarea type="text" className="form-control" {...register('symptoms')}/>
                            </div>
                        </div>
                        <Divider/>
                        {/* medical history */}
                        <div style={{
                            paddingLeft: 20,
                            marginBottom: 10
                        }}>
                        <p style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    marginBottom:0,
                                    color:'black'
                                }}>Medical History</p>
                        </div>
                        <div className="row">
                            <div className='col'>
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="form8Example4">Anamnesis vitae</label>
                                    <textarea type="text" className="form-control" {...register('anamnesisVitae')}/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="form8Example4">Anamnesis morbi</label>
                                    <textarea type="text" className="form-control" {...register('anamnesisMorbi')}/>
                                </div>
                            </div>
                        </div>
                        <Divider/>
                        <div style={{
                            paddingLeft: 20,
                            marginBottom: 10
                        }}>
                        <p style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    marginBottom:0,
                                    color:'black'
                                }}>Consultation and other</p>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example3">Department</label>
                                <select className="form-select" aria-label="Default select example" {...register('department')}>
                                    <option value="Pediatry">Pediatry</option>
                                    <option value="Outpatient">Outpatient Medicine</option>
                                    <option value="Gynecology">Gynecology</option>
                                    <option value="Trauma">Trauma</option>
                                    <option value="Dentistry">Dentistry</option>
                                </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example4">Doctor</label>
                                <input disabled type="text" id="form8Example4" className="form-control"/>
                                </div>
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example3">Status</label>
                                <select className="form-select" aria-label="Default select example" {...register('status')}>
                                    <option value="inpatient">Inpatient</option>
                                    <option value="outpatient">Outpatient</option>
                                </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                <label className="form-label" htmlFor="form8Example4">Appointment</label>
                                <input type="datetime-local" id="form8Example4" className="form-control" {...register('appointment')} />
                                </div>
                            </div>
                            
                        </div>
                        {/* End of form */}
                    </div>
                    {/* button row */}
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
                                }} onClick={(e)=>{
                                    e.preventDefault()
                                    router.back()
                                }}>Cancel</button>

                                <input type="submit" style={{
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
                                }} />
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}


export default Register