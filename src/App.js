import React from 'react';
import { HashRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home/Home.js';
import About from './About/Home';
import Services from './Services/Home.js';
import Projects from './Projects/Home.js'
import ContactUs from './Contact/Home.js';
import AgriMode from './Projects/Brands/AgriMode/AgriMode.js';
import Pickk from './Projects/Brands/Pickk/Pickk.js';
import Ridoo from './Projects/Brands/Ridoo/Ridoo.js';
import Grabyt from './Projects/Brands/Grabyt/grabyt.js';
import VibeClubs from './Projects/Brands/Vibe/vibe-clubs.js';
import Fetchyt from './Projects/Brands/Fetchyt/fetchyt.js';
import AirXoom from './Projects/Brands/AirXoom/AirXoom.js';
import UnitedCars from './Projects/Brands/UnitedCars/united-cars.js';
import Eevolution from './Projects/Brands/Eevolution/Eevolution.js';
import Seaeden from './Projects/Brands/Seaeden/seaeden.js';

function App() { 

  return (
    <Router>
    <Switch> 
    <div className="App">
    
      <Header/>
      <ScrollToTop>
      <Route exact path="/"  component={Home} />
     <Route path="/about"  component={About} />
     <Route path="/services"  component={Services} />
     <Route exact path="/projects"  component={Projects} />
     <Route exact path="/contact"  component={ContactUs} />
     <Route path="/projects/agrimode"  component={AgriMode} />
     <Route path="/projects/pickk"  component={Pickk} />
     <Route path="/projects/ridoo"  component={Ridoo} />
     <Route path="/projects/grabyt"  component={Grabyt} />
     <Route path="/projects/vibe-clubs"  component={VibeClubs} />
     <Route path="/projects/fetchyt"  component={Fetchyt} />
     <Route path="/projects/airxoom"  component={AirXoom} />
     <Route path="/projects/united-car-center"  component={UnitedCars} />
     <Route path="/projects/eevolution"  component={Eevolution} />
     <Route path="/projects/seaeden"  component={Seaeden} />

      </ScrollToTop>

     <Footer />     
    
     </div>
     </Switch>   

     </Router>
  );
}

export default App;
