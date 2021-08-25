import React, { useState, useEffect } from "react";

const Ticketmaster = (props) => {
  // const { latitude, longitude } = props.location.coords;

  const [events, setEvents] = useState([]);

  const key = "OLGIKro3RShZ6AAJiMcpO7j1EIEHjiAF";

  const ticketmasterFetch = () => {
    console.log(props.location);
  };

  const handlePropsChange = () => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?/latlong=${
        props.location.coords.latitude + props.location.coords.longitude
      }&apikey=${key}`
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    handlePropsChange();
    ticketmasterFetch();
  }, []);

  return (
    <div>
      <h1 className="Ticketmaster">Hello from Ticketmaster</h1>
    </div>
  );
};

export default Ticketmaster;
