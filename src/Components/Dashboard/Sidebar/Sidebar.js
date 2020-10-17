import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faList,
  faPlus,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [admin, setAdmin] = useState({});
  useEffect(() => {
    fetch("https://tranquil-shelf-58388.herokuapp.com/admin",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({email:loggedInUser.email}),
      })
      .then((res) => res.json())
      .then((result) => {
        setIsAdmin(result);
        console.log(result);
      });
  }, []);
  return (
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="sidebar-sticky pt-3">
        <ul class="nav">
          <li class="nav-item d-item">
            <Link to="/dashboard/service/enrol" className="nav-link">
              <FontAwesomeIcon icon={faList} /> <span>New Service Enroll</span>
            </Link>
          </li> 
          <li class="nav-item d-item">
            <Link to="/dashboard/enrolled/service" className="nav-link">
              <FontAwesomeIcon icon={faList} /> <span>Enrolled Services</span>
            </Link>
          </li>
          <li class="nav-item d-item">
            <Link to="/dashboard/add/review" className="nav-link">
              <FontAwesomeIcon icon={faComment} /> <span>Add Review</span>
            </Link>
          </li>
          {isAdmin && (
            <div>
              <li class="nav-item d-item">
                <Link to="/dashboard/list" className="nav-link">
                  <FontAwesomeIcon icon={faList} /> <span>Service List</span>
                </Link>
              </li>
              <li class="nav-item d-item">
                <Link to="/dashboard/add/review/list" className="nav-link">
                  <FontAwesomeIcon icon={faList} /> <span>Review List</span>
                </Link>
              </li>
              <li class="nav-item d-item">
                <Link to="/dashboard/add/services" className="nav-link">
                  <FontAwesomeIcon icon={faPlus} /> <span>Add services</span>
                </Link>
              </li>
              <li class="nav-item d-item">
                <Link to="/dashboard/add/admin" className="nav-link">
                  <FontAwesomeIcon icon={faUser} /> <span>Add Admin</span>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Sidebar;
