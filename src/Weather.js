import React,{useState} from "react";
import axios from "axios";
import WeatherInfo from "./Weatherinfo"
import WeatherForecast  from "./WeatherForecast"
import "./Weather.css";

export default function Weather(props){
    
    const[weatherData, setWeatherData]=useState({loaded: false});
    const[city, setCity]=useState(props.defaultCity);
    function handleResponse(response){

        setWeatherData({
            loaded:true,
            temperature:response.data.main.temp,
            city:response.data.name,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            icon:response.data.weather[0].icon,
            description :response.data.weather[0].description,
date: new Date(response.data.dt*1000),
        });

    }


function search(){ 
    const apiKey="88d7a29d1281943cbe90709f76f800db"
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    }


function handleSubmit(event){
        event.preventDefault();
        search();
    }

function handleChangeCity(event){
    setCity(event.target.value);
}

    if(weatherData.loaded){
    
return( 
<div className="Weather">
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9">
        <input 
        type="search" 
        placeholder="Search for a city..."
        className="form-control"
        autoFocus="on"
        onChange={handleChangeCity}/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search"className="btn btn-primary" />
    
    </div>
    </div>
    </form>
    <WeatherInfo data={weatherData} />
    <WeatherForecast city={weatherData.city} />
</div>
);
}else{
  search();
return "Loading...";
}
}