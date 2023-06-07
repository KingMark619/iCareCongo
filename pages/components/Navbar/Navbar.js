import React,{useState} from 'react'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
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
import './Navbar.module.css'
import Link from 'next/link';

const Navbar = ({parentCallback}) => {
    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(0)
    const navItems=[
        {
            id:0,
            name:'Dashboard',
            icon: dashboard,
            link:'/'
        },
        {
            id:1,
            name:'Schedule',
            icon: schedule,
            link:'/schedule'
        },
        {
            id:2,
            name:'Tasks',
            icon: tasks,
            link:'/task'
        },
        {
            id:3,
            name:'Patients',
            icon: patient,
            link:'/patientList'
        },
        {
            id:4,
            name:'Messages',
            icon: messages,
            link:'/messages'
        },
        {
            id:5,
            name:'Analytics',
            icon: settings,
            link:'/settings'
        },
    ]
    const handleSelection = (event,index) => {
        setSelected(index)
    }
    // parentCallback(selected)
    
 
  return (
    <div style={{
        display:'block',
        position: "relative",
        backgroundColor: "white",
        height:"100%",
        width:'20%',
    }}>
        <p style={{ color:'black'}}>Menu</p>
        <div className="container">
            { navItems.map((item, index)=>{
                return (
                    <Link key={item.id}  href={item.link}>
                <div 
                    style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginBlockEnd:10,
                        padding:10,
                        backgroundColor:selected===index?'#F8F9FA':'white',
                        borderLeft:selected===index?'3px solid #2f80ed':'none'
                    }}>
                    <Image
                        src={item.icon}
                        alt="dashboard"
                        className="menu-icon"
                        width={20}
                        height={20}
                        color='red'
                    />
                    <p style={{
                        fontSize:selected===index?16:14,
                        color:selected===index?'#2f80ed':'black',
                        fontWeight:'400',
                        marginInlineStart:15,
                        marginBottom:0
                    }}>{item.name}</p>
                </div>
                </Link>
                )
            })}

        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar