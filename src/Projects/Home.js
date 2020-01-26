import React, { useState, useEffect } from "react";


export default function ProjectsHome(){
  const [fname, setFirstName] = useState("active");
  const [status, setStatus] = useState({
    // "all" : "active" ,
    // "web" : "" ,
    // "design"  : ""
  })

  function buttonStatusHandler(event){
    let category = event.target.id
    console.log("event",category);
    setStatus({[category] : "active"})
  }

  console.log("Status",status)

    return(
        <div>
        	<section class="banner-area relative" id="home">	
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								Projects				
							</h1>	
							{/* <p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="services.html"> Services</a></p> */}
						</div>	
					</div>
				</div>
			</section>
      <div class="row justify-content-center mb-5" data-aos="fade-up">
          <div id="filters" class="filters text-center button-group col-md-7">
            {/* <button className="btn btn-primary active" data-filter="*">All</button> */}
            {/* <button class="btn btn-primary" data-filter=".web">Web</button> */}

            <button id = "all" className={`btn btn-primary ${status.all}`} onClick={buttonStatusHandler}>All</button>
            <button id = "aerospace" className={`btn btn-primary ${status.aerospace}`} onClick={buttonStatusHandler}>Aerospace & Logistics</button>
            <button id = "business" className={`btn btn-primary ${status.business}`} onClick={buttonStatusHandler}>Business & Consumer</button>
            <button id = "agriculture" className={`btn btn-primary ${status.agriculture}`} onClick={buttonStatusHandler}>Agriculture</button>
            <button id = "automotive" className={`btn btn-primary ${status.automotive}`} onClick={buttonStatusHandler}>Automotive</button>
            <button id = "food" className={`btn btn-primary ${status.food}`} onClick={buttonStatusHandler}>Food & Drinks</button>
            <button id = "hospitality" className={`btn btn-primary ${status.hospitality}`} onClick={buttonStatusHandler}>Hospitality</button>
            <button id = "social" className={`btn btn-primary ${status.social}`} onClick={buttonStatusHandler}>Social Networking</button>


            {/* <button class="btn btn-primary" data-filter=".web">Web</button> */}
            {/* <button class="btn btn-primary" data-filter=".design">Design</button>
            <button class="btn btn-primary" data-filter=".brand">Brand</button> */}
          </div>
        </div> 
        </div>
        );
    }