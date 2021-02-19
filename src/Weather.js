import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    
    const[weatherData, setWeatherData]=useState({loaded: false});
    function handleResponse(response){

        setWeatherData({
            loaded:true,
            temperature:response.data.main.temp,
            city:response.data.name,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            iconUrl:`https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
            description :response.data.weather[0].description,
date:"wednesday"
        });

    }
    if(weatherData.loaded){
    
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
<h1>{weatherData.city}</h1>
<ul><li>{weatherData.date}</li>
  <li className="text-capitalize">{weatherData.description}</li>
  </ul>

<div className="row mt-4">
    <div className="col-6">
      <div className="clearfix">
            <img 
            src={weatherData.iconUrl} 
            alt={weatherData.description} 
            className="float-left"
            />
<div className="float-left">
   <span className="temperature">{Math.round(weatherData.temperature)}</span>
   <span className="unit">°C</span> 
   </div>
   </div>
   </div>
   <div className="col-6">
       <ul>
       <li>Humidity: {weatherData.humidity}%</li>
       <li>Wind: {Math.round(weatherData.wind)} km/h</li>
       </ul>
   </div>
</div>
</div>
);
}else{
    const apiKey="88d7a29d1281943cbe90709f76f800db"
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);

return "Loading..."
}
}