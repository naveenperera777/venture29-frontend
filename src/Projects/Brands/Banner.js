import React from 'react';

export default function Banner(props){
	const header = props.heading;
	const css = props.cssClass;
    return(
        <div>
			<section class={`${css} relative`}>	
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								{header}
							</h1>	
						</div>	
					</div>
				</div>
			</section>
        </div>
        );
    }