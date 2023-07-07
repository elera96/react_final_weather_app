import React, { useState } from "react";
import axios from "axios";
import './WeatherForecast.css';
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props) {

const [loaded, SetLoaded] = useState(false);
const [forecast, SetForecast] = useState(null);

function handleResponse (response) {
    SetForecast(response.data.daily);
    SetLoaded (true);

}

 if (loaded) {  
return (
    <div className="row">
        <div className=" weatherForecast col">
        <WeatherForecastDay data={forecast[0]} icon={props.icon} />
        </div>
    </div>
)
}
else {

    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let ApiKey = "3406ab238fdae547792f64e3d236d615";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`; 
 
    axios.get(ApiUrl).then(handleResponse);
 

return null;

}

}