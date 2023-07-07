import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
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
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            newcity: response.data.name,
            coordinates: response.data.coord,

        });
    } 

   

        function search (){

            const ApiKey = "3406ab238fdae547792f64e3d236d615";
            let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
            axios.get(ApiUrl).then(handleResponse);


        }

        function handleSubmit (event) {
            event.preventDefault();
            search();
        }

        function handleCityChange (event) {
            setCity(event.target.value);
    

        }
        if (weatherData.ready){
        return (
        <div className="container-box container">
            
             {/*search bar form */}
   
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <input type="text" className="search-city col-7"  autofocus="on" placeholder="Search for my city"  onChange={handleCityChange}/>
                  <input type="submit"
                  value="search"
                  className="col-4 location-search-button"/>
                 </div>
             </form>
 
             <WeatherInfo information={weatherData}/>
         
        </div>)

     }
    else{
    search();
    return("loading...")
    
    }    
    

}


