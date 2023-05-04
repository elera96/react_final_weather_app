import React from "react";
import axios from "axios";


export default function Weather () {


    function handleResponse (response) {
       
    let currentTemperature = response.data.main.temp;
    let currentWeatherDescription = response.data.weather[0].description;
        
    console.log(Math.round(currentTemperature));
    console.log(currentWeatherDescription);
    

    }
    
    let city = "Munich";
    const ApiKey = "3406ab238fdae547792f64e3d236d615";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
    


}


