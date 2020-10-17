import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        formData.append('name', data.name)
        formData.append('designation', data.designation)
        formData.append('description', data.description) 

        fetch('https://tranquil-shelf-58388.herokuapp.com/addReview',{
            method: 'POST',
            body:formData,
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
            <main role="main" class="col-md-9 col-lg-10 py-5">
              <div className="service text-left">
                  <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="row">
                      <div className="col-lg-4">
                              <div class="form-group">
                                  <label for="title">Name</label>
                                  <input name="name" type="text"  ref={register({ required: true })} class="form-control" id="title" placeholder="Name"/>
                                  <p className="text-danger">{errors.name && "name is required"}</p>
                              </div>
                              <div class="form-group">
                                  <label for="title">Designtaion</label>
                                  <input name="designation" type="text"  ref={register({ required: true })} class="form-control" id="title" placeholder="Designation"/>
                                  <p className="text-danger">{errors.designation && "Designation is required"}</p>
                              </div>
                              <div class="form-group">
                                  <label for="dsc">Description</label>
                                  <textarea name="description"  ref={register({ required: true })} class="form-control" id="dsc" rows="3"></textarea>
                                  <p className="text-danger">{errors.description && "Description is required"}</p>
                              </div>
                              <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                      <div className="col-lg-2">
                      <div class="form-group">
                          <label for="exampleFormControlFile1">Profile Avatar</label>
                          <input type="file" name="image" ref={register({ required: true })} class="form-control-file" id="exampleFormControlFile1"/>
                          <p className="text-danger">{errors.image && "Profile is required"}</p>
                      </div>
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

export default Review;