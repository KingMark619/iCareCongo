import React, { useEffect,useState } from 'react'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

import LoginPage from '@/pages/login'

import { useAuth } from '../../context/AuthContext';
import { app, initFirestore } from '@/firebase/clientApp'
import { getAuth } from 'firebase/auth'
import { collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore'


const Layout = ({children}) => {
  const db = initFirestore()

  const auth = getAuth(app)

  const {setToken,setAuthenticated,setActiveUser,activeUser } = useAuth()
  const  authenticated  = true

  const [index, setIndex] = useState()

  const handleCallback = (childData) =>{
      setIndex(childData)
      console.log(index)
  }
  const addToDb = async () => {
    // Profiles.map((profile,index) =>{
    //    setDoc(doc(db, "users", profile.id), profile)
    // })
    
    
    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  }
  
  useEffect(() =>{
    console.log(auth.currentUser)
    // addToDb()  
  },[auth])

  return (
    <>
    {auth.currentUser?
    <div>
    <Header/>
      <div style={{
        display:'flex',
        flexDirection:'row',
        height:'90vh'
      }}>
        <Navbar/>
        <div style={{
          backgroundColor:'#F9F9F9',
          width:'100%',
          borderLeft:'0.5px solid lightgray',
          overflow:'scroll',
        }}>
          <main style={{
            width:'auto',
            height:'100%',
            paddingTop: '1rem',
            paddingBottom: '1rem'
          }}>{children}</main>
        </div>   
      </div>
      </div>  : <LoginPage/>}
    
    
    </>   
  )
}

export default Layout

// in the navbar component, im passing the index up to the parent component
// in the layout component(parent) im using it to select the component to display accordingly
// every component logic and data handling is done with the context API and inside each component file