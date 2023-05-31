import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";



export default function Weather (props) {

    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultcity);

    function handleResponse (response) {
       
        let currentTemperature = Math.round(response.data.main.temp);
        let currentWeatherDescription = response.data.weather[0].description;
        setWeatherData ({
            ready: true,
            temperature: currentTemperature,
            description: currentWeatherDescription,
            date: new Date(response.data.dt * 1000),
            newcity: response.data.name,

        });
    } 

    if (weatherData.ready){

        function search (){

            const ApiKey = "3406ab238fdae547792f64e3d236d615";
            let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
            axios.get(ApiUrl).then(handleResponse);


        }

        function handleSubmit (event) {
            event.preventDefault();
            search(city);
        }

        function handleCityChange (event) {
            setCity(event.target.value);
    

        }

        return (
        <div className="App container-box">
            
             {/*search bar form */}
   
              <form id="search-form" onSubmit={handleSubmit}>
                <div className="form-group row">
                  <input type="text" className="search-city col-9" id="enteredCity"  placeholder="Search for my city 🔎"  onChange={handleCityChange}/>
                  <input type="submit"
                  value="search"
                  className="col-6 location-search-button"/>
                 </div>
             </form>

            <button className="current-location-btn col-3" >
            Search for Current Location 
             </button>
 
             <WeatherInfo information={weatherData}/>
        </div>)

     }
    else{
    return("loading...")
    }    
    

}


