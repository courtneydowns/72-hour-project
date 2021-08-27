import React, { useState, useEffect } from 'react';
//import React, { useEffect } from 'react';

const NASA = (props) => {
    const {latitude, longitude} = props.location;

    const baseURL = `https://api.nasa.gov/planetary/earth/imagery`;
    const key = `KTatox3u1ypx0L1rspOXjF9CjVu4Az1MHE0mdCbj`;

    const [nasaUrl, setNasaUrl] = useState("");

    const [image, setImage] = useState(null);


    const fetchURL = async() => {

        if (!latitude || !longitude) {
            return;
        }
        const response = await fetch(nasaUrl + key);
        const data = await response.json();

        setImage(nasaUrl.createObject(data));

        console.log(data);

    };

    useEffect(fetchURL, [nasaUrl]);

    const displayContent = () => {
        setNasaUrl(`${baseURL}?lon=${longitude}&lat=${latitude}&date=2021-08-22&dim=0.10&api_key=${key}`);
    }

    console.log("Latitude: " + latitude); //console.log latitude
    console.log("Longitude: " + longitude); //console.log longitude

    return(
        <div>
            {image ? (<img src={image} alt="" />) : null}
        </div>
    );
}
export default NASA;