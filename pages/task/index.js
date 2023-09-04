import { arrowRight, dots, plus } from '@/assets/icons'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Layout from '../components/Layout/Layout'
import './task.module.css'
import { useAuth } from '../context/AuthContext';
import { useStateContext } from '../context/StateContext';


const Task = () => {
const {token } = useAuth()
    const [selected,setSelected] = 'true'
    // get the data from the user ID.
    
    // populate the list of tasks
    const [task, setTask] = useState([])
    const { tasks } = useStateContext()
    // completed tasks
    // deleted/ archived tasks

    useEffect(() => {
        console.log(tasks)
        setTask(tasks)
      }, [])
  
  const handleNewTask = (e) => {
      console.log(e)
  }

  return (
    <div className="gradient-custom" style={{width:'50%'}}>
      <div className="container py-4">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div>
        <div className="card">
          <div className="card-body p-4">
            <form onSubmit={handleNewTask()} className="mb-4" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start'
            }}>
              <div className="form-outline flex-fill">
                <input type="text" id="form2" className="form-control" />
                <label className="form-label" htmlFor="form2">New task...</label>
              </div>
              <button type="submit" className="btn btn-primary ms-2">Add</button>
            </form>

            {/* <!-- Tabs navs --> */}
            
            <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                  aria-controls="ex1-tabs-1" aria-selected="true">All</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                  aria-controls="ex1-tabs-2" aria-selected="false">Active</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                  aria-controls="ex1-tabs-3" aria-selected="false">Completed</a>
              </li>
            </ul>
            {/* <!-- Tabs navs --> */}

            {/* <!-- Tabs content --> */}
            <div className="tab-content" id="ex1-content">
              <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                aria-labelledby="ex1-tab-1">
                <ul className="list-group mb-0">
                  {tasks?.map((task,i) =>(
                    <li key={i} className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    {task.title}
                  </li>
                  ))}
                </ul>
              </div>
              {/* diffrernt tab */}
              <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                <ul className="list-group mb-0">
                  <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    Morbi leo risus
                  </li>
                  <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    Porta ac consectetur ac
                  </li>
                  <li className="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    Vestibulum at eros
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                <ul className="list-group mb-0">
                  <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." defaultChecked />
                    <s>Cras justo odio</s>
                  </li>
                  <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." defaultChecked />
                    <s>Dapibus ac facilisis in</s>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Tabs content --> */}

          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  )
}



export default Task