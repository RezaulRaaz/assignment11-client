import React from 'react';
import Carousel from '../../assets/images/carousel-1.png'

const WorksSlider = () => {
    return (
        <section class="works-slider">
        <h3 class="text-center text-white">Here are some of <span style={{color: '#7AB259'}} >our works</span></h3>
        <div class="container py-5">
            <div class="works-card">
              <img src={Carousel} alt=""/>
            </div>
        </div>
      </section>
    );
};

export default WorksSlider;