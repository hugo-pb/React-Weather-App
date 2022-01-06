import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate data={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="flex">
              <WeatherIcon code= {props.data.icon} />
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(props.data.feels)}°C</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} Km/h</li>
            </ul>
          </div>
        </div>{" "}
      </div>
    );
}