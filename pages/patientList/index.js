import { filter, help, plus, profile, search } from '@/assets/icons'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import styles from './Patient.module.css'
import { useStateContext } from '@/pages/context/StateContext'
import Link from "next/link"
import Layout from '../components/Layout/Layout'

const Patient = () => {
    const { patients } = useStateContext()
    
    const [patientList, setPatientList] = useState([])
    const [date, setDate] = useState([])
    
    useEffect(() => {
            setPatientList(patients)
            // upload()
    },[patients])
    const setAppointment = (appointment) => {
        
    }
    
const  upload = () => {
    const data = {
        name:'drug',
        commercial:'drug commercial'
    }
     fetch("/api/drug",{
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(()=>{
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
}
const  Row =  ({patient}) => {
    // const regexPattern = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})$/;
    // const match =  patient?.appointment.search(regexPattern);
    // console.log(match)

    // if (match) {
    // const date = match[1]; // 2023-06-30
    // const time = match[2]; // 15:46:00

    // console.log('Date:', date);
    // console.log('Time:', time);
    // } else {
    // console.log('Invalid timestamp format');
    // }
    return(
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                width:'100%',
                paddingBlockStart:10,
                marginBottom:10
            }}>
                <p style={{
                flex:2,
                color:'black',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>{`${patient?.firstName} ${patient?.lastName}`}</p>
                <p style={{
                flex:1,
                color:'black',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>{patient?.medHistory}</p>
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: 'start',
                    alignItems:'start',
                    flex:1
                }}>
                    <p style={{
                        color:'black',
                        fontSize:14,
                        fontWeight:'400',
                    }}>{patient?.status}</p>
                    <div style={{
                        width:20,
                        height: 20,
                        backgroundColor:'green',
                        borderRadius:'50%',
                        marginLeft: '1rem'
                    }}/>
                </div>        
                <p style={{
                flex:1,
                color:'black',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>{setAppointment(patient?.appointment)}</p>
                <p style={{
                flex:1,
                color:'black',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>. . .</p>         
            </div>
    )
}
  return (
    <div className="card p-2 m-2">
        <div style={{
            width:'100%',
            height:60,
            padding:10,
            paddingInline:50,
            backgroundColor:'white',
            borderBottom:'0.5px solid #e0e0e0',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        }}>
                <p style={{
                color:'black',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>Total Patients (475)</p>        
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                width:'30%',
            }}>
                <div style={{
                    border:'0.5px solid #e0e0e0',
                    borderRadius:8,
                    width:40,
                    height:40,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <Link href="/test">
                  <Image 
                    src={plus}
                    width={20}
                    height={20}
                    alt="add"
                  />  
                </Link>
                </div>
                <div style={{
                    border:'0.5px solid lightgray',
                    borderRadius:8,
                    width:40,
                    height:40,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                  <Image 
                    src={search}
                    width={20}
                    height={20}
                    alt="search"
                    />  
                </div>
                <div style={{
                    border:'0.5px solid lightgray',
                    borderRadius:8,
                    width:40,
                    height:40,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                  <Image 
                    src={filter}
                    width={20}
                    height={20}
                    alt="filter"
                    />  
                </div>
                <div style={{
                    border:'0.5px solid lightgray',
                    borderRadius:8,
                    width:40,
                    height:40,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                  <Image 
                    src={help}
                    width={20}
                    height={20}
                    alt="help"
                    />  
                </div>
            </div>
        </div>
        {/* content row */}
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Diagnosis</th>
                <th scope="col">Status</th>
                <th scope="col">Next Appointment</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {patients?.map((patient,index)=>{
                    return <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{patient?.firstName} {patient?.lastName}</td>
                        <td>{patient?.medHistory}</td>
                        <td>{patient?.status}</td>
                        <td>{patient?.appointment? patient?.appointment : '- - - -'}</td>
                        <td>...</td>
                    </tr>
                })}
            </tbody>
            </table>
        {/* <div style={{
            width:'100%',
            padding:10,
            backgroundColor:'white',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',
            maxHeight:'60vh',
            overflow:'scroll',
        }}>
            <div className='contain' style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                width:'100%',
                paddingBottom:10,
                borderBottom:'0.5px solid lightgray'
            }}>
                
                <p style={{
                flex:2,
                color:'gray',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>Name</p>
                <p style={{
                flex:1,
                color:'gray',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>Diagnosis</p>
                <p style={{
                flex:1,
                color:'gray',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>Status</p>
                <p style={{
                flex:1,
                color:'gray',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>Next Appointment</p>
                <p style={{
                flex:1,
                color:'gray',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>Options</p>
            </div>
            {patients?.map((item,index)=>{      
               return <Row patient={item} key={index}/>
            })}
        </div> */}
    </div>
  )
}

export default Patient
