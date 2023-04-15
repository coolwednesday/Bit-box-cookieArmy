import React from 'react'
import './PatientItem.css'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function PatientItem(props) {
    const {id,score,bmi,symptoms}=props.evaluation;
  return (
    <div className='cont-pat'>
        <div>ID:  {id}</div>
        <div>Assessment Score:  {score}</div>
        <div>BMI: {bmi}</div>
        <div>Symptoms:  {symptoms}</div>
        <button className="dia-but" onClick={()=>window.location="/Prescription"}>Diagnose</button>
    </div>
  )
}
