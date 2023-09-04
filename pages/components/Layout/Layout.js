import React from 'react'
import { useState } from 'react'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

import styles from './Layout.module.css'

const Layout = ({children}) => {
 const [index, setIndex] = useState()

const handleCallback = (childData) =>{
    setIndex(childData)
    console.log(index)
}

  return (
    <>
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
    
    {/* Footer */}
    </>
    
    // <div>
    // <div className={styles.container}>
    //     <div className={styles.header}><Header/></div>
    //     <div className={styles.content}>
    //         {/* {navItems[index]?.component} */}
    //         <Cont/>
    //     </div>
    //     <div className={styles.nav}><Navbar parentCallback = {handleCallback}/></div>
    // </div>
    // </div>
    
  )
}

export default Layout

// in the navbar component, im passing the index up to the parent component
// in the layout component(parent) im using it to select the component to display accordingly
// every component logic and data handling is done with the context API and inside each component file