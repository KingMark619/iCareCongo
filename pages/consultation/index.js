'use client'
import React,{useEffect, useState} from 'react'
import Divider from '../components/Divider/Divider'
import {useForm} from 'react-hook-form'
import Image from 'next/image'
import logo from '../../assets/logo/blue.png'
import Link from 'next/link'
import { drugsAndMedicine, exams,labs } from '@/DummyData'

const index = () => {
    

    const {register, handleSubmit} = useForm()
    const [labSearchTerm, setLabSearchTerm] = useState('');
    const [labSearchResults, setLabSearchResults] = useState([]);

    const [pharmaSearchTerm, setPharmaSearchTerm] = useState('');
    const [pharmaSearchResults, setPharmaSearchResults] = useState([])

    const [isOpenLab, setIsOpenLab] = useState(false);
    const [isOpenPharma, setIsOpenPharma] = useState(false)

    const [labResults, setLabResults] = useState([]);
    const [medResults, setMedResults] = useState([]);

    useEffect(() =>{
    },[])
    // Function to handle input change
  const handleLabSearchInputChange = (value) => {

    const term = value;
    setLabSearchTerm(term);

    // Perform the search and update the results
    const results = exams.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setLabSearchResults(results);

    if(labSearchTerm !== null){
        setIsOpenLab(true);
    } else {
        setIsOpenLab(!isOpenLab)
    }
    
  }
  const handlePharmaSearchInputChange = (value) => {
    
    const term = value;
    setPharmaSearchTerm(term);

    // Perform the search and update the results
    const results = drugsAndMedicine.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setPharmaSearchResults(results);

    if(pharmaSearchTerm !== null){
        setIsOpenPharma(true);
    } else {
        setIsOpenPharma(!isOpenPharma)
    }
    
  }
  const addMedItem = (result) => {
    if (!medResults.includes(result)){
        setMedResults([...medResults,result]);
    } else {
        alert(`${result} already added`)
        // dont add the exam 
    }
  }

  const addLabItem = (result) => {
    if(!labResults.includes(result)){
        setLabResults([...labResults,result]);
    }else {
        alert(`${result} already added`)
        // dont add the drug 
    }
  }

  const deleteMedItem = (result) => {
    const updatedMeds = [...medResults]
    const indexToRemove = medResults.indexOf(result)

    if( indexToRemove !== -1 ){
        updatedMeds.splice(indexToRemove, 1)
        setMedResults(updatedMeds)
    }
  }

  const deleteLabItem = (result) => {
    const updatedLabs = [...labResults]
    const indexToRemove = labResults.indexOf(result)

    if( indexToRemove !== -1 ){
        updatedLabs.splice(indexToRemove, 1)
        setLabResults(updatedLabs)
    }
  }
  const handleDelete = (item,type) => {
    
    if (type === 'lab'){
        deleteLabItem(item)
    } else if (type === 'med'){
        deleteMedItem(item)
    }
  }

  const ResultMedCard = (item) => {
    return(
        <div className="card p-2 m-2" style={{ 
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width:'18%',
            maxHeight:60,
            overflow:'hidden'
        }}>
            <p style={{
                fontSize:15,
                fontWeight:'300',
                marginBottom:0,
                color:'black',
                display: '-webkit-box',
                WebkitLineClamp: 2,  // Limit to 2 lines
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
            }} >{item?.item}</p>
            <button 
                onClick={() =>deleteMedItem(item?.item)}
                className="btn btn-outline-danger" 
                type='button'
                style={{
                    width:30,
                    height:30,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center'
            }}>x</button>
        </div>
    )
  }
  const ResultLabCard = (item) => {
    
    return(
        <div className="card p-2 m-2" style={{ 
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width:'18%',
            maxHeight:60,
            overflow:'hidden'
        }}>
            <p style={{
                fontSize:15,
                fontWeight:'300',
                marginBottom:0,
                color:'black',
                display: '-webkit-box',
                WebkitLineClamp: 2,  // Limit to 2 lines
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
            }} >{item?.item}</p>
            <button 
                onClick={() =>deleteLabItem(item?.item)}
                className="btn btn-outline-danger" 
                type='button'
                style={{
                    width:30,
                    height:30,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center'
            }}>x</button>
        </div>
    )
  }

  return (
    <>
    <div className="card m-2 p-2" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        {/* content below */}
        
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }}>
                {/* form */}
            <form style={{padding:10}}>
                {/* first row */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between', 
                }}>
                    {/* left side */}
                <div>
                    <Link className="navbar-brand" href="/">
                    <div style={{
                        flex:1,
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center'
                        }}>
                    <Image src={logo} alt="Logo" width="50" height="50" style={{borderRadius:100, border:'0.5px solid #2c70f4', padding:2}}/>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'start',
                        paddingLeft:10
                    }}>
                        <p style={{
                        marginBottom:0,
                        color:'#2f80ed',
                        fontSize:15,
                        fontWeight:'400'
                        }}>iCare Congo</p>
                        <p style={{
                        marginBottom:0,
                        color:'red',
                        fontSize:12,
                        fontWeight:'400'
                        }}>Health the modern way</p>
                    </div>
                </div>
                </Link>
                </div>
                    {/* right side */}
                <div>
                    <div style={{
                            marginBottom: 10
                        }}>
                            <p style={{
                                fontSize:18,
                                fontWeight:'400',
                                marginBottom:0,
                                color:'black'
                            }}>Patient Information</p>
                    </div>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        alignItems:'self-end'
                    }}>
                        <p style={{
                            marginBottom:0,
                            fontSize:12,
                            fontWeight:'400'
                        }}>Name: Kasongo Somethign</p>
                        <p style={{
                            marginBottom:0,
                            fontSize:12,
                            fontWeight:'400'
                        }}>Age: 28</p>
                        <p style={{
                            marginBottom:0,
                            fontSize:12,
                            fontWeight:'400'
                        }}>Sex: Female</p>
                    </div>
                </div>
                </div>
                <Divider/>
                {/* Note from triage */}
                <div style={{
                        paddingLeft: 20,
                        marginBottom: 10
                    }}>
                    <p style={{
                        fontSize:18,
                        fontWeight:'300',
                        marginBottom:0,
                        color:'black'
                    }}>Note & Observation</p>
                </div>
                <div style={{
                        paddingLeft: 50,
                        marginBottom: 10,
                    }}>
                    <textarea defaultValue={'some text from nurse'}  readOnly={true} style={{
                        border:'0.5px solid lightgray',
                        padding:5,
                        width:'80%',
                        height:'200px'
                    }}></textarea>
                </div>
                <Divider/>
                <div style={{
                        paddingLeft: 20,
                        marginBottom: 10
                    }}>
                    <p style={{
                        fontSize:18,
                        fontWeight:'300',
                        marginBottom:0,
                        color:'black'
                    }}>Lab & Imaging</p>
                </div>
                <div style={{
                        paddingLeft: 20,
                        marginBottom: 10
                    }}>
                        <div className="d-flex" style={{paddingLeft:30,marginBottom:10}}>
                            <input 
                                className="form-control me-2"
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search"
                                style={{
                                    width:'50%'
                                }}
                                value={labSearchTerm}
                                onChange={e => handleLabSearchInputChange(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type='button'>+</button>
                        </div>
                        
                    {isOpenLab === true? (
                        <ul>
                        <div className="card p-2" style={{
                            display: 'flex',
                            flexDirection:'row',
                            flexWrap:'wrap',
                            width:'90%',
                            height:'auto',
                            overflow:'scroll'
                        }}>
                            <button 
                                onClick={()=>(setIsOpenLab(false))}
                                className="btn btn-outline-danger" 
                                type='button'
                                style={{
                                    width:25,
                                    height:25,
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position:'absolute',
                                    top:5,
                                    right:5,
                                    fontSize:10
                            }}>x</button>
                        {labSearchResults.map((result, index) => (
                            <div 
                                key={index} 
                                className='m-2'
                                style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-between',
                                alignItems:'center',
                                width:'30%',
                                padding:'10px 0',
                                borderBottom:'0.5px solid lightgray',
                            }}>
                            <p style={{
                                fontSize:15,
                                fontWeight:'300',
                                marginBottom:0,
                                color:'black'
                            }} key={index}>{result}</p>
                            <div className="btn btn-outline-success" onClick={()=>addMedItem(result)}>+</div>
                            </div>
                        ))}
                        </div>
                        </ul>
                    ):''}
                </div>
                {/* results */}
                <div style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexWrap:'wrap'
                }}>
                    {medResults!== undefined ?medResults.map((result,index)=>{
                   return( <ResultMedCard item={result} key={index}/>)
                }):''}
                    
                </div>
                
                <Divider/>
                <div style={{
                        paddingLeft: 20,
                        marginBottom: 10
                    }}>
                    <p style={{
                        fontSize:18,
                        fontWeight:'300',
                        marginBottom:0,
                        color:'black'
                    }}>Pharmacy</p>
                </div>
                <div style={{
                        paddingLeft: 20,
                        marginBottom: 10
                    }}>
                        <div className="d-flex" style={{paddingLeft:30,marginBottom:10}}>
                            <input 
                                className="form-control me-2"
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search"
                                style={{
                                    width:'50%'
                                }}
                                value={pharmaSearchTerm}
                                onChange={e =>handlePharmaSearchInputChange(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type='button'>+</button>
                        </div>
                        
                    {isOpenPharma && (
                        <ul>
                        <div className="card p-2" style={{
                            display: 'flex',
                            flexDirection:'row',
                            flexWrap:'wrap',
                            width:'90%',
                            height:'auto',
                            overflow:'scroll'
                        }} >
                            <button 
                                onClick={()=>(setIsOpenPharma(false))}
                                className="btn btn-outline-danger" 
                                type='button'
                                style={{
                                    width:25,
                                    height:25,
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position:'absolute',
                                    top:5,
                                    right:5,
                                    fontSize:10
                            }}>x</button>
                        {pharmaSearchResults.map((result, index) => (
                            <div 
                                key={index} 
                                className='m-2'
                                style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-between',
                                alignItems:'center',
                                width:'30%',
                                padding:'10px 0',
                                borderBottom:'0.5px solid lightgray',
                                }}>
                                <p style={{
                                    fontSize:15,
                                    fontWeight:'300',
                                    marginBottom:0,
                                    color:'black'
                                }} key={index}>{result}</p>
                                <div className="btn btn-outline-success" onClick={()=>addLabItem(result)}>+</div>
                            </div>
                        ))}
                        </div>
                        </ul>
                    )}
                </div>
                {/* results */}
                <div style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexWrap:'wrap'
                }}>
                    {labResults!== undefined ?labResults.map((result,index)=>{
                   return( <ResultLabCard item={result} key={index}/>)
                }):''}
                    
                </div>
                
                <Divider/>
                <div style={{
                        paddingLeft: 20,
                        marginBottom: 10
                    }}>
                    <p style={{
                        fontSize:18,
                        fontWeight:'300',
                        marginBottom:0,
                        color:'black'
                    }}>Doctor Note</p>
                </div>
                <div style={{
                        paddingLeft: 50,
                        marginBottom: 10,
                    }}>
                    <textarea defaultValue={'some observation by the doctor goes here'} style={{
                        border:'0.5px solid lightgray',
                        padding:5,
                        width:'80%',
                        height:'200px'
                    }}></textarea>
                </div>
                
                {/* button row */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems:'center',
                            marginTop:50
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

                            <input type="submit" style={{
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
                            }} />
                        </div>
                    </form>
        </div>
    </div>
</>
  )
}

export default index