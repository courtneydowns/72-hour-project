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
        <h1>OUR API FORM</h1>
      {/* <form>
        <label for="latitude">Latitude</label><br />
        <input type="number" id="" name="latitude" /><br />
        <label for="longitude">Longitude</label><br />
        <input type="number" id="" name="longitude" />
        <br />
        <button className="btn btn-primary" onClick={getLocation}>SUBMIT</button>
      </form> */}
      <table width="600">
        <tbody>
        <tr>
          <td>
            <NASA location={location} />
          </td>
          <td>
            <Weather />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <Ticketmaster location={location} />
          </td>
        </tr>
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default App;
