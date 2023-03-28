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
        height:"100%",
        margin:'auto'
    }}>
        <p style={{ color:'black'}}>Menu</p>
        <div className="container">
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBlockEnd:20
            }}>
                <Image
                    src={dashboard}
                    alt="dashboard"
                    className="menu-icon"
                    width={20}
                    height={20}
                />
                <p style={{
                    fontSize:14,
                    color:'black',
                    fontWeight:'400',
                    marginInlineStart:15,
                    marginBottom:0
                }}>Dashboard</p>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBlockEnd:20
            }}>
                <Image
                    src={schedule}
                    alt="dashboard"
                    className="menu-icon"
                    width={20}
                    height={20}
                />
                <p style={{
                    fontSize:14,
                    color:'black',
                    fontWeight:'400',
                    marginInlineStart:15,
                    marginBottom:0
                }}>Schedule</p>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBlockEnd:20
            }}>
                <Image
                    src={tasks}
                    alt="dashboard"
                    className="menu-icon"
                    width={20}
                    height={20}
                />
                <p style={{
                    fontSize:14,
                    color:'black',
                    fontWeight:'400',
                    marginInlineStart:15,
                    marginBottom:0
                }}>Tasks</p>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBlockEnd:20
            }}>
                <Image
                    src={patient}
                    alt="dashboard"
                    className="menu-icon"
                    width={20}
                    height={20}
                />
                <p style={{
                    fontSize:14,
                    color:'black',
                    fontWeight:'400',
                    marginInlineStart:15,
                    marginBottom:0
                }}>Patients</p>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBlockEnd:20
            }}>
                <Image
                    src={messages}
                    alt="dashboard"
                    className="menu-icon"
                    width={20}
                    height={20}
                />
                <p style={{
                    fontSize:14,
                    color:'black',
                    fontWeight:'400',
                    marginInlineStart:15,
                    marginBottom:0
                }}>Messages</p>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBlockEnd:20
            }}>
                <Image
                    src={settings}
                    alt="dashboard"
                    className="menu-icon"
                    width={20}
                    height={20}
                />
                <p style={{
                    fontSize:14,
                    color:'black',
                    fontWeight:'400',
                    marginInlineStart:15,
                    marginBottom:0
                }}>Analytics</p>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar