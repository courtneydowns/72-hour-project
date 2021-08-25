import React, { useState, useEffect } from "react";
import "./App.css";
import Ticketmaster from "./components/Ticketmaster";

function App() {
  const [location, setLocation] = useState({});
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation(pos);
      });
    }
  };

  useEffect(getLocation, []);

  return (
    <div>
      <Ticketmaster location={location} />
    </div>
  );
}

export default App;
