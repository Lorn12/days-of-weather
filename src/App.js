import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import axios from "axios";
import "./App.css";

//MAIN COMPONENT (MANAGES THE STATE AND API CALL)______________________________________________________________________
function App() {
  //STATES_____________________________________________________________________________________________________________
  const [weatherData, setWeatherData] = useState(null);

  //EVENTS_____________________________________________________________________________________________________________
  const handleSearch = (city) => {
    const apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      setWeatherData(response.data);
    });
  };
  //DISPLAY & COMPONENT INTEGRATIONS ____________________________________________________________________________________

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {weatherData && (
        <>
          <CurrentWeather data={weatherData} />
          <WeatherDetails data={weatherData} />
          <Forecast coordinates={weatherData.coord} />
        </>
      )}
    </div>
  );
}

export default App;
