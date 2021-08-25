import React, { useState, useEffect } from "react";

const Ticketmaster = (props) => {
  // const { latitude, longitude } = props.location.coords;

  const [events, setEvents] = useState([]);

  const key = "OLGIKro3RShZ6AAJiMcpO7j1EIEHjiAF";

  // const ticketmasterFetch = () => {
  //   console.log(props.location);
  // };

  const handlePropsChange = () => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${key}&latlong=${props.location.coords.latitude},${props.location.coords.longitude}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        debugger;
        // See if you can console log something specific from the response (maybe the first event)
        //store the json in a useState Hook - setter function
        // Try to only store the events array
      });
  };

  //Create a function that does a map over the data

  useEffect(() => {
    if (props.location?.coords?.latitude && props.location?.coords?.longitude) {
      handlePropsChange();
    }
  }, [props.location]);

  return (
    <div>
      <h1 className="Ticketmaster">Hello from Ticketmaster</h1>
      {/* Figure out what you want to display from the EventsArray */}
    </div>
  );
};

export default Ticketmaster;
