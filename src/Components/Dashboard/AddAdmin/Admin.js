import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

const Admin = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://tranquil-shelf-58388.herokuapp.com/addAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({email:data.email}),
        })
        .then(res=>res.json())
        .then(returData =>{
          store.addNotification({
            title: "Wonderful!",
            message: "Review Save Successfully",
            type: "success",
            insert: "top",
            container: "top-right",
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        })
    };
    return (
        <div>
        <Topbar></Topbar>
        <div class="container-fluid">
        <div class="row">
            <Sidebar></Sidebar>
            <ReactNotification />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div className="service text-left">
                  <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="row">
                      <div className="col-lg-4">
                              <div class="form-group">
                                  <label for="title">Email</label>
                                  <input name="email" type="email"  ref={register({ required: true })} class="form-control" id="title" placeholder="Email"/>
                                  <p className="text-danger">{errors.email && "Email is required"}</p>
                              </div>
                              <button type="submit" class="btn btn-primary">Add</button>
                      </div>
                  </div>
                      </form>
              </div>
            </main>
        </div>
        </div>
    </div>
    );
};

export default Admin;