import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div class="container">
          <div class="row mt-5">
            <div class="col-md-6">
              <div class="footer-left text-left">
                <h2>Let us handle your project, professionally.</h2>
                <p class="mt-4" >With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="footer-right">
                <form>
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Your email address"/>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Yur name/Company name"/>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                  </div>
                  <button type="submit" class="btn btn-dark float-left">Send</button>
                </form>
              </div>
            </div>
          </div>
         <div class="footer-bottom my-5">
          <p class="text-center">copyright Orange labs {(new Date()).getFullYear()}</p>
         </div>
        </div>
      </footer>
    );
};

export default Footer;