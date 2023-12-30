import React from "react";

//DISPLAYS THE CURRENT WEATHER_________________________________________________________
function CurrentWeather({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.weather[0].description}</p>
      <p>{data.main.temp} °C</p>
      {/* Add more weather details as needed */}
    </div>
  );
}

export default CurrentWeather;
