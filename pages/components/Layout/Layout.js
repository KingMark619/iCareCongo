import React from 'react'
import Appointment from '../Appointment/Appointment'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Card from '../StatCard/Card'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <>
    <div>
    <div className={styles.container}>
        <div className={styles.header}><Header/></div>
        <div className={styles.content}>
         {/* add content here */}
         <Appointment/>
        </div>
        <div className={styles.nav}><Navbar/></div>
        <div className={styles.footer}>Footer</div>
    </div>
    </div>
    </>
  )
}

export default Layout