import React from "react"

export default function FormatDate(props){
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
let date=props.date.getDate();
    let day=days[props.date.getDay()];
let hours =props.date.getHours();
if (hours <10){
    hours=`0${hours}`
}
let minutes=props.date.getMinutes();
if (minutes <10){
    minutes=`0${minutes}`
}
let month=months[props.date.getMonth()];

let year=props.date.getFullYear();

    return <div>{hours}:{minutes}<br />{day} {month} {date}, {year}  </div>;


}