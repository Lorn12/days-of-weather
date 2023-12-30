import React from "react";

//SHOWS ADDITIONAL WEATHER DETAILS (HUMIDITY, WIND, ETC.)___________________________________________________________________
function WeatherDetails({ data }) {
  return (
    <div>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default WeatherDetails;
