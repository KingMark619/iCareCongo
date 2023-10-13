
import { filter, help, plus, reload, search } from '@/assets/icons'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import { useStateContext } from '@/pages/context/StateContext'
import Link from "next/link"

const AppointmentList = () => {

    const reloadContent = () => {
        // setPatientList(patients)
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
                    fontSize:18,
                    fontWeight:'500',
                }}>Appointment List</p>
                     
                {/* Total Patients ({totalPatients})  */}
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
                    src={reload}
                    width={20}
                    height={20}
                    alt="help"
                    onClick={() =>(reloadContent())}
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
                    <tr>
                        <th scope="row">6</th>
                        <td>this</td>
                        <td>that</td>
                        <td>this</td>
                        <td>that</td>
                        <td>...</td>
                    </tr>
                {/* {patients?.map((patient,index)=>{
                    return <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{patient?.firstName} {patient?.lastName}</td>
                        <td>{patient?.medHistory}</td>
                        <td>{patient?.status}</td>
                        <td>{patient?.appointment? patient?.appointment : '- - - -'}</td>
                        <td>...</td>
                    </tr>
                })} */}
            </tbody>
            </table>
    </div>
  )
}

export default AppointmentList