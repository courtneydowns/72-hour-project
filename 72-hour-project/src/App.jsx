import React, { useState, useEffect } from "react";
import "./App.css";
import Ticketmaster from "./components/Ticketmaster";
import Weather from "./components/Weather";
// import NASA from "./components/NASA";

function App() {
  const [location, setLocation] = useState({});
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setLocation(position);
      });
    }
  };

  useEffect(() => {
    getLocation();
   }, []);

  return (
    <div>
      <Ticketmaster location={location} />
      <Weather location={location} />
      {/* <NASA location={location} /> */}
    </div>
  );
}

export default App;
