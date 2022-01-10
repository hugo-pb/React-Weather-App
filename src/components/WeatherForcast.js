import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "../styles/WeatherForecast.css";
import axios from "axios";
export default function WeatherForcast(props) {
  const [forcast, setForcast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(r) {
    setForcast(r.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForcast row">
        <div className="col">
          <div className="WeatherForcast-day">Thu</div>
          <WeatherIcon code="01d" size={30} />
          <div className="WeatherForcast-temperature">
            {" "}
            <span className="WeatherForecast-max">
              {Math.round(forcast[0].temp.max)}°
            </span>
            <span className="WeatherForcast-min">
              {Math.round(forcast[0].temp.min)}°
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c69faf9d2df6cf97f08634b08792a39d";
    let lon = props.lon;
    let lat = props.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
