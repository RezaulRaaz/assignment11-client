import React from "react";
import Netfilix from "../../assets/images/logos/netflix.png";
import airbnb from "../../assets/images/logos/airbnb.png";
import google from "../../assets/images/logos/google.png";
import slack from "../../assets/images/logos/slack.png";
import uber from "../../assets/images/logos/uber.png";

const ClietLogo = () => {
  return (
    <div>
      <div class="client-logo-area">
        <div class="container  d-flex justify-content-center">
          <div class="client-logo-wrapper ">
            <div class="row">
              <div class="col-md-2 d-flex justify-content-center">
                <div class="client-logo">
                  <img src={airbnb} alt="" srcset="" />
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div class="client-logo">
                  <img src={google} alt="" srcset="" />
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div class="client-logo">
                  <img src={slack} alt="" srcset="" />
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div class="client-logo">
                  <img src={uber} alt="" srcset="" />
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div class="client-logo">
                  <img src={Netfilix} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClietLogo;
