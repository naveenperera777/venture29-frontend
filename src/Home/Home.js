import React from 'react';
import HomeVideo from './HomeVideo.js';
import Statistics from './Statistics';
import Projects from './Projects';
import Feedback from './Feedback.js';
import Services from './Services.js';
import Investor from './Investor.js'

export default function Home(){
    return(
        <div>
		<HomeVideo />		

			<Services />
			<Investor />
			<Projects />
			<Statistics />
			<Feedback />

        </div>
        );
    }