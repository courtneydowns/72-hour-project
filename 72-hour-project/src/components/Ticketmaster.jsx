import React, { useState, useEffect } from "react";
import TicketmasterChild from "./TicketmasterChild";
import "../Ticketmaster.css";

import { CardDeck } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Ticketmaster = (props) => {
  const [events, setEvents] = useState([]);

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?`;

  const key = "OLGIKro3RShZ6AAJiMcpO7j1EIEHjiAF";

  const handlePropsChange = async () => {
    const response = await fetch(
      `${url}size=7&apikey=${key}&latlong=${props.location.coords.latitude},${props.location.coords.longitude}`
    );

    const data = await response.json();
    console.log(data._embedded.events);
    setEvents(data._embedded.events);
  };

  useEffect(() => {
    if (props.location?.coords?.latitude && props.location?.coords?.longitude) {
      handlePropsChange();
    }
  }, [props.location]);

  //use effect runs when component is mounted. WHen it's mounted, I am running my handlePropsChange immediately which is where my fetch is. Need to figure out way to do useEffect but not run fetch immediately...don't run fetch until button is clicked.

  const displayCards = (props) =>
    events.map((event, id) => <TicketmasterChild key={id} event={event} />);

  return (
    <div>
      <h1
        className="ticketmaster"
        style={{
          textAlign: "center",
          marginTop: 100,
          fontSize: 50,
          color: "white",
        }}
      >
        Ticketmaster: Nearby Events
      </h1>

      <CardDeck>{events ? displayCards() : null}</CardDeck>
    </div>
  );
};

export default Ticketmaster;
