import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { AnimationWrapper } from 'react-hover-animation'
import { useHistory } from "react-router-dom";

const Services = (singleService) => {

  const services = singleService.service;
  const [data, setData] = useContext(UserContext);
  const history = useHistory();
  const enrollService = (service) => {
    const newService = {
      title: service.title,
      description: service.description,
      icon: service.icon,
    };
    setData({ ...data, ...newService });
    history.replace("/dashboard/service/enrol");
  };

  return (
    <section class="services-area">
      <h3 class="text-center">
        Provide awesome <span style={{ color: "#7AB259" }}>services </span>
      </h3>
      <div class="container mt-5">
        <div class="mb-5 row d-flex align-items-center justify-content-center">
          {services.length > 0 ? 
            services.map((service) => (
              <div class="col-lg-4 mb-2" key={service._id}>
                <div
                  class="service-card  text-center"
                  onClick={() => enrollService(service)}
                >
                  <div class="service-card-icon d-flex align-items-center justify-content-center">
                  <AnimationWrapper>
                    <img
                      src={`data:image/jpeg;base64,${service.icon.img}`}
                      alt=""
                      srcset=""
                    />
                    </AnimationWrapper>
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            )): 
            <div class="d-flex justify-content-center">
              <div class="spinner-grow text-warning" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
