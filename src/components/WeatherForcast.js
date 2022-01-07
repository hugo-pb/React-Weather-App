import React from "react";
import WeatherIcon from "./WeatherIcon";
import "../styles/WeatherForecast.css"
export default function WeatherForcast() {
  return (
    <div className="WeatherForcast row">
      <div className="col">
        <div className="WeatherForcast-day">Thu</div>
        <WeatherIcon code="01d" size={30} />
        <div className="WeatherForcast-temperature">
          {" "}
          <span className="WeatherForecast-max">19°</span>
          <span className="WeatherForcast-min">10°</span>
        </div>
      </div>
    </div>
  );
}
