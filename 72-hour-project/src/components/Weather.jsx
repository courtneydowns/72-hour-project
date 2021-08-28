import React, { useState, useEffect } from "react";

const Weather = (props) => {
  const [weather, setWeather] = useState([]);

  let baseURL = "http://api.openweathermap.org/data/2.5/weather";
  const apiKey = "5e83059946e745acc5dc56ddaa2d3f10";

  const handlePropsChange = async () => {
    const response = await fetch(
      `${baseURL}?lat=${props.location.coords.latitude}&lon=${props.location.coords.longitude}&appid=${apiKey}`
    );

    console.log(
      `${baseURL}?lat=${props.location.coords.latitude}&lon=${props.location.coords.longitude}&appid=${apiKey}`
    );

    // const data = await response.json();
    const data = await response.json();
    console.log(data.weather[0]);
    console.log(data.main.temp);
    setWeather(data.weather[0].description);
  };

  useEffect(() => {
    if (props.location?.coords?.latitude && props.location?.coords?.longitude) {
      handlePropsChange();
    }
  }, [props.location]);

  return (
    <div>
      <h1>Local Weather Forecast</h1>
      <p>The current weather is {weather}</p>
    </div>
  );
};

export default Weather;