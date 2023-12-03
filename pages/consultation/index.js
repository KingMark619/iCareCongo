'use client'
import React,{useEffect, useState} from 'react'
import Divider from '../components/Divider/Divider'
import {useForm} from 'react-hook-form'
import Image from 'next/image'
import logo from '../../assets/logo/blue.png'
import Link from 'next/link'
import { drugsAndMedicine, exams } from '@/DummyData'
import { useRouter } from 'next/router'
import { app, initFirestore } from '@/firebase/clientApp'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import Bill from '../bill'
import { colapse, deploy } from '@/assets/icons'
import { CSSTransition } from 'react-transition-group'


const index = () => {
    const { activeUser } = useAuth()

    const router = useRouter()
    const [patient,setPatient] = useState()

    const db = initFirestore()
    const auth = getAuth(app)

    const [disabled,setDisabled] = useState(true)

    const {register, handleSubmit} = useForm()
    const [doctorId,setDoctorId] = useState()

    const [labSearchTerm, setLabSearchTerm] = useState('');
    const [labSearchResults, setLabSearchResults] = useState([]);

    const [pharmaSearchTerm, setPharmaSearchTerm] = useState('');
    const [pharmaSearchResults, setPharmaSearchResults] = useState([])

    const [isOpenLab, setIsOpenLab] = useState(false);
    const [isOpenPharma, setIsOpenPharma] = useState(false)

    const [labResults, setLabResults] = useState([]);
    const [medResults, setMedResults] = useState([]);
    
    const [currentHistory,setCurrentHistory] = useState(patient?.anamnesisMorbi)
    const [lifeHistory, setLifeHistory] = useState(patient?.anamnesisVitae);

    const [isColapse1, setIsColapse1] = useState(false)
    const [isColapse2, setIsColapse2] = useState(false)
    const [isColapse3, setIsColapse3] = useState(false)
    const [isColapse4, setIsColapse4] = useState(false)
    const [isColapse5, setIsColapse5] = useState(false)

    useEffect(()=>{
        console.log(router.query)
        setPatient(router.query)
        setDoctorId(activeUser?.id)
        setMedResults(router.query.medResults)
        setLabResults(router.query.labResults)
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
            <input
                // onChange={()=>()}
                style={{
                    padding:10,
                    border:'0.5px solid #f7f7f7',
                    fontSize:14,
                    fontWeight:'400',
                    marginBlockStart:10,
                    width:'20%'
                }}
            />
            <button 
                disabled={disabled}
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
                disabled={disabled}
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

  const submit = async (data) => {
    console.log(data)
    const patientRef = doc(db, 'patients', patient?.id);
    try {
        await setDoc(patientRef, { 
            ...data,labResults,medResults,doctorId
        }, { merge: true });
      alert('submitted successfully')
    //   router.push('/')
    } catch (err) {
        console.log(err)
    }
  }

  const Bill = () => {
    const patient = router.query
    return(
        <div className="card p-3" style={{width:'50%'}}>
            <div className="row" 
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                {/* logo */}
                <div style={{
                        // flex:1,
                        width:'50%',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'start',
                        alignItems:'center'
                        }}>
                    <Image 
                    src={logo} 
                    alt="Logo" 
                    width="30" 
                    height="30" 
                    style={{
                        borderRadius:100, 
                        border:'0.5px solid #2c70f4', 
                        padding:2
                    }}/>
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
                 {/* title */}
                 <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    width:'50%'
                    }}>
                   <p style={{fontSize:18,marginBottom:0, fontWeight:500}}>INVOICE</p> 
                 </div>
                 
            </div>
            <Divider/>
            <div className="row">
                <p style={{fontSize:12, marginBottom:0}}>Invoice Number: 3224</p>
                <p style={{fontSize:12, marginBottom:0}}>Date: 02/02/02</p>
            </div>
            <Divider/>
            <div className="row">
                <p style={{fontSize:12, marginBottom:0}}>Patient: {patient?.firstName} {patient?.lastName}</p>
                <p style={{fontSize:12, marginBottom:0}}>Phone: {patient?.phone}</p>
            </div>
            <Divider/>
            <div className="row">
                {patient?.labResults?.map((item,index)=>{
                    return (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignItems:"center"
                        }}>
                            <p style={{fontSize:12, marginBottom:0}}>{item}</p>
                            <p style={{fontSize:12, marginBottom:0}}>3.00 $</p>
                        </div>
                    )
                })}
                
            </div>
            <Divider/>
            <div className="row">
                <div style={{
                    display: 'flex',
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}>
                    <p style={{fontSize:14, marginBottom:0}}>Total</p>
                    <p style={{
                        border:'0.5px solid #2c70f4',
                        borderRadius:8,
                        padding: '5px 10px',
                        backgroundColor:'#2c70f4',
                        color:'#fff',
                        fontSize:14,
                        marginBottom:0
                    }}>55.00 $</p>
                </div>
            </div>
        </div>
    )
  }
  const toggleColapse = (index) =>{
    // console.log("Toggle")
    switch (index) {
        case 1:
            setIsColapse1(!isColapse1)
            break;
        case 2:
            setIsColapse2(!isColapse2)
            break;
        case 3:
            setIsColapse3(!isColapse3)
            break;
        case 4:
            setIsColapse4(!isColapse4)
            break;
        case 5:
            setIsColapse5(!isColapse5)
            break;
        default:
            break
    }
    
  }
  const ResultRow = (result) => {
    // result name, status and content
    // coordonate with the lab and the way it is brought back into the system
    // Sample data (replace this with your dynamic data)
    const data = [
        { requested: 'Item 1', results: 'Result A', description: 'Description A' },
        { requested: 'Item 2', results: 'Result B', description: 'Description B' },
        { requested: 'Item 3', results: 'Result C', description: 'Description C' },
        // Add more rows as needed
    ];
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft:50,
            width: '50%'
        }}>
            <p style={{
                fontSize:13,
                fontWeight: '600'
            }}>X-Ray</p>
            <p style={{
                fontSize:13,
                fontWeight: '600'
            }}>Normal</p>
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
            {/* <Bill patient={patient}/> */}
                {/* form */}
            <form style={{padding:10}} onSubmit={handleSubmit(submit)}>
                {/* first row */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center', 
                    alignContent:'center'
                }}>
                    {/* Brand logo */}
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
             
                </div>
                {/* Header text */}
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:20
                }}>
                    {/* <p style={{
                        fontSize:22,
                        fontWeight:'300',
                        marginBottom:0,
                        color:'black',
                    }}>Jaynet Clinic</p> */}
                    <p style={{
                        marginTop:10,
                        fontSize:18,
                        fontWeight:'300',
                        marginBottom:0,
                        color:'black',
                        textDecoration:'underline'
                    }}>Patient File</p>
                </div>
                <Divider/>
                {/* Patient information */}
                <div style={{
                    border:'0.5px solid lightgray',
                    // borderRadius:8,
                    padding:'10px 0',
                    marginBlockEnd:20
                }}>
                    <div style={{
                            paddingLeft: 20,
                            // marginBottom: 10,
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems: 'center',
                            paddingRight:20
                        }}>
                        <p style={{
                            fontSize:18,
                            fontWeight:'300',
                            marginBottom:0,
                            color:'#2f80ed'
                        }}>Patient Information </p>
                        <Image
                            src={!isColapse1?colapse:deploy}
                            width={20}
                            height={20}
                            alt='Colapse'
                            onClick={()=>toggleColapse(1)}
                        />
                    </div>
                    <CSSTransition
                        in={!isColapse1}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div className='collapsibleContent' style={{
                            paddingLeft: 50,
                            marginTop: 10,
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            width:'100%'
                        }}>
                            {/* left side */}
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            alignItems:'start',
                            width:'50%'
                        }}>
                            <p style={{
                                marginBottom:0,
                                fontSize:13,
                                fontWeight:'400'
                            }}>Name: KAYUMBA MWALA {patient?.firstName} {patient?.lastName}</p>
                            <p style={{
                                marginBottom:0,
                                fontSize:13,
                                fontWeight:'400'
                            }}>Age: 28{patient?.age}</p>
                            <p style={{
                                marginBottom:0,
                                fontSize:13,
                                fontWeight:'400'
                            }}>Gender: Male{patient?.sex}</p>
                        </div>
                        {/* right side */}
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            alignItems:'start',
                            width:'50%'
                        }}>
                            <p style={{
                                marginBottom:0,
                                fontSize:13,
                                fontWeight:'400'
                            }}>Phone: 123 456 7890 {patient?.firstName} {patient?.lastName}</p>
                            <p style={{
                                marginBottom:0,
                                fontSize:13,
                                fontWeight:'400'
                            }}>Address: Kundelungu{patient?.age}</p>
                            {/* <p style={{
                                marginBottom:0,
                                fontSize:13,
                                fontWeight:'400'
                            }}>Gender: Male{patient?.sex}</p> */}
                        </div>
                    </div>
                    </CSSTransition>
                    
                    
                </div>              
                {/* Vitals and symptoms */}
                <div style={{
                    border:'0.5px solid lightgray',
                    // borderRadius:8,
                    padding:'10px 0',
                    marginBlockEnd:20
                }}>
                    <div style={{
                             paddingLeft: 20,
                             // marginBottom: 10,
                             display:'flex',
                             flexDirection:'row',
                             justifyContent:'space-between',
                             alignItems: 'center',
                             paddingRight:20
                        }}>
                        <p style={{
                            fontSize:18,
                            fontWeight:'300',
                            marginBottom:0,
                            color:'#2f80ed'
                        }}>Vitals and symptoms</p>
                        <Image
                            src={!isColapse2?colapse:deploy}
                            width={20}
                            height={20}
                            alt='Colapse'
                            onClick={()=>toggleColapse(2)}
                        />
                    </div>
                    <CSSTransition
                        in={!isColapse2}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div className="collapsibleContent" style={{
                                paddingLeft: 50,
                                marginBottom: 10,
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-between',
                                alignItems:'center',
                                width:'100%'
                            }}>
                                {/* left side */}
                            <div style={{
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'space-between',
                                alignItems:'start',
                                width:'50%'
                            }}>
                                <p style={{
                                    marginBottom:0,
                                    fontSize:13,
                                    fontWeight:'400'
                                }}>Blood Pressure: 120/80 {patient?.firstName} {patient?.lastName}</p>
                                <p style={{
                                    marginBottom:0,
                                    fontSize:13,
                                    fontWeight:'400'
                                }}>Heart Rate: 65{patient?.age}</p>
                                <p style={{
                                    marginBottom:0,
                                    fontSize:13,
                                    fontWeight:'400'
                                }}>Respiratory rate: 34{patient?.sex}</p>
                                <p style={{
                                    marginBottom:0,
                                    fontSize:13,
                                    fontWeight:'400'
                                }}>Temperature: 35 Celcius{patient?.age}</p>
                            </div>
                            {/* right side */}
                            <div style={{
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'space-between',
                                alignItems:'start',
                                width:'50%'
                            }}>
                                <p style={{
                                    marginBottom:0,
                                    fontSize:13,
                                    fontWeight:'400'
                                }}>Symptoms: Headache, Vomiting, dizziness</p>
                                <p style={{
                                    marginBottom:0,
                                    fontSize:13,
                                    fontWeight:'400'
                                }}>Patient Status: In urgent care</p>
                            
                            </div>
                        </div>
                    </CSSTransition>
                </div>
                
                {/* Medical history */}
                <div style={{
                    border:'0.5px solid lightgray',
                    // borderRadius:8,
                    padding:'10px 0',
                    marginBlockEnd:20
                }}>
                    <div style={{
                        paddingLeft: 20,
                        // marginBottom: 10,
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems: 'center',
                        paddingRight:20
                    }}>
                    <p style={{
                        fontSize:18,
                        fontWeight:'300',
                        marginBottom:0,
                        color:'#2f80ed'
                    }}>Medical History</p>
                    <Image
                            src={!isColapse3?colapse:deploy}
                            width={20}
                            height={20}
                            alt='Colapse'
                            onClick={()=>toggleColapse(3)}
                        />
                    </div>
                    <CSSTransition
                        in={!isColapse3}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                    <div style={{
                            paddingLeft: 50,
                            marginBottom: 10,
                        }}>
                            <p style={{
                                fontSize:13,
                                fontWeight:'400',
                                marginBottom:10,
                                color:'black'
                            }}>Anamnesis vitae</p>
                        <textarea
                            // disabled={disabled}
                            readOnly={disabled}
                            defaultValue={patient?.anamnesisVitae} 
                            value={lifeHistory}
                            onChange={(e)=>{setLifeHistory(e.target.value)}}
                            {...register('anamnesisVitae')}
                            style={{
                                border:'0.5px solid lightgray',
                                padding:5,
                                width:'80%',
                                height:'120px'
                        }}></textarea>
                            <p style={{
                                fontSize:13,
                                fontWeight:'400',
                                marginBottom:10,
                                color:'black'
                            }}>Anamnesis morbi</p>
                        <textarea 
                            // disabled={disabled}
                            readOnly={disabled}
                            defaultValue={patient?.anamnesisMorbi} 
                            value={currentHistory} 
                            onChange={(e) => {setCurrentHistory(e.target.value)}}
                            {...register('anamnesisMorbi')} 
                            style={{
                                border:'0.5px solid lightgray',
                                padding:5,
                                width:'80%',
                                height:'120px'
                        }}></textarea>
                    </div>
                    </CSSTransition>
                </div>
                
                {/* Lab and imaging */}
                <div style={{
                    border:'0.5px solid lightgray',
                    // borderRadius:8,
                    padding:'10px 0',
                    marginBlockEnd:20
                }}>
                    <div style={{
                        paddingLeft: 20,
                        // marginBottom: 10,
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems: 'center',
                        paddingRight:20
                    }}>
                    <p style={{
                        fontSize:18,
                        fontWeight:'300',
                        marginBottom:0,
                        color:'#2f80ed'
                    }}>Lab & Imaging</p>
                    <Image
                            src={!isColapse4?colapse:deploy}
                            width={20}
                            height={20}
                            alt='Colapse'
                            onClick={()=>toggleColapse(4)}
                        />
                    </div>
                    <CSSTransition
                        in={!isColapse4}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div>
                        <div style={{
                            paddingLeft: 50,
                            marginBottom: 10,
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            width:'65%'
                        }}>
                            {/* title row */}
                        <div style={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'start',
                            width:'75%'
                        }}>
                            <p style={{
                                marginBottom:0,
                                fontSize:13,
                                fontWeight:'600',
                                textDecoration:'underline'
                            }}>Requested</p>
                            <p style={{
                                marginBottom:0,
                                fontSize:13,
                                fontWeight:'600',
                                textDecoration:'underline'
                            }}>Result</p> 
                        </div>
                        </div>
                        <ResultRow/>
                        </div>
                    </CSSTransition>
                </div>
                <div>
                    <p>hello</p>
                    
                </div>
            
                {/* lab and imaging */}

                <div style={{
                        paddingLeft: 20,
                        // marginBottom: 10,
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems: 'center',
                        paddingRight:20
                    }}>
                    <p style={{
                        fontSize:18,
                        fontWeight:'300',
                        marginBottom:0,
                        color:'black'
                    }}>Lab & Imaging</p>
                    <Image
                            src={!isColapse5?colapse:deploy}
                            width={20}
                            height={20}
                            alt='Colapse'
                            onClick={()=>toggleColapse(5)}
                        />
                </div>
                <CSSTransition
                        in={!isColapse5}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
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
                </CSSTransition>
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
                
                {/* Pharmacy */}
                <div style={{
                        paddingLeft: 20,
                        // marginBottom: 10,
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems: 'center',
                        paddingRight:20
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
                {/* Doctor's notes */}
                <div style={{
                       paddingLeft: 20,
                       // marginBottom: 10,
                       display:'flex',
                       flexDirection:'row',
                       justifyContent:'space-between',
                       alignItems: 'center',
                       paddingRight:20
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
                    <textarea 
                        {...register('doctorNote')}
                        // disabled={disabled}
                        readOnly={disabled}
                        defaultValue={'Note and observation'} 
                        style={{
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
                                border:'0.5px solid lightgray',
                                borderRadius:4,
                            }} onClick={(e)=>{
                                // router.back()
                                setDisabled(!disabled)
                                e.preventDefault()
                            }}>{disabled?'Edit':'Cancel'}</button>

                            <input 
                                disabled={disabled}
                                type="submit" 
                                style={{
                                width:'auto',
                                height:40,
                                color:disabled?'lightgray':'#0000AC',
                                fontSize:12,
                                padding:10,
                                fontWeight:'400',
                                backgroundColor:'white',
                                border:disabled?'0.5px solid lightgray':'0.5px solid #0000AC',
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