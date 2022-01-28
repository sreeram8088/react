import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Calculator from "./Calculator/Calculator.jsx";
import Movies from "./Movies/Movies.jsx";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo.jsx";
import { Switch } from "react-router";

function App(){
  return(
   
     
       <Router>
       {/* <div className="Links">

       <Link to  ="/movies">Movies</Link><br/>
       <Link to  ="/calculotor">Calculator</Link><br/>
       <Link to  ="/lifecycledemo">LifeCycleDemo</Link><br/>

      </div>
      <hr/> */}
       <Route exact path ="/movies" Component={Movies}/> 
       <Route exact path ="/cals" Component={Calculator}/>
       <Route exact path ="/LifeCycleDemo" Component={LifeCycleDemo}/>
       </Router>
    
    
     
    
 
   
  );
}
export default App; 