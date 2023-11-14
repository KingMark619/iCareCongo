import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Mukta } from '@next/font/google'
import localFont from '@next/font/local'
import Card from './components/Card/Card'
// import Card as Cardi from './components/StatCard'
import Task from './task'
import Appointment from './appointment'
import UpcomingSchedule from './schedule'
import { useEffect, useState } from 'react'
import StatCard from './components/StatCard/Card'
import { useAuth } from './context/AuthContext'
import Patient from './patientList'
import AppointmentList from './components/AppointmentList/AppointmentList'
import Cookies from 'js-cookie'

// const mukta = Mukta({
//   subsets:['latin'],
//   weight:['400','700']
// })

const mukta = localFont({
  src:'../assets/Mukta/Mukta-Light.ttf'
})

export default function Home() {
  const {activeUser } = useAuth()
  const [role, setRole ] = useState()
  const localUser = Cookies.get('cookie')
  useEffect(()=>{
    setRole(activeUser?.role)
    // console.log(activeUser)
  },[])
  return (
    <>
      <Head>
        <title>iCare Congo</title>
        <meta name="description" content="Hospital Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mukta.className}>
        <StatCard/>
        {/* <Card/> */}
        <div>
          
          <Patient/>
          {/* {role==='Management'?<Task/>:
          <UpcomingSchedule/>} */}
        </div>
        <div style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'start'
        }}>
          
        </div>
      </main>
    </>
  )
}


