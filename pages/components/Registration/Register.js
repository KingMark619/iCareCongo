import React from 'react'

const Register = () => {
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
            {/* content below */}
            <div style={{
                width: '50%',
                height: '100%',
                borderRadius:8,
                backgroundColor: 'white'
            }}>
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
        </div>
    </>
  )
}

export default Register