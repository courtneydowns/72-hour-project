import React, { useState, useEffect } from "react";

const Ticketmaster = (props) => {
  const [events, setEvents] = useState([]);

  // const [handleClick, setHandleClick] = useState("");

  const key = "OLGIKro3RShZ6AAJiMcpO7j1EIEHjiAF";

  const handlePropsChange = async () => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=40&apikey=${key}&latlong=${props.location.coords.latitude},${props.location.coords.longitude}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setEvents(json._embedded.events);

        // console.log(Array.from([json._embedded.events.name]));

        // console.log(json._embedded.events.name);
        // See if you can console log something specific from the response (maybe the first event)
        //store the json in a useState Hook - setter function
        // Try to only store the events array
      });
  };

  useEffect(() => {
    if (props.location?.coords?.latitude && props.location?.coords?.longitude) {
      handlePropsChange();
    }
  }, [props.location.coords]);
  //use effect runs when component is mounted. WHen it's mounted, I am running my handlePropsChange immediately which is where my fetch is. Need to figure out way to do useEffect but not run fetch immediately...don't run fetch until button is clicked.

  return (
    <div>
      <h1 className="Ticketmaster">Ticketmaster: Nearby Events</h1>
      {events.map((event, id) => (
        <p className="events" key={id}>
          {event.name}
          {/* {event.name.dates.start.localDate} */}
        </p>
      ))}
    </div>
  );
};

export default Ticketmaster;
