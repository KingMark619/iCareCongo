import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import { Mukta } from '@next/font/google'
import localFont from '@next/font/local'
import Card from './components/StatCard/Card'

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
        <p>Dashboard here</p>
      </main>
    </>
  )
}


