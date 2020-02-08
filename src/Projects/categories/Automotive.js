import React from 'react';
import UnitedCars from "../../Images/unitedcars.jpeg";
import Eevolution from "../../Images/eevolution.jpeg";

import {Link} from "react-router-dom";

export default function Automotive(){
    return(
        <div>
             <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
             <div class="image" style={{ backgroundImage: `url(${UnitedCars})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text">
              <h4 class="subheading">Automotive &amp; Mobility</h4>
              <h2 class="heading">United Car Centre</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/united-car-center"><button class="btn btn-primary px-4">View Portfolio</button></Link> 
            </div>
          </div>

          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
             <div class="image" style={{ backgroundImage: `url(${Eevolution})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text">
              <h4 class="subheading">Automotive &amp; Mobility</h4>
              <h2 class="heading">EEVOLUZION</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/eevolution"><button class="btn btn-primary px-4">View Portfolio</button></Link> 
            </div>
          </div>

        </div>
        );
    }