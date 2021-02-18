import React from "react";
import "./Weather.css";

export default function Weather(){
return( <div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
        <input type="search" placeholder="Search for a city..."className="form-control"/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search"className="btn btn-primary" />
    
    </div>
    </div>
    </form>
<h1>Toronto</h1>
<ul><li>Wednesday 10:00</li>
<li>Scatterd Clouds</li></ul>

<div className="row mt-4">
    <div className="col-6">
      <div className="clearfix">
            <img 
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
            alt="scattered clouds" 
            className="float-left"
            />
<div className="float-left">
   <span className="temperature">-4</span>
   <span className="unit">°C</span> 
   </div>
   </div>
   </div>
   <div className="col-6">
       <ul><li>Precipitation 15%</li>
       <li>Humidity:98%</li>
       <li>Wind:13 km/h</li></ul>
   </div>
</div>
</div>
);
}