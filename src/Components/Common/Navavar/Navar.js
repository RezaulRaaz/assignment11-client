import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/images/logos/logo.png'

const Navar = () => {
    return (
<div>
    <header>
        <div class="container">
            <div class="menu">
              <nav class="navbar navbar-expand-lg navbar-light">
                <a  href="#">
                    <img src={logo} width="120" height="35" class="d-inline-block align-top" alt="" loading="lazy"/>
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                      <Link to="/home" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/dashboard" >Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact us</a>
                    </li>
                     <Link to="/login" class="btn btn-dark my-2">Login</Link>
                  </ul>
                </div>
              </nav> 
            </div>
        </div>
    </header>
</div>
    );
};

export default Navar;