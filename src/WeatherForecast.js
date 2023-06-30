import React from "react";
import './WeatherForecast.css';

export default function WeatherForecast (props) {

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
        <div className=" weatherForecast col">
        <div className="WeatherForecast-day">Thu </div>
        <img src={props.icon} alt="weather-icon" className="weatherForecast-icon"/>
        <div>
        <span className="WeatherForecast-temperature-max">20 </span>
        <span className="WeatherForecast-temperature-min">10 </span>
        </div>
        </div>
        <div className=" weatherForecast col">
        <div className="WeatherForecast-day">Thu </div>
        <img src={props.icon} alt="weather-icon" className="weatherForecast-icon"/>
        <div>
        <span className="WeatherForecast-temperature-max">20 </span>
        <span className="WeatherForecast-temperature-min">10 </span>
        </div>
        </div>
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