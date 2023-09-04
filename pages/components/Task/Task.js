import React from 'react'

const Task = () => {
  return (
    <div style={{
        backgroundColor: 'white',
        padding:10,
        width:"50%"
    }}>
        <div style={{
            display:'flex',
            justifyContent:"space-between",
            alignItems: 'center',
        }}>
            {/* Top */}
            <p style={{
                fontSize:18,
                fontWeight: '500'
            }}>Tasks</p>
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
                    }}>New Task</p>
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
        {/* item */}
            <div style={{
                width:'100%',
                backgroundColor:'#FBFBFB',
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                padding:10,
                marginBottom:15,
                borderRadius:8,
            }}>
                <input type="checkbox" style={{ width:25, height:25}}></input>
                <div>
                   <p style={{
                    fontSize:15,
                    fontWeight: '500'
                }}>Some weird title here</p>
                   <p style={{
                    fontSize:12,
                    fontWeight: '400'
                }}>sign up in the emergency room for medication</p>
                </div>
                <p style={{
                    fontSize:10,
                    fontWeight: '400',
                    color: '#828282',
                }} >6 Feb 2023</p>
                <Popup trigger={<div style={{
                            display:'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection:'row',
                            width:35,
                            height:35,
                            marginLeft:10,
                            borderRadius:8,
                            borderWidth:0.5,
                            borderColor:'lightgray',
                            borderStyle:'solid',
                            boxSizing:'border-box',
                            alignSelf:'flex-start'
                        }} >
                    <Image
                            src={dots}
                            width={15}
                            height={15}
                            alt="logo"
                        />
                </div>} 
     position="right center">
                    <div style={{
                       display:'flex',
                       flexDirection:'column',
                       justifyContent: 'center',
                       alignItems: 'center'
                    }}>
                        <p  style={{
                    fontSize:15,
                    fontWeight: '400',
                }}>Archive</p>
                        <p  style={{
                    fontSize:15,
                    fontWeight: '400'
                }}>Delete</p>
                    </div>
                </Popup>
            </div>
            {/* Bottom row */}
            <div>
            
            <a>
                <div style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent:"flex-end",
                    alignItems: 'flex-start'
                }}>
                    <p style={{
                        color: 'blue',
                        fontWeight:'500',
                        fontSize:12
                    }}>View all</p>
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
                        alt="3dot"
                    />
                    </div>
                </div>
            </a>
        </div>
        
    </div>
  )
}

export default Task