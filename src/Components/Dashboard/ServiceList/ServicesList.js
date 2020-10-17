import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

const ServicesList = () => {
    const [singleService,setService]= useState([]);
    useEffect(()=>{
        fetch('https://tranquil-shelf-58388.herokuapp.com/allService')
        .then(res => res.json())
        .then(data => {
            setService([...data])
        })
    },[])
    const deleteService=(id)=>{
        fetch(`https://tranquil-shelf-58388.herokuapp.com/deleteService/${id}`,{
          method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            store.addNotification({
                title: "Wonderful!",
                message: "Delete Successfully",
                type: "success",
                insert: "top",
                container: "top-right",
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
            });
        })
       }
  return (
    <div>
      <Topbar></Topbar>
      <div class="container-fluid">
        <div class="row">
          <Sidebar></Sidebar>
          <ReactNotification />
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="col-lg-12">
            <h3 class="py-4 text-left" >Services List</h3>
            <table class="table text-left">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Icon</th>
                  <th scope="col">Title</th>
                  <th scope="col">Project Details</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
               {
                 (singleService.length > 0)?
                   singleService.map(service=>(
                    <tr>
                        <td> <img src={`data:image/jpeg;base64,${service.icon.img}`} style={{width:'50px'}}  alt="" srcset="" /></td>
                        <td>{service.title}</td>
                        <td>{service.description}</td>
                        <td><button onClick={()=>deleteService(`${service._id}`)} className="btn btn-sm btn-danger">x</button></td>
                    </tr>
                   )):<div className="pt-5">
                     <div class="spinner-border text-warning m-auto" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                   </div>
               }
              </tbody>
            </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
