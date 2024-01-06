import React from 'react'

const Title = ({text, subtext,color,padding}) => {
    const colors =[
        {
            name:'blue',
            code:'#2f80ed'
        },
        {
            name:'black',
            code:'#000000'
        },
    ]
  return (
    <div style={{
        marginBottom:10,
        paddingInline:padding?padding:0,
    }}>
        <p style={{
        fontSize:18,
        fontWeight:'300',
        marginBottom:0,
        color:color==='blue'?colors[0].code:colors[1].code
        }}>{text}</p>
        <p style={{
            marginBottom:0,
            marginLeft:10,
            fontSize:14,
            fontWeight:'300'
        }}>
            {subtext}
        </p>
    </div>
    
  )
}

export default Title