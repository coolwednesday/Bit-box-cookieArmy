import React from 'react'
import './PatientList.css'
import PatientItem from './PatientItem';
export default function PatientList(){
    const patients=[{id:1,score:20,bmi:25,symptoms:'Severe mood swings'},{id:2,score:10,bmi:23,symptoms:'headache'},{id:3,score:30,bmi:20,symptoms:'hair loss'}];
  return (
    <div>
      <div className='patients'>
        {patients.map(evaluation=>(
            <PatientItem evaluation={evaluation}/>
            
        ))}
        <div className='patients'>
            <button className="dia-but" onClick={()=>{window.location="/"}}>Logout</button>
        </div>
      </div>
    </div>
  )
}
