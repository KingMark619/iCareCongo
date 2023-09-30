
import React from 'react'
import Image from 'next/image'
import { arrowRight, edit, plus, profile, trash } from '@/assets/icons'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'

const UpcomingSchedule = () => {

const Row = ({status,item}) => {
    const style ={
        border: '0.5px solid lightgray',
        color:'green'
    }
    return(
        <div style={{
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            minWidth:'60%',
            marginBottom:10,
            padding:5,
            border:`${style.border}`,
            borderRadius:8
        }}>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <div style={{
                    width:10,
                    height:10,
                    backgroundColor:`${style.color}`,
                    borderRadius:5
                }}/>
                <p style={{
                    color: 'gray',
                    fontWeight:'500',
                    fontSize:12,
                    marginBottom:0,
                    marginLeft:10
                }}>8:00</p>
            </div>
            
            <p style={{
                    color: 'gray',
                    fontWeight:'500',
                    fontSize:12,
                    marginBottom:0
                }}>Rice Kotlin</p>
        </div>
    )
}

const ActiveRow = ({status, item}) => {  
        
    return(
        <>
        
        {/* Appointment Card */}
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'flex-start',
            padding:5,
            paddingLeft:10,
            borderRadius:8,
            marginBottom:10,
            border:'0.5px solid lightgray',
            minWidth:'60%',
        }}>
            {/* top */}
            <div style={{
                display: 'flex',
                flexDirection:'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height:30,
                width:'100%'
            }}>
                <p style={{
                    color: 'black',
                    fontWeight:'600',
                    fontSize:12,
                    marginBottom:0,
                }}>Patient</p>
                <p style={{
                    color: 'black',
                    fontWeight:'400',
                    fontSize:12,
                    marginBottom:0
                }}>Kyungu Kasongo</p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height:30,
                width:'100%'
            }}>
                <p style={{
                    color: 'black',
                    fontWeight:'600',
                    fontSize:12,
                    marginBottom:0,
                }}>Time</p>
                <p style={{
                    color: 'black',
                    fontWeight:'400',
                    fontSize:12,
                    marginBottom:0
                }}>8:30 - 9:00</p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height:30,
                width:'100%'
            }}>
                <p style={{
                    color: 'black',
                    fontWeight:'600',
                    fontSize:12,
                    marginBottom:0,
                }}>Purpose</p>
                <p style={{
                    color: 'black',
                    fontWeight:'400',
                    fontSize:12,
                    marginBottom:0
                }}>General check-up</p>
            </div>
            {/* bottom */}
            <div style={{
                borderTop:"0.5px solid lightgray",
                width:'100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding:5
            }}>
                  {/* icon group */}
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    width:'30%'
                }}>
                    <div style={{
                        display:'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border:'0.5px solid lightgray',
                        borderRadius:8,
                        width:'30px',
                        height:'30px'
                    }}>
                        <Image
                            src={trash}
                            width={15}
                            height={15}
                            alt="trash"
                        />
                    </div>
                    <div style={{
                        display:'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border:'0.5px solid lightgray',
                        borderRadius:8,
                        width:'30px',
                        height:'30px'
                    }}>
                        <Image
                            src={profile}
                            width={18}
                            height={18}
                            alt="profile"
                        />
                    </div>
                    <div style={{
                        display:'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border:'0.5px solid lightgray',
                        borderRadius:8,
                        width:'30px',
                        height:'30px'
                    }}>
                        <Image
                            src={edit}
                            width={15}
                            height={15}
                            alt="edit"
                        />
                    </div>
                </div>
                <div>
                    <Link href='/consultation' className='btn btn-primary'>Begin Appointment</Link>
                </div>
                
            </div>
        </div>
        </>
    )
}
  return (
    <div className='card p-4 mx-2 my-4' style={{width:'50%'}}>
        <div style={{
            display:'flex',
            justifyContent:"space-between",
            alignItems: 'center',
        }}>
            {/* Top */}
            <p style={{
                fontSize:18,
                fontWeight: '500'
            }}>Upcoming schedule</p>
            <a>
                <div style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent:"space-between",
                    alignItems: 'flex-start'
                }}>
                    <p style={{
                        color: 'blue',
                        fontWeight:'500',
                        fontSize:15
                    }}>New appointment</p>
                    <div style={{
                        display:'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection:'row',
                        width:25,
                        height:25,
                        marginLeft:10,
                        borderRadius:8,
                        borderWidth:0.5,
                        borderColor:'lightgray',
                        borderStyle:'solid',
                        boxSizing:'border-box'
                    }}>
                    <Image
                        src={plus}
                        width={10}
                        height={10}
                        alt="3dot"
                    />
                    </div>
                </div>
            </a>
        </div>
        {/* schedule bellow */}
        <div>
            <Row/>
            <ActiveRow/>
            <Row/>
            <Row/>
        </div>
        {/* bottom row */}
        <div>
            
            <a>
                <div style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent:"flex-end",
                    alignItems: 'flex-start'
                }}>
                    <Link href='./calendar'>
                    <p style={{
                        color: 'blue',
                        fontWeight:'500',
                        fontSize:12
                    }}>View all</p>
                    </Link>
                    <div style={{
                        display:'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection:'row',
                        width:18,
                        height:18,
                        marginLeft:5,
                        borderRadius:8,
                        borderWidth:0.5,
                        borderColor:'lightgray',
                        borderStyle:'solid',
                        boxSizing:'border-box'
                    }}>
                    <Image
                        src={arrowRight}
                        width={10}
                        height={10}
                        alt="arrow"
                    />
                    </div>
                </div>
            </a>
        </div>
        </div>
  )
}



export default UpcomingSchedule