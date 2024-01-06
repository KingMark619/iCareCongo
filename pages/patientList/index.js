import { cross, filter, help, plus, reload, search } from '@/assets/icons'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import styles from './Patient.module.css'
import { useStateContext } from '@/pages/context/StateContext'
import Link from "next/link"
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { app, initFirestore } from '@/firebase/clientApp'
import { getAuth } from 'firebase/auth'

const Patient = () => {
    const db = initFirestore()
    const auth = getAuth(app)

    const router = useRouter()

    const { patients,loadPatients, setPatients } = useStateContext()
    const [patientList, setPatientList] = useState([]) // set local array for easy use
    const [date, setDate] = useState([])
    const [appointmentPatients, setAppointmentPatients] = useState() // appointment patient number for card
    const [searchOpen, setSearchOpen] = useState(false)

    const [sortingType, setSortingType] = useState(true) // abc or time added based
    const [sortedData, setSortedData] = useState([...patientList]); // displayed array in the table below

    useEffect(() => {
        // load patients from firestore
        getPatientList()
        // setPatientList(patients)
        
        // console.log(patientList)
    },[])

    const getPatientList = async () => {
        let patientArray = []
        const querySnapshot = await getDocs(collection(db, "patients"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            patientArray.push({
                content: doc.data(),
                id: doc.id
            });
        });
        setPatients(patientArray)
        setAppointment() // set the appointment array
        // setPatientList(patientArray)
        // console.log(patients)
    }
    const setAppointment = (appointment) => {
        // calculate number of total appointment 
        //filter all patients that have an appointment 
        const filtered = patients?.filter(item => item.content.appointment !== undefined && item.content.appointment !== null && item.content.appointment !== '');
        setAppointmentPatients(filtered);
        // make list of total appointment patients
    }
    const setSortData = (type) => {
        // type is a variable toggle between true and false
        // label and content changes on click
        if (type){
           const sorted = [...patients].sort((a, b) =>
            a.content.firstName.localeCompare(b.content.firstName)
            );
            setSortedData(sorted);
            setSortingType(false) 
            // console.log(sorted)
        } else {
            setSortedData(patients)
            setSortingType(true)
        }
        
        
    }
    const reloadContent = () => {
        // loadPatients()
        console.log('reloading')
        router.push(router.asPath)
        // setPatientList(patients)
    }
    // const  Row =  ({patient}) => {
    //     // const regexPattern = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})$/;
    //     // const match =  patient?.appointment.search(regexPattern);
    //     // console.log(match)

    //     // if (match) {
    //     // const date = match[1]; // 2023-06-30
    //     // const time = match[2]; // 15:46:00

    //     // console.log('Date:', date);
    //     // console.log('Time:', time);
    //     // } else {
    //     // console.log('Invalid timestamp format');
    //     // }
    //     return(
    //             <div style={{
    //                 display:'flex',
    //                 flexDirection:'row',
    //                 justifyContent:'space-between',
    //                 alignItems:'center',
    //                 width:'100%',
    //                 paddingBlockStart:10,
    //                 marginBottom:10
    //             }}>
    //                 <p style={{
    //                 flex:2,
    //                 color:'black',
    //                 fontSize:14,
    //                 fontWeight:'400',
    //                 marginBottom:0
    //                 }}>{`${patient?.firstName} ${patient?.lastName}`}</p>
    //                 <p style={{
    //                 flex:1,
    //                 color:'black',
    //                 fontSize:14,
    //                 fontWeight:'400',
    //                 marginBottom:0
    //                 }}>{patient?.medHistory}</p>
    //                 <div style={{
    //                     display:'flex',
    //                     flexDirection:'row',
    //                     justifyContent: 'start',
    //                     alignItems:'start',
    //                     flex:1
    //                 }}>
    //                     <p style={{
    //                         color:'black',
    //                         fontSize:14,
    //                         fontWeight:'400',
    //                     }}>{patient?.status}</p>
    //                     <div style={{
    //                         width:20,
    //                         height: 20,
    //                         backgroundColor:'green',
    //                         borderRadius:'50%',
    //                         marginLeft: '1rem'
    //                     }}/>
    //                 </div>        
    //                 <p style={{
    //                 flex:1,
    //                 color:'black',
    //                 fontSize:14,
    //                 fontWeight:'400',
    //                 marginBottom:0
    //                 }}>{setAppointment(patient?.appointment)}</p>
    //                 <p style={{
    //                 flex:1,
    //                 color:'black',
    //                 fontSize:14,
    //                 fontWeight:'400',
    //                 marginBottom:0
    //                 }}>. . .</p>         
    //             </div>
    //     )
    // }
    const SearchBox = () => {
        return(
            <div className='card p-2' style={{
                width:650,
                height:'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
                }}>
                    <div style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '90%',
                        marginBottom:10
                    }}>
                        <input
                            placeholder='Search'
                            style={{
                                width:'80%',
                                height:'40px',
                                padding:'0 10px',
                                borderRadius:8,
                                border:'0.5px solid lightgray',   
                            }}
                        />
                        <div style={{
                            border:'0.5px solid lightgray',
                            borderRadius:8,
                            width:40,
                            height:40,
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                        <Image 
                            src={cross}
                            width={20}
                            height={20}
                            alt="filter"
                        />  
                        </div>
                    </div>
                    <button 
                        type="button"
                        style={{
                            display:'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:'25px',
                            height:'25px',
                            position:'absolute',
                            top:10,
                            right:10,
                        }} class="btn btn-outline-danger">x</button>
                
                {/* results */}
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width:'80%',
                    // borderBottom:'0.5px solid lightgray',
                    }}>
                    <p style={{marginBottom:0}}>Patient name</p>
                    <p style={{marginBottom:0}}>Patient gender</p>
                </div>
            </div>
        )
    }
    const SearchResult = () => {
         
    }

  return (
    <div className="card p-2 m-2">
        <div style={{
            width:'100%',
            height:60,
            padding:10,
            paddingInline:50,
            backgroundColor:'white',
            borderBottom:'0.5px solid #e0e0e0',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        }}>
                <h6>Patient Overview</h6>     
                {/* Total Patients ({totalPatients})  */}
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                width:'30%',
            }}>
                <div style={{
                    border:'0.5px solid #e0e0e0',
                    borderRadius:8,
                    width:40,
                    height:40,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <Link href="/registration">
                  <Image 
                    src={plus}
                    width={20}
                    height={20}
                    alt="add"
                  />  
                </Link>
                </div>
                <div style={{
                    border:'0.5px solid lightgray',
                    borderRadius:8,
                    width:40,
                    height:40,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                  <Image
                    src={search}
                    width={20}
                    height={20}
                    alt="search"
                    />  
                </div>
                
                <div 
                // onClick={()=>setSortingType(!sortingType)}
                onClick={()=>setSortData(sortingType)}
                style={{
                    border:'0.5px solid lightgray',
                    borderRadius:8,
                    width:40,
                    height:40,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                  <Image 
                    src={filter}
                    width={20}
                    height={20}
                    alt="filter"
                    />
                    <p style={{
                        fontSize:8,
                        margin:0,
                    }}>{!sortingType ? '':'A - Z'}</p>
                </div>
                <div style={{
                    border:'0.5px solid lightgray',
                    borderRadius:8,
                    width:40,
                    height:40,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                  <Image 
                    src={reload}
                    width={20}
                    height={20}
                    alt="help"
                    onClick={()=>(reloadContent())}
                   />
                </div>
            </div>
            {/* <SearchBox/> */}
        </div>
        {/* content row */}
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Status</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {sortedData?.map((patient,index)=>{
                    const data = patient.content
                    data["id"] = patient.id
                    return <tr key={index} onDoubleClick={()=>(
                            router.push({
                                pathname: '../patientFile',
                                query: data,
                            }, '../patientFile')
                        )}>
                        <th scope="row">{index + 1}</th>
                        <td>{patient?.content?.firstName} {patient?.content?.lastName}</td>
                        <td>{patient?.content?.age}</td>
                        <td>{patient?.content?.sex}</td>
                        <td>{patient?.content?.status? patient?.content?.status : 'Outpatient'}</td>
                        <td>.  .  .</td>
                    </tr>
                })}
            </tbody>
        </table>
        <SearchBox/>
    </div>
  )
}

export default Patient
