import React from "react";
import FormattedDate from "./FormattedDate";
import './Weather.css';


export default function WeatherInfo (props) {

return(

    <div>
          
     {/*current weather */}
       <div className="current-weather-box">
       <h1 className="searched-city">{props.information.newcity}</h1>
       <p className="last_updated">Last tested:</p>
       <p className="date-and-time">
       <FormattedDate date={props.information.date}/>
     </p>
      <p className="current-temperature-total" >
          <span className="current-temperature"> {props.information.temperature}°C
       </span>
       </p>
   
       <hr/>
       <ul>
       <li className="weather-description text-capitalize" >{props.information.description}</li>
   
       </ul>
    
       <div className="weatherForecast"></div> 
   </div>
   <div className="impressum">
     Open-source code by Laura on <a href="https://github.com/elera96/Vanilla_Weather_App" >Github</a>
   </div>
   </div>

)

}