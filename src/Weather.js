import React, { useState } from "react";
import axios from "axios";
import './Weather.css';


export default function Weather () {

    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    const [description, setDescription] = useState(null);

    function handleResponse (response) {
       
    let currentTemperature = Math.round(response.data.main.temp);
    let currentWeatherDescription = response.data.weather[0].description;
    setTemperature (currentTemperature);
    setDescription (currentWeatherDescription);
    setReady(true);
    } 

    if (ready){
        return (
            <div className="App container-box" id="weather-app">
            
            
             {/*search bar form */}
            
                <form id="search-form">
                  <div className="form-group row">
                    <input type="text" className="search-city col-9" id="enteredCity"  placeholder="Search for my city 🔎" />
                    <input type="submit"
                    value="search"
                    className="col-6 location-search-button" />
                  </div>
                </form>
            
            
            
              <button className="current-location-btn col-3" >
              Search for Current Location 
              </button>
            
              {/*current weather */}
                <div className="current-weather-box">
                <h1 className="searched-city">Munich</h1>
                <p className="last_updated">Last updated:</p>
                <p className="date-and-time">
                  <span className="date" > 23.03.23 </span>
                
                <span className="time" id="current-time">04:04 </span>
              </p>
               <p className="current-temperature-total" >
                   <span className="current-temperature"> {temperature}°C
                </span>
                </p>
            
                <hr/>
                <ul>
                <li className="weather-description" >{description}</li>
            
                </ul>
            
                <div className="weatherForecast"></div> 
            </div>
            <div className="impressum">
              Open-source code by Laura on <a href="https://github.com/elera96/Vanilla_Weather_App" >Github</a>
            </div>
            </div>)

     }
    else{
    let city = "Munich";
    const ApiKey = "3406ab238fdae547792f64e3d236d615";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
    return("loading...")
    }    
    

}


