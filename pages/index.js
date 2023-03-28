import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import { Mukta } from '@next/font/google'
import localFont from '@next/font/local'

import { createClient } from "next-sanity";

// const mukta = Mukta({
//   subsets:['latin'],
//   weight:['400','700']
// })

const mukta = localFont({
  src:'../assets/Mukta/Mukta-Light.ttf'
})

const client = createClient({
  projectId: 'n3nue3rt',
  dataset:'production',
  apiVersion:'2023-03-10',
  useCdn: true,
  // token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})


export default function Home({data}) {
  console.log(data)
  return (
    <>
      <Head>
        <title>iCare Congo</title>
        <meta name="description" content="Hospital Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mukta.className}>
        <Layout/>
      </main>
    </>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const query = `*[_type == "doctor"]`

  const data = await client.fetch(query);
  // Pass data to the page via props
  return { props: { data } }
}

