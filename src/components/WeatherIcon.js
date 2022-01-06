import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
export default function WeatherIcon(props) {
    const defaults = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "03d": "PARTLY_CLOUDY_DAY",
      "03n": "PARTLY_CLOUDY_NIGHT",
      "04d": "CLOUDY",
      "04n": "CLOUDY",
      "09d": "SLEET",
      "09n": "SLEET",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "RAINY",
      "11n": "RAIN",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG",
    };
   
    return (
        <ReactAnimatedWeather
    icon={defaults[props.code]}
    color = "#1e1e1e" 
            size = {64}
    animate = 'true'
  />
);
}