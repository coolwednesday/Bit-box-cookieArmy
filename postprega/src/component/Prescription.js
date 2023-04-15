import React from 'react'
import './style2.css'

export default function Prescription() {
  return (
    <div className='full'>
    <div className="container2">
        <header>Enter Personal Details</header>
        <form>
            <div className="details personal">
                <span className="title"> Nutritional Details </span>
                <div className="fields">
                    <div className="input-field">
                        <label>Calorie Intake</label>
                        <input type="Number" placeholder="Calorie Intake" required/>
                    </div> 
                    <div className="input-field">
                        <label>Date of Prescription</label>
                        <input type="date" placeholder="Date of Prescription" required/>
                    </div>
                    <div className="input-field">
                        <label>Vitamins</label>
                        <input type="text" placeholder="Enter Vitamins to be taken" required/>
                    </div>
                    <hr/>
                    <div className="input-field">
                        <label>Particular diet to be consumed</label>
                    </div>
                        <div className="allergies">
                        <textarea name='Diet' placeholder='Enter Diet' />
                        </div>
                        <hr/>
                        <div className="input-field">
                            <label>Exercise And Meditation</label>
                        </div>
                        <div className="allergies">
                        <textarea name='Exercise' placeholder='Enter Exercises and meditation' />
                        </div>
                        <hr/>
                       
                </div>
            </div>
        </form>
        <div className='Submit_button'>
                            <button onClick={()=>{window.location="/patient"}}>Submit</button>
                        </div>
     </div>
     </div>
  )
}
