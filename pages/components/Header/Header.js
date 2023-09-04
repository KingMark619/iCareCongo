import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import logo from '../../../assets/logo/Logo.svg'
import { bell, envelope, exit, profile } from '@/assets/icons'
import Link from 'next/link'

// import NextAuth, {NextAuthOptions} from 'next/auth'
// import { NextApiRequest, NextApiResponse } from 'next';
// import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
// import { client } from '@/client'


const Header = () => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]
  useEffect(() => {
    const date = new Date()
    setDay(date.getDate())
    setMonth(date.getMonth())
    setYear(date.getFullYear())
  },[])

   
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ borderBottom:' 0.5px solid #828282'}}>
        <div className="container-fluid">
          <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width:'100%'
          }}>
            <Link style={{flex:1}} className="navbar-brand" href="/">
           
              <Image src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
              iCare
            
            </Link>
            <div style={{flex:2}} >
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'flex-end',
              alignItems:'center',
              flex:1
            }}>
              <p style={{
                fontSize:14,
                fontWeight:'400',
                color:'black',
                marginBottom:0
            }}>Kevin Kasongo</p>
              <p style={{
                fontSize:14,
                fontWeight:'bold',
                color:'black',
                marginBottom:0
            }}>General Doctor</p>
            </div>
            {/* icon and date */}
            <div style={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              flex:1
            }}>
              <div style={{ 
                width:'auto',
                padding:10,
                borderRadius:8,
                border:'0.5px solid lightgray'
               }} >
                <p style={{
                fontSize:14,
                fontWeight:'400',
                color:'black',
                marginBottom:0
            }}>{day} {months[month]} {year}</p>
              </div>
              <Image
                src={envelope}
                alt="env"
                width={20}
                height={20}
                style={{
                  marginInlineEnd:10
                }}
              />
              <Image
                src={bell}
                width={20}
                alt="bell"
                height={20}
                style={{
                  marginInlineEnd:10
                }}
              />
              <Link href="/login">
              <Image
                src={exit}
                alt="exit"
                width={20}
                height={20}
                style={{
                  marginInlineEnd:10
                }}
              />  
              </Link>  
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header