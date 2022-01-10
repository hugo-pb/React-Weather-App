import React, { useState } from "react";
import "../styles/Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] =useState(props.defaultCity)
  function handleResponse(r) {
    setWeatherData({
      ready: true,
      temperature: r.data.main.temp,
      humidity: r.data.main.humidity,
      wind: r.data.wind.speed,
      city: r.data.name,
      description: r.data.weather[0].description,
      date: new Date(r.data.dt * 1000),
        feels: r.data.main.feels_like,
      icon: r.data.weather[0].icon,
      lon: r.data.coord.lon,
lat: r.data.coord.lat,
    });
    }
   function search(){
        const apiKey = "c69faf9d2df6cf97f08634b08792a39d";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
   }

    function handleSubmit(e) {
        e.preventDefault()
       search()
    }
  if (weatherData.ready) {
     
    
      
      return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a City..."
                className="form-control"
                              autoFocus="on"
                              onChange={e => setCity(e.target.value)}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
            </form>
            <WeatherInfo data={weatherData} />
          <WeatherForcast lon={weatherData.lon} lat= {weatherData.lat} />
      </div>
    );
  }else {
      search();

    return <p> loading.. </p>;
  }
}
