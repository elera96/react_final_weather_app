import React from "react";


export default function WeatherForecastDay (props) {

function minTemperature () {
let temperature = Math.round(props.data.temp.min); 
return temperature;

    }

function maxTemperature () {
    let temperature = Math.round(props.data.temp.max); 
    return temperature;
    
    }

function date () {

let date = new Date(props.data.dt *1000);
let day = date.getDay ();

let days = ["Sun", "Mon", " Tue", "Wed", "Thu", "Fri", "Sat", ]

return days[day]; 

} 

return (
<div>
    <div className="WeatherForecast-day">{date()} </div>
        <img src={props.icon} alt="weather-icon" className="weatherForecast-icon"/>
        <div>
        <span className="WeatherForecast-temperature-max"> {minTemperature()} </span>
        <span className="WeatherForecast-temperature-min">{maxTemperature()} </span>
    </div>
</div>
)

}