import React from 'react';

const ClientFeedback = (singleReview) => {
  const reviews = singleReview.review;
    return (
        <section class="clietn-feedback my-5">
        <div class="container">
    <h3 class="text-center">Clients <span style={{color: '#7AB259'}} >Feedback</span></h3>
        <div class="row mt-5">

        {
          reviews.length > 0 ? 
          reviews.map(review=>(
            <div class="col-md-4 mb-2">
            <div class="client-feedback-card">
                <div class="client-profile d-flex align-items-center mb-2">
                    <div class="client-avatar">
                      <img src={`data:image/jpeg;base64,${review.image.img}`} alt=""/>
                    </div>
                    <div class="client-dsc">
                    <h5>{review.name}</h5>
                      <p>{review.designation}</p>
                    </div>
                </div>
                <p class="text-left">
                  {review.description}
                </p>
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

export default ClientFeedback;