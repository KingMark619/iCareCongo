import React from 'react'
import Appointment from '../Appointment/Appointment'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Patient from '../PatientList/Patient'
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
         <Patient/>
        </div>
        <div className={styles.nav}><Navbar/></div>
    </div>
    </div>
    </>
  )
}

export default Layout