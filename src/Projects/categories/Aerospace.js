import React from 'react';
import ridoo  from '../../images/ridoo.jpeg';

export default function Aerospace(){
    return(
        <div>
             <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
             <div class="image" style={{ backgroundImage: `url(${ridoo})` }} data-scrollax=" properties: { translateY: '-20%'}"></div>
            <div class="text">
              <h4 class="subheading">Aerospace & Logistics</h4>
              <h2 class="heading"><a href="portfolio.html">Ridoo</a></h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <p><a href="portfolio.html" class="btn btn-primary px-4">View Portfolio</a></p>
            </div>
          </div>
        </div>
        );
    }