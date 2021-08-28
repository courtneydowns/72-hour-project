import React, { useState, useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import NASA from './components/NASA';
import Weather from "./components/Weather";
import Ticketmaster from "./components/Ticketmaster";
import "./Ticketmaster.css";
import "./NavBar.css";
import WhiteLlama from "./WhiteLlama.svg";

function App() {
  const [location, setLocation] = useState({});
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
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
      {/* <NavigationBar /> */}
      <img src={WhiteLlama} />
      <NASA location={location} /> 
      <Weather location={location} />
      <Ticketmaster location={location} />
    </div>
  );
}

export default App;
