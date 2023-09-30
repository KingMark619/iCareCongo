'use client'
import React,{useState} from 'react'
import Divider from '../components/Divider/Divider'
import {useForm} from 'react-hook-form'
import Image from 'next/image'
import logo from '../../assets/logo/blue.png'
import Link from 'next/link'
import { exams } from '@/DummyData'

const index = () => {
    const {register, handleSubmit} = useForm()
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle input change
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Perform the search and update the results
    const results = exams.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
    if(searchTerm !== ''){
        setIsOpen(true);
    } else {
        setIsOpen(false)
    }
    
  };

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
                    <textarea  readOnly={true} style={{
                        border:'0.5px solid lightgray',
                        padding:5,
                        width:'80%',
                        height:'200px'
                    }}>fhejf</textarea>
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
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <button className="btn btn-outline-success" type="submit">+</button>
                        </div>
                        
                    {isOpen && (
                        <ul>
                        <div >
                        {searchResults.map((result, index) => (
                            <div style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-between',
                                alignItems:'center',
                                width:'30%',
                                marginLeft:60,
                                padding:'10px 0',
                                
                                borderBottom:'0.5px solid lightgray',
                            }}>
                            <p style={{
                                fontSize:15,
                                fontWeight:'300',
                                marginBottom:0,
                                color:'black'
                            }} key={index}>{result}</p>
                            <button className="btn btn-outline-success" type="submit">+</button>
                            </div>
                        ))}
                        </div>
                        </ul>
                    )}
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
                    <textarea style={{
                        border:'0.5px solid lightgray',
                        padding:5,
                        width:'80%',
                        height:'200px'
                    }}>some observation by the doctor goes here</textarea>
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