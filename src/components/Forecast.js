import React, { useState, useEffect } from "react";
import axios from "axios";

//FETCHES WEEKLY FORECAST BASED ON THE COORDINATES______________________________________________________________________
function Forecast({ coordinates }) {
  // STATES_____________________________________________________________________________________________________________
  const [forecast, setForecast] = useState([]);

  //API CALL____________________________________________________
  useEffect(() => {
    const apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      setForecast(response.data.daily);
    });
  }, [coordinates]);

  //TIME CONVERSION ______________________________________________
  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(undefined, { weekday: "long" });
  };

  return (
    <div>
      <h2>Weekly Forecast</h2>
      <div className="forecast-container">
        {forecast.map(
          (day, index) =>
            index < 7 && ( // Display only the first 7 days
              <div key={index} className="forecast-day">
                <p>{formatDay(day.dt)}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                />
                <p>{day.weather[0].main}</p>
                <p>High: {Math.round(day.temp.max)}°C</p>
                <p>Low: {Math.round(day.temp.min)}°C</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Forecast;
