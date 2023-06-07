import React,{useState} from 'react'
import Layout from '../components/Layout/Layout'
import {useForm} from 'react-hook-form'
import Divider from '../components/Divider/Divider'


const Register = () => {
    const {register, handleSubmit} = useForm()
    const [data, setData] = useState()


    // const [firstName, setFirstName] =useState('')
    // const [address, setAddress] = useState('')
    // const [phone, setPhone] = useState()
    // const [birthday, setBirthday] = useState('')
    // const [specification, setSpecification] = useState('')
    const [weight,setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBMI] = useState(0)
    // const [gender, setGender] = useState('')
    // const [appointment, setAppointment] = useState(false)
    // const [purpose, setPurpose] = useState('')


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
    const  submit = async (data)=>{
        setData(data)
        console.log(data)
        
        // await fetch("/api/patient",{
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // })
        // .then(()=>{
        //     console.log(data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        // check all fields
        
        // return errors 

    }

  return (
    <>
        <div style={{
            width: '100%',
            height: '100%',
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
                            marginBottom: 10
                        }}>
                        <p style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    marginBottom:0,
                                    color:'black'
                                }}>Patient Information</p>
                        </div>
                        {/* Form Bellow */}
                        <div class="row">
                            <div class="col">
                                {/* <!-- Name input --> */}
                                <div class="form-outline">
                                <label class="form-label" for="form8Example3">First name</label>
                                <input type="text" id="form8Example3" class="form-control"{...register('firstName')} />
                                
                                </div>
                            </div>
                            <div class="col">
                                {/* <!-- Name input --> */}
                                <div class="form-outline">
                                <label class="form-label" for="form8Example4">Last name</label>
                                <input type="text" id="form8Example4" class="form-control" {...register('lastName')} />
                                
                                </div>
                            </div>
                            <div class="col">
                                {/* <!-- Email input --> */}
                                <div class="form-outline">
                                <label class="form-label" for="form8Example5">Email address</label>
                                <input type="email" id="form8Example5" class="form-control" {...register('email')} />
                                
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                {/* <!-- Age input --> */}
                                <div class="form-outline">
                                <label class="form-label" for="form8Example3">Age</label>
                                <input type="number" id="form8Example3" class="form-control" {...register('age')} />
                                
                                </div>
                            </div>
                            <div class="col">
                                {/* <!-- Phone input --> */}
                                <div class="form-outline">
                                <label class="form-label" for="form8Example4">Phone</label>
                                <input type="text" id="form8Example4" class="form-control" {...register('phone')} />
                                
                                </div>
                            </div>
                            <div class="col">
                                {/* <!-- Emergency input --> */}
                                <div class="form-outline">
                                <label class="form-label" for="form8Example5">Emergency contact</label>
                                <input type="phone" id="form8Example5" class="form-control" {...register('emergencyContact')} />
                                
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

                        <div class="row">
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example3">BP</label>
                                <input type="number" id="form8Example3" class="form-control" {...register('bloodPressure')} />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example4">Pulse</label>
                                <input type="number" id="form8Example4" class="form-control" {...register('pulse')} />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example5">Temperature</label>
                                <input type="number" id="form8Example5" class="form-control" {...register('temperature')} />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example3">Height (cm)</label>
                                <input type="number" id="form8Example3" class="form-control" {...register('height')} />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example4">Weight (kg)</label>
                                <input type="number" id="form8Example4" class="form-control" {...register('weight')}  />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example5">BMI</label>
                                <input type="text" id="form8Example5" class="form-control" {...register('bmi')} value={bmi} /> 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example3">Blood Oxygen</label>
                                <input type="number" id="form8Example3" class="form-control" {...register('bloodOxygen')} />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example4">General Conditions</label>
                                <input type="text" id="form8Example4" class="form-control" {...register('generalCondition')}/>
                                </div>
                            </div>
                            {/* <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example5">BMI</label>
                                <input type="text" id="form8Example5" class="form-control" /> 
                                </div>
                            </div> */}
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

                        <div class="row">
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example3">Department</label>
                                <select class="form-select" aria-label="Default select example" {...register('department')}>
                                    <option value="Pediatry">Pediatry</option>
                                    <option value="Outpatient">Outpatient Medicine</option>
                                    <option value="Gynecology">Gynecology</option>
                                    <option value="Trauma">Trauma</option>
                                    <option value="Dentistry">Dentistry</option>
                                </select>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example4">Doctor</label>
                                <input type="text" id="form8Example4" class="form-control" {...register('doctor')} />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example5">Status</label>
                                <input type="text" id="form8Example5" class="form-control" {...register('status')} /> 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example3">Medications</label>
                                <input type="text" id="form8Example3" class="form-control" {...register('medication')} />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                <label class="form-label" for="form8Example4">Appointment</label>
                                <input type="datetime-local" id="form8Example4" class="form-control" {...register('appointment')} />
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
                                }} onClick={()=>{}}>Cancel</button>

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