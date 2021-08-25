import React, { useState, useEffect } from "react";

const TicketmasterFetch = (props) => {
  const url =
    "https://app.ticketmaster.com/discovery/v2/events/latlong&apikey=OLGIKro3RShZ6AAJiMcpO7j1EIEHjiAF";

  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEvents(data.message));
  }, []);

  return (
    <div>
      <h1 className="Ticketmaster">Hello from Ticketmaster</h1>
      <p>
        {events.props.location.coords
          ? events.props.location.coords.latitude
          : null}
      </p>
    </div>
  );
};

export default TicketmasterFetch;

/*
    1. Declare state variables for URL and the response
    2. Write a function that will handle the fetch
    3. Set everything up in order using useEffect hook ... set URL based on props (location (inside useEffect in dependency array..put props in))
    4. Do Fetch...set response state setWHATEVER
    5. Then display results however
    */
