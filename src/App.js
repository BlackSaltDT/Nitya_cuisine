import React from 'react';
 import './App.css';
 import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
 import Home from './pages/home';
import About from './pages/about';
import Chefs from './pages/chefs';
import Contact from './pages/contact';
import Events from './pages/events';
import Gallery from './pages/gallery';
import Menu from './pages/menu';

 export default  function App() {

   return(
    <Router>
      <Switch>
        <Route path ="/menu" component = {Menu}/>
        <Route path ="/gallery" component = {Gallery}/>
        <Route path ="/events" component = {Events}/>
        <Route path ="/contact" component = {Contact}/>
        <Route path ="/chefs" component = {Chefs}/>
        <Route path ="/about" component = {About}/>
        <Route path ="/" component = {Home}/>

      </Switch>

      
    
    
    </Router>
  );
 }