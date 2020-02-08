import React from 'react';
import agrimode  from '../../Images/agrilogo.png';
import {Link} from "react-router-dom";
  
export default function Agriculture(){
    return(
        <div>
            <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
        <div class="image" style={{ backgroundImage: `url(${agrimode})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text">
              <h4 class="subheading">Agriculture</h4>
              <h2 class="heading"><a href="portfolio.html">AgriMode</a></h2>
              <p>The all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/agrimode"><button class="btn btn-primary px-4">View Portfolio</button></Link>              
            </div>
          </div>
        </div>
        );
    }