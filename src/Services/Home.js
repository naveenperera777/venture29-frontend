import React from 'react';
import Banner from './Banner.js';
import ServiceList from './ServiceList.js';

export default function Home(){
    return(
        <div>
		<Banner />
        <ServiceList />
        </div>
        );
    }