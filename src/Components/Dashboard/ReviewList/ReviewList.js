import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';


const ReviewList = () => {
    const [singleReview,setReviewList]= useState([]);
    useEffect(()=>{
        fetch('https://tranquil-shelf-58388.herokuapp.com/allReview')
        .then(res => res.json())
        .then(result => setReviewList([...result]))
    },[])
    const deleteReview=(id)=>{
        fetch(`https://tranquil-shelf-58388.herokuapp.com/${id}`,{
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
              <h3 class="py-4 text-left" >Review List</h3>
              <table class="table text-left">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Profile Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Review</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                 {
                   (singleReview.length > 0)?
                     singleReview.map(review=>(
                      <tr>
                          <td> <img src={`data:image/jpeg;base64,${review.image.img}`} style={{width:'50px'}}  alt="" srcset="" /></td>
                          <td>{review.name}</td>
                          <td>{review.designation}</td>
                          <td>{review.description}</td>
                          <td><button onClick={()=>deleteReview(`${review._id}`)} className="btn btn-sm btn-danger">x</button></td>
                      </tr>
                     )):<div class="spinner-border text-warning" role="status">
                     <span class="sr-only">Loading...</span>
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

export default ReviewList;