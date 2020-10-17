import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const EnrolledServices = () => {
  const [enrolledService, setEnrolledService] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      fetch("https://tranquil-shelf-58388.herokuapp.com/allEnrolledServices", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setEnrolledService(result);
        });
    }
  }, []);
  return (
    <div>
      <Topbar></Topbar>
      <div class="container-fluid">
        <div class="row">
          <Sidebar></Sidebar>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="row p-5">
                {
                    (enrolledService.length > 0)?
                        enrolledService.map(service =>(
                            <div className="col-lg-4">
                            <div class="card border-dark mb-3" style={{maxWidth:' 18rem'}}>
                            <div class="card-header">
                                <span class="badge badge-light">{service.status}</span>
                            </div>
                            <div class="card-body text-dark">
                        <h5 class="card-title">{service.title}</h5>
                                <p class="card-text">
                                {service.description}
                                </p>
                            </div>
                            </div>
                        </div>
                        )):<div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                }
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EnrolledServices;
