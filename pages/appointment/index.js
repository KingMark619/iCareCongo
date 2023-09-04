import React from 'react'
import Image from 'next/image'
import { clock, cross, pin, profile } from '@/assets/icons'

const Appointment = () => {
  return (
    <>
    <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        // opacity: 0.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>

{/* content */}
    <div style={{
        width: '50%',
        height: '100%',
        borderRadius:8,
        paddingBottom:20,
        backgroundColor: 'white'
    }}>
    {/* header */}
    <div style={{
        backgroundColor: '#0000AC',
        height:80,
        width:'100%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10,
        
    }}>
        <p style={{
            color:'white',
            fontSize:15,
            fontWeight:'500',
            marginBottom:0
        }}>New Appointment</p>
        <Image
            src={cross}
            width={25}
            height={25}
            alt="cross"
        />
    </div>
    {/* Icon block */}
    <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems: 'self-start',
        paddingTop:20,
        marginBottom:20
    }}>
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height:'fit-content'
        }}>
            <Image 
                src={profile}
                width={20}
                height={20}
                alt="profile"
                style={{
                    marginBottom:5
                }}
            />
            <p style={{
                textTransform:'uppercase',
                color:'#2F80ED',
                fontSize:14,
                fontWeight:'400',
                marginBottom:5
            }}>Practitioner</p>
            <p style={{
                fontSize:12,
                fontWeight:'400',
                marginBottom:5
            }}>Dr Myriam</p>
            <p style={{
                fontSize:12,
                fontWeight:'600',
                marginBottom:5
            }}>Internal Medicine</p>
        </div>

        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height:'fit-content'
        }}>
            <Image 
                src={clock}
                width={20}
                height={20}
                alt="profile"
                style={{
                    marginBottom:5
                }}
            />
            <p style={{
                textTransform:'uppercase',
                color:'#2F80ED',
                fontSize:14,
                fontWeight:'400',
                marginBottom:5
            }}>Date and time</p>
            <p style={{
                fontSize:12,
                fontWeight:'400',
                marginBottom:5
            }}>Tue, 26 October</p>
            <p style={{
                fontSize:12,
                fontWeight:'600',
                marginBottom:5
            }}>9:00</p>
            <p style={{
                fontSize:12,
                fontWeight:'600',
                color:'#2F80ED',
                marginBottom:0
            }}>Change</p>
        </div>

        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height:'fit-content'
        }}>
            <Image 
                src={pin}
                width={20}
                height={20}
                alt="profile"
                style={{
                    marginBottom:5
                }}
            />
            <p style={{
                textTransform:'uppercase',
                color:'#2F80ED',
                fontSize:14,
                fontWeight:'400',
                marginBottom:5
            }}>Location</p>
            <p style={{
                fontSize:12,
                fontWeight:'400',
                marginBottom:5
            }}>General Clinic</p>
            <p style={{
                fontSize:12,
                fontWeight:'600',
                marginBottom:5
            }}>Room 201</p>
            <p style={{
                fontSize:12,
                fontWeight:'600',
                color:'#2F80ED',
                marginBottom:0
            }}>Change</p>
        </div>
    </div>
    {/* form */}
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10
    }}>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom:20
        }}>
            <p style={{
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
            }}>Patient</p>
            <input style={{
                height:40,
                width:'70%',
                borderRadius:8,
                padding:10,
                fontSize:12,
                fontWeight:'400',
                border:'0.5px solid gray'
            }}></input>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom:20
        }}>
            <p style={{
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
            }}>Purpose of visit</p>
            <textarea style={{
                height:80,
                width:'70%',
                borderRadius:8,
                padding:10,
                fontSize:12,
                fontWeight:'400',
                border:'0.5px solid gray'
            }} name="purpose"
            cols="40"
            rows="5"></textarea>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom:20
        }}>
            <p style={{
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
            }}>Appointment Status</p>
            <input style={{
                height:40,
                width:'70%',
                borderRadius:8,
                padding:10,
                fontSize:12,
                fontWeight:'400',
                border:'0.5px solid gray'
            }}></input>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom:20
        }}>
            <p style={{
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
            }}>Duration</p>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width:'70%'
            }}>
                <button style={{
                    width:40,
                    height:40,
                    color:'black',
                    fontSize:12,
                    fontWeight:'400',
                    backgroundColor:'#e0e0e0',
                    border:'none',
                    borderRadius:4,
                    marginInlineEnd:15
                }} onClick={()=>{}}>10'</button>
                <button style={{
                    width:40,
                    height:40,
                    color:'black',
                    fontSize:12,
                    fontWeight:'400',
                    backgroundColor:'#e0e0e0',
                    border:'none',
                    borderRadius:4,
                    marginInlineEnd:15
                }} onClick={()=>{}}>30'</button>
                <button style={{
                    width:40,
                    height:40,
                    color:'black',
                    fontSize:12,
                    fontWeight:'400',
                    backgroundColor:'#e0e0e0',
                    border:'none',
                    borderRadius:4,
                    marginInlineEnd:15
                }} onClick={()=>{}}>45'</button>
                <button style={{
                    width:40,
                    height:40,
                    color:'white',
                    fontSize:12,
                    fontWeight:'400',
                    backgroundColor:'#0000AC',
                    border:'none',
                    borderRadius:4,
                    marginInlineEnd:15
                }} onClick={()=>{}}>60'</button>
                <button style={{
                    width:40,
                    height:40,
                    color:'black',
                    fontSize:12,
                    fontWeight:'400',
                    backgroundColor:'#e0e0e0',
                    border:'none',
                    borderRadius:4,
                    marginInlineEnd:15
                }} onClick={()=>{}}>90'</button>
                <button style={{
                    width:40,
                    height:40,
                    color:'black',
                    fontSize:12,
                    fontWeight:'400',
                    backgroundColor:'#e0e0e0',
                    border:'none',
                    borderRadius:4,
                    marginInlineEnd:15
                }} onClick={()=>{}}>120'</button>
            </div>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom:20
        }}>
            <p style={{
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
            }}>Appointment type</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width:'70%'
            }}>
            <button style={{
                    width:'auto',
                    height:40,
                    color:'white',
                    fontSize:12,
                    padding:10,
                    fontWeight:'400',
                    backgroundColor:'#0000AC',
                    border:'none',
                    borderRadius:4,
                    marginInlineEnd:15,
                }} onClick={()=>{}}>First time</button>
                <button style={{
                    width:'auto',
                    height:40,
                    padding:10,
                    color:'black',
                    fontSize:12,
                    fontWeight:'400',
                    backgroundColor:'#e0e0e0',
                    border:'none',
                    borderRadius:4,
                }} onClick={()=>{}}>Follow up visit</button>
            </div>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom:20
        }}>
            <p style={{
                fontSize:14,
                fontWeight:'400',
                marginBottom:0
            }}>Online consultation</p>
            <div style={{
                width:'70%',
            }}>
                <input style={{
                    width:30,
                    height:30,
                    border:'none',
                    borderRadius:4,
                }} type="checkbox" id="online"/>
            </div> 
        </div>
    </div>
    {/* button row */}
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'center'
    }}>
        <button style={{
            width:'auto',
            height:40,
            color:'black',
            fontSize:12,
            padding:10,
            fontWeight:'400',
            border:'none',
            marginInlineEnd:15,
            backgroundColor:'#FFFFFF',
        }} onClick={()=>{}}>Cancel</button>
        <button style={{
            width:'auto',
            height:40,
            color:'white',
            fontSize:12,
            padding:10,
            fontWeight:'400',
            backgroundColor:'#0000AC',
            border:'none',
            borderRadius:4,
            marginInlineEnd:15,
        }} onClick={()=>{}}>Begin Appointment</button>
        <button style={{
            width:'auto',
            height:40,
            color:'#0000AC',
            fontSize:12,
            padding:10,
            fontWeight:'400',
            backgroundColor:'white',
            border:'0.5px solid #0000AC',
            borderRadius:4,
            marginInlineEnd:15,
        }} onClick={()=>{}}>Save</button>
    </div>
    </div>
    </div>
    </>
    
  )
}


export default Appointment