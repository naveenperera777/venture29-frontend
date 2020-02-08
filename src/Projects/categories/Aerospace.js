import React from 'react';
import Ridoo from "../../Images/ridoo-logo.jpg";
import {Link} from "react-router-dom";

export default function Aerospace(){
    return(
        <div>
             <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
             <div class="image" style={{ backgroundImage: `url(${Ridoo})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text">
              <h4 class="subheading">Aerospace & Logistics</h4>
              <h2 class="heading">Ridoo</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/ridoo"><button class="btn btn-primary px-4">View Portfolio</button></Link> 
            </div>
          </div>

          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
             <div class="image" style={{ backgroundImage: `url(${Ridoo})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text">
              <h4 class="subheading">Aerospace & Logistics</h4>
              <h2 class="heading">Ridoo</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/ridoo"><button class="btn btn-primary px-4">View Portfolio</button></Link> 
            </div>
          </div>
          
        </div>
        );
    }