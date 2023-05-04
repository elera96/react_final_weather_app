import React from "react";
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (



<div className="App container-box" id="weather-app">

<Weather />

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
       <span className="current-temperature"> 4°
    </span>
    </p>

    <hr/>
    <ul>
    <li className="weather-description" >sunny</li>

    </ul>

    <div className="weatherForecast"></div> 
</div>
<div className="impressum">
  Open-source code by Laura on <a href="https://github.com/elera96/Vanilla_Weather_App" >Github</a>
</div>
</div>
)
}


