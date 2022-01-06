import React, { useState } from "react";
import "../styles/Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a City..."
                className="form-control"
                autoFocus="on"
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate data={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="flex">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Weather emoji"
              />{" "}
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feels)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }else {
    const apiKey = "c69faf9d2df6cf97f08634b08792a39d";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return <p> loading.. </p>;
  }
}
