import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg body-tertiary" >
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
   
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Forum</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active ">Connect</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active ">Access</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Diet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Contact</a>
        </li>
      </ul>
      
    </div>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <a class="navbar-brand" href="#">Post Prega</a>
    </div>
    <img src="logo.png" alt="Bootstrap" width="60" height="50"></img>
  </div>
</nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired}
Navbar.defaultProps={
    title:'Set Title Here'
}
