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
    
    useEffect(() => {
            setPatientList(patients)
            console.log(patients)
    },[patients])
    

const Row = ({patient}) => {
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
                
                  <p style={{
                    flex:1,
                    backgroundColor:'green',
                    paddingInline:20,
                    paddingTop:5,
                    paddingBottom:5,
                    borderRadius:12,
                    color:'white',
                    fontSize:14,
                    fontWeight:'400',
                    marginBottom:0
                    }}>{patient?.status}</p>  
               
                
                <p style={{
                flex:1,
                color:'black',
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
                }}>20/10/2022</p>
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
    <>
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
        <div style={{
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
            {/* header */}
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
            {/* list */}
            {patients?.map((item,index)=>{      
               return <Row patient={item} key={index}/>
            })}
              
            
            
        </div>
    </>
  )
}



export default Patient
