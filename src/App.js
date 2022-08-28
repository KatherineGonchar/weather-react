import React, { useState } from "react";
import './App.css';
import axios from 'axios';

function App() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      cityname: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=819d2830a6cec8ee668b535af2021283&units=metric`;
    axios.get(apiURL).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
      <form className="row mt-3" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
              type="search"
              className="col-8 form-control"
              placeholder="Enter a city.."
              onChange={updateCity}
          />
          <button type="Submit" className="col-4 btn btn-primary">
            Search
          </button>
        </div>
      </form>
  );

  if (loaded) {
    return (
        <div>
          {form}
          <ul className="list-group mt-4 mb-4">
            <li className="list-group-item">
              City: {weather.cityname}
            </li>
            <li className="list-group-item">
              Temperature: {Math.round(weather.temperature)}°C
            </li>
            <li className="list-group-item">
              Description: {weather.description}
            </li>
            <li className="list-group-item">Humidity: {weather.humidity}%</li>
            <li className="list-group-item">Wind: {weather.wind}km/h</li>
            <li className="list-group-item">
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
    );
  } else {
    return form;
  }
}

export default App;
