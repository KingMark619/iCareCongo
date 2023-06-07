import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head"
import Layout from './components/Layout/Layout'
import StateContext from './context/StateContext'

export default function App({ Component, pageProps }) {
  return (
  <StateContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </StateContext>
  )
}
