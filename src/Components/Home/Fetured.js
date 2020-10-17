import React from 'react';
import FeturedImage from "./../../assets/images/logos/Frame.png";

const Fetured = () => {
    return (
        <section class="slider-area d-flex align-items-center">
        <div class="container">
          <div class="slider">
            <div class="row">
              <div class="col-md-6 d-flex align-items-center">
                <div class="slide-dsc text-left">
                  <h3>
                    Let’s Grow Your
                    <br />
                    Brand To The
                    <br />
                    Next Level
                  </h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                    doloribus corrupti commodi voluptate ad quas reiciendis
                    saepe quam vero modi? Facilis placea
                  </p>
                  <button class="btn btn-dark my-2">Hire Us</button>
                </div>
              </div>
              <div class="col-md-6">
                <div class="slider-img">
                  <img src={FeturedImage} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Fetured;