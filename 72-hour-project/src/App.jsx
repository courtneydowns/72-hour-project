import React, { useState, useEffect } from 'react';
import './App.css';
import NASA from './components/NASA';
import Ticketmaster from './components/Ticketmaster';
import Weather from './components/Weather';


function App() {

  const [location, setLocation] = useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation(pos);
      });
    }
  };

  useEffect(() => {
    getLocation()
  }, []);

  // const handleClick=()=>{
  //   getLocation();
  // }

  return (
    <div className="App">
      <center>
      
            <NASA location={location} />
          
            <Weather />

            <Ticketmaster location={location} />

      </center>
    </div>
  );
}

export default App;
