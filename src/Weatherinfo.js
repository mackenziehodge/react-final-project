import React from "react";
import FormatDate from "./FormatDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
<ul>
    <li>
    <FormatDate date={props.data.date} />
    </li>
  </ul>

<div className="row mt-3">
    <div className="col-6">
       <div className="description text-capitalize">{props.data.description}
  </div>
      <div className="clearfix">
        <div className="float-left">
        <WeatherIcon code={props.data.icon}/>
        </div>
           
<div className="float-left">
  <WeatherTemperature  celsius={props.data.temperature}/>
   </div>
   </div>
   </div>
   <div className="weather-info col-6">
       <ul><li>Feels Like:{Math.round(props.data.feels)}°C</li>
       <li>Humidity: {props.data.humidity}%</li>
       <li>Wind: {Math.round(props.data.wind)} km/h</li>
       </ul>
   </div>
</div>
</div>);
}