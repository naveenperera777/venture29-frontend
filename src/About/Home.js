import React from 'react';
import Banner from './Banner.js';
import Testimonials from './Testimonials.js';
import WhoAreWe from './WhoAreWe.js';
import WhatWeDo from './WhatWeDo.js';

export default function Home(){
    return(
        <div>        	
			<Banner />	
            <WhoAreWe />
            <WhatWeDo />
            <Testimonials />
          

        </div>
    );
}