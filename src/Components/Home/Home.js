import React, { useEffect, useState } from "react";
import ClientFeedback from "./ClientFeedback";
import ClietLogo from "./ClietLogo";
import Fetured from "./Fetured";
import Services from "./Services";
import WorksSlider from "./WorksSlider";
import Menu from '../Common/Navavar/Navar'
import Footer from '../Common/Footer/Footer'
const Home = () => {
  
  const [singleService,setService]= useState([]);
  const [singleReview,setReview]= useState([]);
  useEffect(()=>{
      fetch('https://tranquil-shelf-58388.herokuapp.com/allService')
      .then(res => res.json())
      .then(data => setService([...data]))
  },[])

  useEffect(()=>{
    fetch('https://tranquil-shelf-58388.herokuapp.com/allReview')
    .then(res => res.json())
    .then(result => setReview([...result]))
},[])

  return (
    <div>
       <Menu/>
        <Fetured/>
        <ClietLogo/>
        <Services service={singleService}/>
        <WorksSlider/>
        <ClientFeedback review={singleReview} />
        <Footer/>
    </div>
  );
};

export default Home;
