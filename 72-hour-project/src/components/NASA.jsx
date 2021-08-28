import React, { useState, useEffect } from "react";
import './NASA.css';
import { Card, CardBody, CardText, CardImg, Button, Row, Col, CardTitle } from "reactstrap";

const NASA = (props) => {
    
console.log(props.location)

    const baseURL = `https://api.nasa.gov/planetary/earth/assets`;
    const key = `KTatox3u1ypx0L1rspOXjF9CjVu4Az1MHE0mdCbj`;
    
    const [nasaUrl, setNasaUrl] = useState("");
    
    // const [image, setImage] = useState(null);
    
    
    const fetchURL = async() => {
        console.log(props.location.coords)
            // const {latitude, longitude} = props.location.coords;

            // const response = await fetch(`${baseURL}?lon=${props.location.coords.longitude}&lat=${props.location.coords.latitude}&date=2021-08-22&dim=0.10&api_key=${key}`);
            // const data = await response.json();
            // console.log(data);
            fetch(`${baseURL}?lon=${props.location.coords.longitude}&lat=${props.location.coords.latitude}&date=2021-08-22&dim=0.10&api_key=${key}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setNasaUrl(data.url)
            })
  

    };


    useEffect(() => {
        if (props.location.coords?.latitude && props.location.coords?.longitude) {
            fetchURL();
          }
    }, [props.location]);
    return(
        <div>
            <Row>
                <Col>   
                    <center>
                        <h3 className="nasaHeader">Satellite View</h3>
                        <img src={nasaUrl} alt="satellite view" className="NasaImg" />
                    </center>
                </Col>
            </Row>
        </div>
    );
}
export default NASA;