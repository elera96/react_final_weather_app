import React, { useState } from "react";

import './Weather.css';

export default function WeatherUnit (props) {

    const [unit, setUnit] = useState("celcius");


    function convertToFahrenheit (event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelcius (event){
        event.preventDefault();
        setUnit("celcius");

    }

    if (unit == `celcius`) {

    return (

        <div>
            <p className="current-temperature-total" >
            <span className="current-temperature"> {props.celcius}
            <span className="unit">°C/<a href="/" onClick={convertToFahrenheit}>°F</a></span>
            </span>
            </p>
        </div>
    )
  }
  else {

    let fahrenheit = Math.round((props.celcius * 9/5) + 32 )
    return (

        <div>
            <p className="current-temperature-total" >
            <span className="current-temperature"> {fahrenheit}
            <span className="unit"><a href="/" onClick={convertToCelcius}>°C</a>/°F</span>
            </span>
            </p>
        </div>
    )


  }



}