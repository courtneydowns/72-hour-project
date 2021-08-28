import React, { useState, useEffect } from "react";
import { Card, CardBody, CardText, CardImg, Button, Row, Col, CardTitle, Container } from "reactstrap";

const Weather = (props) => {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState([]);
  const [convert, setConvert] = useState("imperial");
  const [unit, setUnit] = useState("F");

  let baseURL = "http://api.openweathermap.org/data/2.5/weather";
  const apiKey = "5e83059946e745acc5dc56ddaa2d3f10";

  const handlePropsChange = async () => {
    const response = await fetch(
      `${baseURL}?lat=${props.location.coords.latitude}&lon=${props.location.coords.longitude}&appid=${apiKey}&units=${convert}`
    );

    console.log(
      `${baseURL}?lat=${props.location.coords.latitude}&lon=${props.location.coords.longitude}&appid=${apiKey}&units=${convert}`
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

  const handleConversion = (e) => {
    if(convert === "imperial"){
      setConvert("metric");
      setUnit("F");
    } else if (convert === "metric"){
      setConvert("imperial");
      setUnit("C");
    } else {
      console.log("it ain't happening")
    }
    handlePropsChange();
  }

  return (
    <div>
      <Container>
      <Row>
        <Col>
          <center>
            <Card style={{}
            } body inverse color="info">
                <CardBody>
                  <CardTitle tag="h3" color="#3C4999">Today's Weather</CardTitle>
                  <CardText>Today is {temp} degrees {unit} with {weather}.</CardText>
                  <Button onClick={handleConversion}>Convert</Button>
                </CardBody>
            </Card>
          </center>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Weather;