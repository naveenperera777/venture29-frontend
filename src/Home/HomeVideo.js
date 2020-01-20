import React from 'react';
  
export default function HomeVideo(){
    return(
        <div>
            <div class="vid">
		<h1>The Future is Here</h1> 

		<div class="vid-container">

		<video loop="true" autoplay="autoplay" controls="controls" id="vid" muted>
         <source type="video/mp4" src="https://mdbootstrap.com/img/video/Sail-Away.mp4"></source>
		</video>
		</div>

		</div>
		</div>
    )
}