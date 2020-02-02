import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Link,
	NavLink
  } from "react-router-dom";
  import { Route, Redirect } from "react-router";
  
export default function header(){
    return(
        <div>
               <div id="header" id="home" class="header">
		  		<div class="header-top">
		  			<div class="container">
				  		<div class="row">
				  			<div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
				  				<ul>
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li><a href="#"><i class="fa fa-behance"></i></a></li>
				  				</ul>
				  			</div>
				  			<div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
				  				<a href="tel:+880 012 3654 896">+880 012 3654 896</a>
				  				<a href="mtjglobal@gmail.com">mtjglobal@gmail.com</a>				
				  			</div>
				  		</div>			  					
		  			</div>
				</div>
			    <div class="container main-menu">
			    	<div class="row align-items-center justify-content-between d-flex">
				      <div id="logo">
						  <p class = "navlogo">venture29</p>
						  
				        {/* <a href="index.html"><img src="img/venture29.jpeg" alt="" title="" height="42" width="100"/></a> */}
				      </div>
				      <nav id="nav-menu-container">
				        <ul class="nav-menu">
				          <li><Link to="/">Home</Link></li>
				          <li><Link to="/about">About</Link></li>
						  <li><Link to="/services">Services</Link></li>
				          {/* <li><a href="services.html">Service</a></li> */}
				          <li><Link to="/projects">Projects</Link></li>
				          {/* <li class="menu-has-children"><a href="">Blog</a>
				            <ul>
				              <li><a href="blog-home.html">Blog Home</a></li>
				              <li><a href="blog-single.html">Blog Single</a></li>
				            </ul>
				          </li>						           */}
						  <li><Link to="/contact">Contact</Link></li>
			              {/* <li><a href="elements.html">Elements</a></li> */}
				        </ul>
						
				      </nav>
					  {/* <Route path="/" exact component={Home} />	    */}
			    	</div>
			    </div>
			  </div>
			  {/* <Route path="/about" component={About} />	    		 */}

        </div>
    )
}