import React from 'react';
import {Link} from "react-router-dom";
import pickk  from '../../Images/pickk.jpeg';

export default function Social(){
    return(
        <div>
            <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
          <div class="image" style={{ backgroundImage: `url(${pickk})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text order-1">
              <h4 class="subheading">Social Networking</h4>
              <h2 class="heading">Pickk</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/pickk"><button class="btn btn-primary px-4">View Portfolio</button></Link>  
            </div>
          </div>
        </div>
        );
    }