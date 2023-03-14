import React from 'react'
import Image from 'next/image'
import {
  dashboard,
  messages,
  patient,
  schedule,
  settings,
  support,
  tasks
} from '../../../assets/icons'
// import './Navbar.module.css'

const Navbar = () => {
  return (
    <div style={{
        display:'block',
        position: "relative",
        backgroundColor: "white",
        top:76,
        height:"100%",
        margin:'auto'
    }}>
        <p style={{ color:'black'}}>Menu</p>
        <div className="container">
            <div>
                <Image
                    src={dashboard}
                    alt="dashboard"
                    className="menu-icon"
                    width={25}
                    height={25}
                />
                <p className="fs-6 text-body">Dashboard</p>
            </div>
            <div className="menu-item selected">
                <Image
                    src={schedule}
                    alt="dashboard"
                    className="menu-icon"
                    width={25}
                    height={25}
                />
                <p className="fs-6 text-body">Schedule</p>
            </div>
            <div className="menu-item selected">
                <Image
                    src={tasks}
                    alt="dashboard"
                    className="menu-icon"
                    width={25}
                    height={25}
                />
                <p className="fs-6 text-body">Tasks</p>
            </div>
            <div className="menu-item selected">
                <Image
                    src={patient}
                    alt="dashboard"
                    className="menu-icon"
                    width={25}
                    height={25}
                />
                <p className="fs-6 text-body">Patients</p>
            </div>
            <div className="menu-item selected">
                <Image
                    src={messages}
                    alt="dashboard"
                    className="menu-icon"
                    width={25}
                    height={25}
                />
                <p className="fs-6 text-body">Messages</p>
            </div>
            <div className="d-inline">
                <Image
                    src={settings}
                    alt="dashboard"
                    className="menu-icon"
                    width={25}
                    height={25}
                />
                <p className="fs-6 text-body">Analytics</p>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar