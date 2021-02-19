import React from "react";
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
    <Weather defaultCity="Toronto"/>
    <div className="footer"><a href="https://github.com/mackenziehodge/react-final-project" className="code-link">
         Open Sourced Code {""}
      </a> 
       by <a href="https://www.petraits.org"> Mackenzie Hodge</a>
      </div>
    </div>
  );
}


