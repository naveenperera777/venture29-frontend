import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home/Home.js';
import About from './About.js';
import Services from './Services/Home.js';
import Projects from './Projects/Home.js'
function App() {
  

  return (
    <Router>
    <Switch> 
    <div className="App">
    
      <Header/>
     <Route exact path="/"  component={Home} />
     <Route path="/about"  component={About} />
     <Route path="/services"  component={Services} />
     <Route path="/projects"  component={Projects} />
     <Footer />
      
    
     </div>
     </Switch>   

     </Router>
  );
}

export default App;
