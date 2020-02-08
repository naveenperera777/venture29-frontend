import React, { useState, useEffect } from "react";
import Banner from './Banner.js';
import Introduction from './Introduction.js';
import Agriculture from './categories/Agriculture.js';
import Business from './categories/Business.js';
import Social from './categories/Social';
import Aerospace from './categories/Aerospace.js';
import Hospitality from './categories/Hospitality.js';

export default function ProjectsHome(){
  const [status, setStatus] = useState({"all":"active"})
  const [type, setType] = useState("all");

  function buttonStatusHandler(event){
    let category = event.target.id
    setStatus({[category] : "active"});
    setType(event.target.id);
  }

  function getProjectsByCategory(category){
    switch(category){
      case "all":
        return(
          <div>
          <Agriculture />
          <Business />
          <Aerospace />
          <Social />
          <Hospitality />
          </div>          
        )
      case "business":
        return <Business />;
        break;
      case "agriculture":
        return <Agriculture />;
        break;
      case "social":
        return <Social />
        break;
      case "aerospace":
        return <Aerospace />
        break;
      case "hospitality":
        return <Hospitality />
      default:
        return <h1>No Projects Found!</h1>  
    }
  }

  console.log("type",type,"Status",status);

    return(
        <div>
        <Banner /> 
      <section class="ftco-section">
      <div class="container">
        <Introduction />
         <div class="row justify-content-center mb-5" data-aos="fade-up">
          <div id="filters" class="filters text-center button-group col-md-7">
            <button id = "all" className={`btn btn-primary ${status.all}`} onClick={buttonStatusHandler}>All</button>
            <button id = "aerospace" className={`btn btn-primary ${status.aerospace}`} onClick={buttonStatusHandler}>Aerospace & Logistics</button>
            <button id = "business" className={`btn btn-primary ${status.business}`} onClick={buttonStatusHandler}>Business & Consumer</button>
            <button id = "agriculture" className={`btn btn-primary ${status.agriculture}`} onClick={buttonStatusHandler}>Agriculture</button>
            <button id = "automotive" className={`btn btn-primary ${status.automotive}`} onClick={buttonStatusHandler}>Automotive</button>
            <button id = "food" className={`btn btn-primary ${status.food}`} onClick={buttonStatusHandler}>Food & Drinks</button>
            <button id = "hospitality" className={`btn btn-primary ${status.hospitality}`} onClick={buttonStatusHandler}>Hospitality</button>
            <button id = "social" className={`btn btn-primary ${status.social}`} onClick={buttonStatusHandler}>Social Networking</button>
          </div>
        </div> 

        {getProjectsByCategory(type)}

        <div class="row">
        
        </div>
      </div>
    </section>
         </div>
        );
    }