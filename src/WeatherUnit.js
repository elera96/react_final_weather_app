import React from "react";

export default function WeatherUnit (props) {


    return (

        <div>
            <p className="current-temperature-total" >
            <span className="current-temperature"> {props.celcius}
            <span className="unit">°C</span>
            </span>
            </p>
        </div>
    )
  }
 