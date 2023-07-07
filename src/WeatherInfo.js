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
       

       <h1 className="searched-city">{props.information.newcity}</h1>
       <p className="last_updated">Last updated:
       <FormattedDate date={props.information.date}/>
        </p>
       <div className="row temperature-information">
       <img src={props.information.icon} alt="icon" className="col-6"/>
       <span className="col-6"><WeatherUnit celcius={props.information} />
       </span>
       </div>
       
       
       
       
      
  
       
       <WeatherForecast icon={props.information.icon} coordinates={props.information.coordinates}/>
        
   </div>
   <div className="impressum">
     Open-source code by Laura on <a href="https://github.com/elera96/react_final_weather_app?" >Github</a>
   </div>
   </div>

)

}