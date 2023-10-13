import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head"
import Layout from './components/Layout/Layout'
import StateContext, { useStateContext } from './context/StateContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { SessionProvider } from 'next-auth/react'


export default function App({ Component, pageProps }) {

  return (
    <SessionProvider>
      <StateContext>
        <AuthProvider>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
          <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
        </AuthProvider>
      </StateContext>
  </SessionProvider>
  )
}
