import React from 'react';
import Grabyt from '../../Images/vibe-clubs-logo.jpeg'
import Seaeden from '../../Images/seaeden.jpeg';
import {Link} from "react-router-dom";

export default function Hospitality(){
    return(
        <div>
             <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
             <div class="image" style={{ backgroundImage: `url(${Grabyt})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text order-1">
              <h4 class="subheading">Hospitality</h4>
              <h2 class="heading">Vibe Clubs</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/vibe-clubs"><button class="btn btn-primary px-4">View Portfolio</button></Link> 
            </div>
          </div>

          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
             <div class="image" style={{ backgroundImage: `url(${Seaeden})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text order-1">
              <h4 class="subheading">Hospitality</h4>
              <h2 class="heading">Seaeden</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <Link to="/projects/seaeden"><button class="btn btn-primary px-4">View Portfolio</button></Link> 
            </div>
          </div>
        </div>
        );
    }