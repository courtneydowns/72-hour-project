import React from 'react';

const NASA = (props) => {

    const {latitude, longitude} = props.location.coords;

    const baseURL = `https://api.nasa.gov/planetary/earth/imagery`;
    const key = `KTatox3u1ypx0L1rspOXjF9CjVu4Az1MHE0mdCbj`;

    fetch(`${baseURL}?lon=${longitude}&lat=${latitude}&dim=0.10&api_key=${key}`)
    .then(response => response.json())
    .then(json => displayContent(json));

    function displayContent(spaceImg) {

        console.log(spaceImg);

        let image = document.createElement('img');
        image.src = `${baseURL}?lon=${longitude}&lat=${latitude}&dim=0.10&api_key=${key}`;

        //insert code here for where image will be displayed (e.g. card.insertBefore(image, cardBody);)
    }

    return(
        <div>
            <img src={url} />
        </div>
    );
}
export default NASA;