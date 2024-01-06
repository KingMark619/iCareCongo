import { clock3d,patientNew,patientFolder } from '@/assets/icons'
import { useStateContext } from '@/pages/context/StateContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const StatCard = () => {

  const [newPatients, setNewPatients] = useState()
  const [appointment, setAppointment] = useState()

  const { patients } = useStateContext()

  const setData = async (data) => {
    
  }
  useEffect(()=>{ 
    // setData()
  },[])
  return (
    <div className="px-2" style={{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div className="card p-2" style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'start',
        width:'32%'
      }}>
        <Link href="/patientList" style={{
          color:'black'
        }}>
        <div style={{
          display:'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'start'
        }}>
          <h5>{patients?.length}</h5>
          <p>New Patients</p>
        </div>
        </Link>
        <div style={{
          padding:8,
          border:'0.5px solid lightgray',
          borderRadius:12
        }}>
          <Image
            src={patientNew}
            alt='logo'
            width={50}
            height={50}
          />
        </div>
      </div>
      {/* 2nd Card */}
      <div className="card p-2" style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'start',
        width:'32%'
      }}>
        <Link href="/patientList" style={{
          color:'black'
        }}>
        <div style={{
          display:'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'start'
        }}>
          <h5>{patients?.length}</h5>
          <p>Total Patients</p>
        </div>
        </Link>
        <div style={{
          padding:8,
          border:'0.5px solid lightgray',
          borderRadius:12
        }}>
          <Image
            src={patientFolder}
            alt='logo'
            width={50}
            height={50}
          />
        </div>
      </div>
      {/* 3rd card */}
      <div className="card p-2" style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'start',
        width:'32%'
      }}>
        <Link href="/patientList" style={{
          color:'black'
        }}>
        <div style={{
          display:'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'start'
        }}>
          <h5>34</h5>
          <p>Appointments</p>
        </div>
        </Link>
        <div style={{
          padding:8,
          border:'0.5px solid lightgray',
          borderRadius:12
        }}>
          <Image
            src={clock3d}
            alt='logo'
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  )
}

export default StatCard