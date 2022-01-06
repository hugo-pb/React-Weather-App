import React, { useState } from "react";
import "../styles/Weather.css";
export default function WeatherTemperature(props) {
  const [temp, setTemp] = useState("Fer");
  function showF(e) {
    e.preventDefault();
    setTemp("cel");
    return "hi";
  }
  function showC(e) {
    e.preventDefault();
    setTemp("Fer");
  }
  if (temp === "Fer") {
    return (
      <div>
        <span className="temperature">{Math.round(props.cel)} </span>
        <span className="unit">
          °C |
          <a href="/" onClick={showF}>
            {" "}
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(props.cel * 1.8 + 32)} </span>
        <span className="unit">
          <a href="/" onClick={showC}>
            {"      "}
            °C{" "}
          </a>
          | F
        </span>
      </div>
    );
  }
}
