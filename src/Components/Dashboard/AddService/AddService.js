import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { useForm } from "react-hook-form";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

const AddService = () => {

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        formData.append('title', data.title)
        formData.append('description', data.description)

        fetch('http://localhost:5000/addAService',{
            method: 'POST',
            body:formData,
        })
        .then(res=>res.json())
        .then(returData =>{
          store.addNotification({
            title: "Wonderful!",
            message: "Data Save Successfully",
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
                                <label for="title">Service Title</label>
                                <input name="title" type="text"  ref={register({ required: true })} class="form-control" id="title" placeholder="Service Title"/>
                                <p className="text-danger">{errors.title && "Service Title is required"}</p>
                            </div>
                            <div class="form-group">
                                <label for="dsc">Service Description</label>
                                <textarea name="description"  ref={register({ required: true })} class="form-control" id="dsc" rows="3"></textarea>
                                <p className="text-danger">{errors.description && "Service Description is required"}</p>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-lg-2">
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Service Icon</label>
                        <input type="file" name="image" ref={register({ required: true })} class="form-control-file" id="exampleFormControlFile1"/>
                        <p className="text-danger">{errors.image && "Icon is required"}</p>
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

export default AddService;
