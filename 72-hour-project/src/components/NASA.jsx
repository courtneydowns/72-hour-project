//import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';

const NASA = (props) => {

    const {latitude, longitude} = props.location;

    const baseURL = `https://api.nasa.gov/planetary/earth/imagery`;
    const key = `KTatox3u1ypx0L1rspOXjF9CjVu4Az1MHE0mdCbj`;

    //const [image, setImage] = useState("");

    const fetchURL = async() => {
        const response = await fetch(`${baseURL}?lon=${longitude}&lat=${latitude}&dim=0.10&api_key=${key}`);
        const data = await response.json();

        console.log(data);

        // let image = document.createElement('img');
        // image.src = `${baseURL}?lon=${longitude}&lat=${latitude}&dim=0.10&api_key=${key}`;
    };

    useEffect(() => {
        fetchURL();
    }, []);

    const displayContent = (image) => {
        fetchURL();
    }

    console.log("LAT: " + latitude);
    console.log("LONG: " + longitude);

    return(
        <div>
            <img src={`${baseURL}?lon=${longitude}&lat=${latitude}&dim=0.9&api_key=${key}`} alt="satellite" width="300" height="300" />
            {/* <img src={`${baseURL}?lon=41&lat=85&dim=0.9&api_key=${key}`} alt="satellite" width="300" height="300" /> */}
        </div>
    );
}
export default NASA;