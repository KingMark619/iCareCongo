import { client } from '@/client'
import React,{createContext, useContext, useState, useEffect} from 'react'

const Context = createContext()


 const StateContext = ({children}) => {

    const patientQuery = `*[_type == "patient"]`
    const doctorQuery = `*[_type == "doctor"]`
    const nurseQuery = `*[_type=="nurse"]`
    const appointmentQuery = `*[_type == "appointment"]`
    const taskQuery = `*[_type == "task"]`
    const userQuery = `*[_type == "user"]`

    // create state for data you need
    const [doctors, setDoctors] = useState()
    const [patients, setPatients] = useState()
    const [nurses, setNurses] = useState()
    const [appointments, setAppointments] = useState()
    const [tasks, setTasks] = useState()
    const [users, setUsers] = useState()

    useEffect(()=>{
      console.log('loading data...')
       client.fetch(patientQuery)
       .then((response) => {setPatients(response)})
       .catch((error) => {console.error('Cant load Patients')})

       client.fetch(doctorQuery)
       .then((response) => {setDoctors(response)})
       .catch((error) => {console.error('Cant load Doctors')})

       client.fetch(nurseQuery)
       .then((response) => {setNurses(response)})
       .catch((error) => {console.error('Cant load Nurses')})

       client.fetch(appointmentQuery)
       .then((response) => {setAppointments(response)})
       .catch((error) => {console.error('Cant load Appointments')})

       client.fetch(taskQuery)
       .then((response) => {setTasks(response)})
       .catch((error) => {console.error('Cant load Tasks')})

       client.fetch(userQuery)
       .then((response) => {setUsers(response)})
       .catch((error) => {console.error('Cant load Tasks')})
    },[])

  return (
    <Context.Provider
        value={{
            doctors,
            patients,
            nurses,
            appointments,
            tasks,
            users
        }}
    >
        {children}
    </Context.Provider>
  )
}
export default StateContext

export const useStateContext = () =>  useContext(Context)


