import React, { Component } from 'react'

//export class Newsitem extends Component {
  const Concern=(props)=>{
  //render() {
    let {title,address,}=props;
    return (
       
      <div className='my-3 align-items-center'>
        <div className="card doc " >
      <div className="card-body">
      <div class="service-block-two">
			<div class="inner-box">
				<div class="shape-one"></div>
				<div class="shape-two"></div>
				<div class="icon-box">
					<span class="icon flaticon-coding-1"></span>
				</div>
        <div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{address}</p>
      </div>
  </div>
   </div>
      </div>
      </div>
      </div>
    )
  //}
}

export default Concern