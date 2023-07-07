import React from "react";
import FormattedDate from "./FormattedDate";
import './WeatherInfo.css';
import WeatherUnit from './WeatherUnit';
import WeatherForecast from "./WeatherForecast";



export default function WeatherInfo (props) {
return(

    <div>
          
     {/*current weather */}
       <div className="current-weather-box">
       <img src={props.information.icon} alt="icon"/>

       <h1 className="searched-city">{props.information.newcity}</h1>
       <p className="last_updated">Last updated:</p>
       <p className="date-and-time">
       <FormattedDate date={props.information.date}/>
        </p>
       <WeatherUnit celcius={props.information.temperature} />
      
  
       <ul>
       <li className="weather-description text-capitalize" >{props.information.description}</li>
   
       </ul>
       <WeatherForecast icon={props.information.icon} coordinates={props.information.coordinates}/>
        
   </div>
   <div className="impressum">
     Open-source code by Laura on <a href="https://github.com/elera96/react_final_weather_app?" >Github</a>
   </div>
   </div>

)

}