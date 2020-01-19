import React from 'react';
  
export default function Projects(){
    return(
        <div>
    	<section class="project-area section-gap" id="project">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-8 pb-30 header-text text-center">
							<h1 class="mb-10">Latest Finished Projects</h1>
							<p>
								Wide range of Tech and Non-Tech projects
							</p>
						</div>
					</div>						
					<div class="row">
						<div class="col-lg-8 col-md-8">
							<a href="img/agrimode.png" class="img-gal">
								<img class="img-fluid single-project" src="img/agrimode.png" alt=""  />
							</a>	
						</div>
						<div class="col-lg-4 col-md-4">
                        <div class="w-75 p-3">
                        <a href="img/p2.jpg" class="img-gal">
								<img class="img-fluid single-project" src="img/p2.jpg" alt="" />
							</a>
                        </div>
							
						</div>
                        </div>
                        <div class="row">
						<div class="col-lg-6 col-md-6">
							<a href="img/p3.jpg" class="img-gal">
								<img class="img-fluid single-project" src="img/p3.jpg" alt="" />
							</a>	
						</div>
						<div class="col-lg-6 col-md-6">
							<a href="img/p4.jpg" class="img-gal">
								<img class="img-fluid single-project" src="img/p4.jpg" alt="" />
							</a>	
						</div>		
					</div>
				</div>	
			</section>
        </div>
    )
}