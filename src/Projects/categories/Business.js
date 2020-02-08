import React from 'react';
import Grabyt from '../../Images/grabyt-logo.jpeg'
import Fetchyt from '../../Images/fetchyt-logo.jpeg'
import {Link} from "react-router-dom";

export default function Business(){
    return(
        <div>
             <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
             <div class="image" style={{ backgroundImage: `url(${Grabyt})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text order-1">
              <h4 class="subheading">Business & Consumer</h4>
              <h2 class="heading">Grabyt</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/grabyt"><button class="btn btn-primary px-4">View Portfolio</button></Link> 
            </div>
          </div>

          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
             <div class="image" style={{ backgroundImage: `url(${Fetchyt})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text order-1">
              <h4 class="subheading">Business & Consumer</h4>
              <h2 class="heading">Fetchyt</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/fetchyt"><button class="btn btn-primary px-4">View Portfolio</button></Link> 
            </div>
          </div>
        </div>
        );
    }