import React, { useState } from 'react';
import Result from './Result';
import Search from './Search';
import axios from 'axios';
import Recentdata from './Recentdata';

const getLocationWeather = (setLat, setLon, setLoading, fetchWeatherData) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        setLat(res.coords.latitude);
        setLon(res.coords.longitude);
        setLoading(true);
        fetchWeatherData(res.coords.latitude, res.coords.longitude);
      },
      (err) => {
        console.log(err);
      }
    );
  } else {
    console.log('Geolocation is not supported');
  }
};

const Weather = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [recent, setRecent] = useState([]);



  const fetchWeatherData = (latitude, longitude, cityName = null) => {
    const url = cityName
      ? `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3a4cc46f2a13413240e17078399add63`
      : `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=3a4cc46f2a13413240e17078399add63`;

    axios
      .get(url)
      .then((res) => {
        setCity(res.data.name);
        setWeatherData(res.data);
        setLoading(false);
        addRecentHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const citySearchHandler = (e) => {
    e.preventDefault();
    fetchWeatherData(null, null, city);
  };

  const addRecentHandler = () => {
    const updatedRecent = [...recent, { city, lat, lon }];
    setRecent(updatedRecent);
  };

  const dataResearchHandler = (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude);
    fetchWeatherData(latitude, longitude);
  };

  const dataChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'city') {
      setCity(value);
    }
  };

  return (
    <div>
      <Search
        change={dataChangeHandler}
        lat={lat}
        lon={lon}
        city={city}
        location={() => getLocationWeather(setLat, setLon, setLoading, fetchWeatherData)}
        search={fetchWeatherData}
        citysearch={citySearchHandler}
      />
      <Result loading={loading} weatherdata={weatherdata} />
      <Recentdata recent={recent} research={dataResearchHandler} />
    </div>
  );
};

export default Weather;
