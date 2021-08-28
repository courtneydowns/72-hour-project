import React, { useState, useEffect } from "react";
import { Card, CardBody, CardText, CardImg, Button } from "reactstrap";

const Weather = (props) => {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState([]);
  const [convert, setConvert] = useState("imperial");

  let baseURL = "http://api.openweathermap.org/data/2.5/weather";
  const apiKey = "5e83059946e745acc5dc56ddaa2d3f10";

  const handlePropsChange = async () => {
    const response = await fetch(
      `${baseURL}?lat=${props.location.coords.latitude}&lon=${props.location.coords.longitude}&appid=${apiKey}&units=${convert}`
    );

    console.log(
      `${baseURL}?lat=${props.location.coords.latitude}&lon=${props.location.coords.longitude}&appid=${apiKey}&units=imperial`
    );

    const data = await response.json();
    setWeather(data.weather[0].description);
    setTemp(data.main.temp);
  };

  useEffect(() => {
    if (props.location?.coords?.latitude && props.location?.coords?.longitude) {
      handlePropsChange();
    }
  }, [props.location]);

  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>Today is {temp} with {weather}</CardText>
          <Button onClick={() => setConvert ("imperial")}>convert</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Weather;