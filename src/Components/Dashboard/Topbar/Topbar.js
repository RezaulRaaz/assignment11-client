import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from './../../../assets/images/logos/logo.png'

const Topbar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0">
        <Link class=" col-md-3 col-lg-2 mr-0 p-3" to="/">
         <img src={logo} width="120" height="35" class="d-inline-block align-top" alt="" loading="lazy"/>
        </Link>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <ul class="navbar-nav px-3">
           <li class="nav-item text-nowrap">
              <a class="nav-link" href="#">Welcome Back! {loggedInUser.name}</a>
          </li>
        </ul>
      </nav>
    );
};

export default Topbar;