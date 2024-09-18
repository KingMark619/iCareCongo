'use client'
import { arrowRight, dots, plus } from '@/assets/icons'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Layout from '../components/Layout/Layout'
import './task.module.css'
import { useAuth } from '../context/AuthContext';
import { useStateContext } from '../context/StateContext';
import { app, initFirestore } from '@/firebase/clientApp'
import { getAuth } from 'firebase/auth'
import { collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore'
import Title from '../components/Title';


const Task = () => {
  const db = initFirestore()

  const auth = getAuth(app)
  const { activeUser } = useAuth()
// const {token } = useAuth()
    const [selected,setSelected] = 'true'
    // get the data from the user ID.
    
    // populate the list of tasks
    const [task, setTask] = useState()
    const [newTask, setNewTask] = useState()
    const [taskTime, setTaskTime] = useState()
    const [selectedPriority, setSelectedPriority] = useState(null)
    const { tasks } = useStateContext()
    
    
    // completed tasks
    // deleted/ archived tasks

    useEffect(() => {
        setTask(tasks)
      }, [task])
  
      const handleNewTask = async (e) => {
        e.preventDefault()
        setTask(...tasks,newTask)
        console.log(`${newTask} and ${taskTime}`)
        // get current user ID, if available
        const id = activeUser?.id
        // upload to firestore
        
        // const messageRef = doc(db, "tasks", id, "messages", "message1")
        // try {
        //   await setDoc(doc(db, "tasks", id), {
        //     toDoName: newTask,
        //     date: taskTime,
        //     completed: false
        //   });
        //   // success and update dom with new list
        // } catch (e) {
        //   console.error("Error adding document: ", e);
        // } 
    }
    const handleTaskOptions = (option,taskId) => {
      console.log(option,taskId)
    }
      // Function to handle button selection
    const handleSelect = (priority) => {
      setSelectedPriority(priority); // Update selected priority
    }

  return (
    <div className="gradient-custom" style={{width:'100%'}}>
      <div className="container py-4">
      <div className="row d-flex justify-content-center align-items-center h-100">
      <div>
        <div className="card">
          <div className="card-body p-4">
          <Title text="Tasks and reminder"/>
            <form onSubmit={handleNewTask} className="mb-4" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start'
            }}>
              <div className="form-outline flex-fill">
                <div style={{
                  display: 'flex',
                  flexDirection:'row',
                  justifyContent: 'space-between',
                  alignItems:"center", 
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexDirection:'column',
                      width:'40%'
                    }}>
                      <p>Description</p>
                      <input
                        
                        type="text" 
                        id="form2"
                        className="form-control" 
                        onChange={(e) => setNewTask(e.target.value)} />
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexDirection:'column',
                      width:'20%'
                    }}>
                      <p>Date</p>
                      <input
                        className='form-control'
                        type="datetime-local" 
                        id="tasktime" 
                        name="tasktime"
                        onChange={(e) => setTaskTime(e.target.value)}
                      />
                    </div>
                  {/* priority section */}
                    <div style={{
                    width:'30%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexDirection: 'column'
                    }}>
                      <p>Priority</p>
                      <div>
                    <button 
                      type="submit" 
                      className={`${selectedPriority === 'low' ? 'btn btn-success' : 'btn btn-outline-success'}`}
                      onClick={() => handleSelect('low')}
                      >Low
                    </button>
                    <button 
                      type="submit" 
                      className={`${selectedPriority === 'medium' ? 'btn btn-warning ms-2' : 'btn btn-outline-warning ms-2'}`}
                      onClick={() => handleSelect('medium')}
                      >Medium
                    </button>
                    <button 
                      type="submit" 
                      className={`${selectedPriority === 'urgent' ? 'btn btn-danger ms-2' : 'btn btn-outline-danger ms-2'}`}
                      onClick={() => handleSelect('urgent')}
                      >Urgent
                    </button>
                    </div>
                  </div>  
                    </div>
                  <button type="submit" className="btn btn-primary ms-2">Add</button>
                </div>
              </div>
            </form>
            {/* <!-- Tabs content --> */}
            <div className="tab-content" id="ex1-content">
              <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                aria-labelledby="ex1-tab-1">
                <ul className="list-group mb-0">
                  {tasks?.map((task,i) =>(
                    <li key={i} className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                      style={{
                        display:'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#f4f6f7'
                      }}>
                      <p style={{width:'50%'}}>{ task.title }</p>
                      {/* time */}
                      <p style={{width:'30%'}}>{ task?.date }</p>
                      {/* status */}
                      <div style={{width:'20%', justifySelf:'flex-end'}}>
                        <button 
                          type="submit" 
                          className="btn btn-outline-success"
                          onClick={() => handleTaskOptions(task,i)}
                        >Done
                        </button>
                        <button 
                          type="submit" 
                          className="btn btn-outline-warning ms-2"
                          onClick={() => handleTaskOptions(task,i)}
                        >Hold
                        </button>
                        <button 
                          type="submit"
                          className="btn btn-outline-danger ms-2"
                          onClick={() => handleTaskOptions(task,i)}
                          >Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}



export default Task