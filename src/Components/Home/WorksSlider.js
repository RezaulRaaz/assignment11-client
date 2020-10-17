import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "../../assets/images/carousel-1.png";
import Carousel2 from "../../assets/images/carousel-2.png";
import Carousel3 from "../../assets/images/carousel-3.png";
import Carousel4 from "../../assets/images/carousel-4.png";

const WorksSlider = () => {
  const responsive ={
          0: {
              items: 1,
          },
          450: {
              items: 1,
          },
          600: {
              items: 2,
          },
          1000: {
              items: 3,
          },
      }
  return (
    <section class="works-slider">
      <h3 class="text-center text-white">
        Here are some of <span style={{ color: "#7AB259" }}>our works</span>
      </h3>
      <div class="container py-5">
        <OwlCarousel className="owl-theme" 
        loop margin={10} 
        autoplay={true}
        smartSpeed={100}
        autoplayTimeout={2000}
        responsive={responsive}
        nav
        >
        <div class="item">
          <div class="works-card">
            <img src={Carousel} alt="" />
          </div>
          </div>
          <div class="item">
          <div class="works-card">
            <img src={Carousel2} alt="" />
          </div>
          </div>
          <div class="item">
          <div class="works-card">
            <img src={Carousel3} alt="" />
          </div>
          </div>
          <div class="item">
          <div class="works-card">
            <img src={Carousel4} alt="" />
          </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default WorksSlider;
