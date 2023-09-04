import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Mukta } from '@next/font/google'
import localFont from '@next/font/local'
import Card from './components/Card/Card'
import Task from './task'
import Appointment from './appointment'
import UpcomingSchedule from './schedule'

// const mukta = Mukta({
//   subsets:['latin'],
//   weight:['400','700']
// })

const mukta = localFont({
  src:'../assets/Mukta/Mukta-Light.ttf'
})

export default function Home() {

  return (
    <>
      <Head>
        <title>iCare Congo</title>
        <meta name="description" content="Hospital Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mukta.className}>
        <Card/>
        <div style={{
          display: 'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'start'
        }}>
          <Task/>
          <UpcomingSchedule/>
        </div>
        
      </main>
    </>
  )
}


