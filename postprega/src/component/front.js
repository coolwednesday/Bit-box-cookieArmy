import React from 'react'
import PropTypes from 'prop-types'
import './front.css'



export default function Front(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light front">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="logo.png" width="50" height="50" class="d-inline-block align-top" alt=""></img>
                        Post.Prego
                    </a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto order-5">
                            <a class="nav-link active .ms-auto" href="/login">Login</a>
                            <a class="nav-link active" href="/signup">SignUp</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="col text">
                <div>
                    <h1><span>Post</span>.<span>Prega</span></h1>
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>“Motherhood: The only place you can experience </p>
                            <p>heaven and hell at the same time.”</p>
                        </blockquote>
                    </figure>
                </div>
                <img src="logo.png" class="img-fluid rounded " alt="..."></img>
            </div>
            <div className="blog">

            </div>



        </>



    )
}