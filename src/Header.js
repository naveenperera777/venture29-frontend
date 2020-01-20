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
				  				<a href="mailto:support@colorlib.com">mtjglobal@gmail.com</a>				
				  			</div>
				  		</div>			  					
		  			</div>
				</div>
			    <div class="container main-menu">
			    	<div class="row align-items-center justify-content-between d-flex">
				      <div id="logo">
				        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
				      </div>
				      <nav id="nav-menu-container">
				        <ul class="nav-menu">
				          <li><Link to="/">Home</Link></li>
				          <li><Link to="/about">About</Link></li>
						  <li><Link to="/service">Service</Link></li>
				          {/* <li><a href="services.html">Service</a></li> */}
				          <li><a href="projects.html">Projects</a></li>
				          <li class="menu-has-children"><a href="">Blog</a>
				            <ul>
				              <li><a href="blog-home.html">Blog Home</a></li>
				              <li><a href="blog-single.html">Blog Single</a></li>
				            </ul>
				          </li>						          
				          <li><a href="contact.html">Contact</a></li>
			              <li><a href="elements.html">Elements</a></li>
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