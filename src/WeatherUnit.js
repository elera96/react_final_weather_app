import React from "react";
import './WeatherUnit.css'


export default function WeatherUnit (props) {

console.log(props);
    return (

        <div>
            <p className="current-temperature-total" >
            <span className="current-temperature"> {props.celcius.temperature}
            <span className="unit">°C</span>
            </span>
            <div className="weather-description text-capitalize" >{props.celcius.description}</div>
            </p>
        </div>
    )
  }
 