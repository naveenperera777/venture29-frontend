import React from 'react';

export default function Home(){
    return(
        <div>
             <section class="contact relative" id="home">	
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="do-content col-lg-12">
                            <h2 class="text-white">
                            Have an idea or an epic project in mind?  <br></br>Talk to us. Let’s work together and make something great.
							</h2>	
							{/* <h2>mtjglobal@gmail.com</h2>                           */}
                            <div class="social-connect col-lg-6 col-sm-6 col-4 ">
				  				<ul>
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li><a href="#"><i class="fa fa-behance"></i></a></li>
				  				</ul>
				  			</div>  
						</div>	
					</div>
				</div>
            </section>  


<div class="site-section bg-light contact-wrap" id="contact-section">
      <div class="container">
        
        <div class="row justify-content-center text-center mb-5">
          <div class="col-md-8  section-heading">
            <span class="subheading">Get In Touch</span>
            <h2 class="heading mb-3">Contact Us</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts.
            </p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-7">
            <form method="post" data-aos="fade">
              <div class="form-group row">
                <div class="col-md-6 mb-3 mb-lg-0">
                  <input type="text" class="form-control" placeholder="First name" />
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Last name" />
                </div>
              </div>
    
              <div class="form-group row">
                <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Subject" />
                </div>
              </div>
    
              <div class="form-group row">
                <div class="col-md-12">
                  <input type="email" class="form-control" placeholder="Email" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <textarea class="form-control" id="" cols="30" rows="10"
                    placeholder="Write your message here."></textarea>
                </div>
              </div>
    
              <div class="form-group row">
                <div class="col-md-6">
    
                  <input type="submit" class="btn btn-primary" value="Send Message" />
                </div>
              </div>
    
            </form>
          </div>
        </div>
      </div>
    </div>


        </div>
        );
    }