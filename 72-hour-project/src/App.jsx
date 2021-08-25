import React, { useState, useEffect } from "react";
import "./App.css";
import Ticketmaster from "./components/Ticketmaster";

function App() {
  const [location, setLocation] = useState({});
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        setLocation(position);
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // useEffect(getLocation, []); //empty array dependency (array) means the callback function is going to get called once when the component mounts

  return (
    <div>
      <Ticketmaster location={location} />
    </div>
  );
}

export default App;
