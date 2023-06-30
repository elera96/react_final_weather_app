import React from "react";
import axios from "axios";
import './WeatherForecast.css';

export default function WeatherForecast (props) {


function handleResponse (response) {

}

   let lon = props.coordinates.lon;
   let lat = props.coordinates.lat;
   let ApiKey = "3406ab238fdae547792f64e3d236d615";
   let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}`; 

   axios.get(ApiUrl).then(handleResponse);


return (

    <div className="row">
        <div className=" weatherForecast col">
        <div className="WeatherForecast-day">Thu </div>
        <img src={props.icon} alt="weather-icon" className="weatherForecast-icon"/>
        <div>
        <span className="WeatherForecast-temperature-max">20 </span>
        <span className="WeatherForecast-temperature-min">10 </span>
        </div>
        </div>
    </div>
)

}