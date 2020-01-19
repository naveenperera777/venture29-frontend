import React from 'react';
import HomeVideo from './HomeVideo.js';
import Statistics from './Statistics';
import Projects from './Projects';
import Feedback from './Feedback.js';
import Services from './Services.js';
import Investor from './Investor.js'

export default function Home(){
    return(
        <div>
		<HomeVideo />		
		
        {/* <section class="banner-area relative" id="home">
				<div class="overlay overlay-bg"></div>
				<div class="container">
					<div class="row  d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">

							<h6 class="text-uppercase" class="text-white">Don’t look further, here is the key</h6>
							<h1 class="text-white">
								Venture29			
							</h1>
							<p class="text-white">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <span></span> dolore magna aliqua. Ut enim ad minim.  sed do eiusmod tempor incididunt.
							</p>
							<a href="#" class="primary-btn header-btn text-uppercase">Get Started</a>
						</div>												
					</div>
				</div>
			</section> */}


			<Services />
			<Investor />
			<Projects />
			<Statistics />
			<Feedback />

			{/* <!-- End banner Area --> */}

      {/* <!-- Start cat Area --> */}
			{/* <section class="cat-area section-gap" id="feature">
				<div class="container">							
					<div class="row">
						<div class="col-lg-4">	
							<div class="single-cat">
								<a href="#" class="hb-sm-margin mx-auto d-block"><span class="hb hb-sm inv hb-facebook-inv"><span class="lnr lnr-magic-wand"></span></span></a>
								<h4 class="mb-20">Maintenance</h4>
								<p>
									inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.
								</p>
							</div>															
						</div>
						<div class="col-lg-4">	
							<div class="single-cat">
								<a href="#" class="hb-sm-margin mx-auto d-block"><span class="hb hb-sm inv hb-facebook-inv"><span class="lnr lnr-rocket"></span></span></a>
								<h4 class="mt-40 mb-20">Residental Service</h4>
								<p>
									inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.
								</p>
							</div>															
						</div>
						<div class="col-lg-4">
							<div class="single-cat">
								<a href="#" class="hb-sm-margin mx-auto d-block"><span class="hb hb-sm inv hb-facebook-inv"><span class="lnr lnr-bug"></span></span></a>
								<h4 class="mt-40 mb-20">Commercial Service</h4>
								<p>
									inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.
								</p>
							</div>							
						</div>
					</div>
				</div>	
			</section>
			 */}
			{/* <!-- End cat Area -->	 */}

      {/* <!-- Start home-about Area --> */}
			{/* <section class="home-about-area section-gap" id="about">
				<div class="container">
					<div class="row justify-content-center align-items-center">
						<div class="col-lg-8 col-md-12 home-about-left">
							<h6>Brand new app to blow your mind</h6>
							<h1>
								<p>We’ve made a life </p>
								that will change you
							</h1>
							<p class="sub">We are here to listen from you deliver exellence</p>
							<p class="pb-20">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
							</p>
							<a class="primary-btn" href="#">Get Started Now</a>
						</div>
						<div class="col-lg-4 col-md-12 home-about-right relative">
							<form class="form-wrap" action="#">
								<h4 class="text-white pb-20">Request a Quote</h4>
								<div class="form-select" id="service-select">
									<select>
										<option value="1">Select Service</option>
										<option value="2">Service One</option>
										<option value="3">Service Two</option>
										<option value="4">Service Three</option>
										<option value="5">Service Four</option>
									</select>
								</div>								
								<input type="text" class="form-control" placeholder="name" />
								<input type="phone" class="form-control" placeholder="Phone Number" />
								<input type="email" class="form-control" placeholder="Email Address" />
								<textarea name="message" id="" cols="30" rows="5" placeholder="Message" class="form-control"></textarea>
								<button class="primary-btn">Request Free Quote</button>
							</form>
						</div>
					</div>
				</div>	
			</section>

			 */}
        </div>
        );
    }