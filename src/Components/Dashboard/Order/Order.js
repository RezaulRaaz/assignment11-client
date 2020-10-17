import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

const Order = () => {
  const [data] = useContext(UserContext);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (req) => {
    const formData = new FormData();
    formData.append("image", req.image[0]);
    formData.append("title", req.title);
    formData.append("description", req.description);
    formData.append("name", req.name);
    formData.append("email", req.email);
    formData.append("price", req.price);
    formData.append("status", 'Pending');

    fetch("https://tranquil-shelf-58388.herokuapp.com/addServiceErolled", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((returData) => {
        store.addNotification({
          title: "Wonderful!",
          message: "Erolled Successfully",
          type: "success",
          insert: "top",
          container: "top-right",
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      });
  };
  return (
    <div>
      <Topbar></Topbar>
      <div class="container-fluid">
        <div class="row">
          <Sidebar></Sidebar>
          <ReactNotification />
          <main role="main" class="col-md-9 ml-sm-auto py-2 col-lg-10 px-md-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
              
                   <div className="col-lg-4 text-left">
                   <div class="form-group">
                     <label for="title">Your Name</label>
                     <input
                       name="name"
                       type="text"
                       ref={register({ required: true })}
                       defaultValue={data.name}
                       class="form-control"
                       id="title"
                       placeholder="Name"
                     />
                     <p className="text-danger">
                       {errors.name && "Name is required"}
                     </p>
                   </div>
                   <div class="form-group">
                     <label for="title">Your Email</label>
                     <input
                       name="email"
                       type="text"
                       ref={register({ required: true })}
                       defaultValue={data.email}
                       class="form-control"
                       id="title"
                       placeholder="Email address"
                     />
                     <p className="text-danger">
                       {errors.email && "Email is required"}
                     </p>
                   </div>
                   <div class="form-group">
                     <label for="title">Service Title</label>
                     <input
                       name="title"
                       type="text"
                       ref={register({ required: true })}
                       defaultValue={data.title}
                       class="form-control"
                       id="title"
                       placeholder="Service Title"
                     />
                     <p className="text-danger">
                       {errors.title && "Service Title is required"}
                     </p>
                   </div>
                   <div class="form-group">
                     <label for="dsc">Service Description</label>
                     <textarea
                       name="description"
                       ref={register({ required: true })}
                       defaultValue={data.description}
                       class="form-control"
                       id="dsc"
                       rows="3"
                     ></textarea>
                     <p className="text-danger">
                       {errors.description && "Service Description is required"}
                     </p>
                   </div>
                   <div className="row">
                       <div className="col-lg-6">
                       <label for="title">Price</label>
                     <input
                       name="price"
                       type="text"
                       ref={register({ required: true })}
                       class="form-control"
                       id="title"
                       placeholder="Service Title"
                     />
                     <p className="text-danger">
                       {errors.price && "Price is required"}
                     </p>
                       </div>
                       <div className="col-lg-6">
                       <div class="form-group">
                     <label for="exampleFormControlFile1"> Upload Screen Shot</label>
                     <input
                       type="file"
                       name="image"
                       ref={register({ required: true })}
                       class="form-control-file"
                       id="exampleFormControlFile1"
                     />
                     <p className="text-danger">
                       {errors.image && "Screenshot is required"}
                     </p>
                   </div>
                       </div>
                   </div>
                   <button type="submit" class="btn btn-primary">
                     Submit
                   </button>
                 </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Order;
