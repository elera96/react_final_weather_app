import React from "react";
import FormattedDate from "./FormattedDate";
import './Weather.css';
import WeatherUnit from './WeatherUnit';



export default function WeatherInfo (props) {
return(

    <div>
          
     {/*current weather */}
       <div className="current-weather-box">
       <img src={props.information.icon} alt="icon"/>

       <h1 className="searched-city">{props.information.newcity}</h1>
       <p className="last_updated">Last tested:</p>
       <p className="date-and-time">
       <FormattedDate date={props.information.date}/>
        </p>
       <WeatherUnit celcius={props.information.temperature} />
      
   
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