import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import logo from '../../../assets/logo/Logo.svg'
import { bell, envelope, exit, profile } from '@/assets/icons'

const Header = () => {
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
            <a style={{flex:1}} className="navbar-brand" href="#">
              <Image src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
              iCare
            </a>
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
            }}>12 Febuary 2022</p>
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
              <Image
                src={exit}
                alt="exit"
                width={20}
                height={20}
                style={{
                  marginInlineEnd:10
                }}
              />
              
            </div>
          </div>
          
          
          
        </div>
      </nav>
    </>
  )
}

export default Header