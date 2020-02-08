import React from 'react';
import { HashRouter as Router, Switch, Route,Redirect } from "react-router-dom";
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
function App() {
  

  return (
    <Router>
    <Switch> 
    <div className="App">
    
      <Header/>
     <Route exact path="/"  component={Home} />
     <Route path="/about"  component={About} />
     <Route path="/services"  component={Services} />
     <Route exact path="/projects"  component={Projects} />
     <Route exact path="/contact"  component={ContactUs} />
     <Route path="/projects/agrimode"  component={AgriMode} />
     <Route path="/projects/pickk"  component={Pickk} />
     <Footer />
      
    
     </div>
     </Switch>   

     </Router>
  );
}

export default App;
