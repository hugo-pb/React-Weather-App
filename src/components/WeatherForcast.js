import React, { useState, useEffect } from "react";
import "../styles/WeatherForecast.css";
import ForcastDay from "./ForcastDay";
import axios from "axios";
export default function WeatherForcast(props) {
  const [forcast, setForcast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
  setLoaded(false)
  }, [props.lon]);

  function handleResponse(r) {
    setForcast(r.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForcast row">
        {forcast.map(function (dailyForcast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ForcastDay data={dailyForcast} />
              </div>
            );
          } else {return('')}
        })}
        
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
