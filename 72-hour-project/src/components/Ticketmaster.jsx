const Ticketmaster = (props) => {
  /*
    1. Declare state variables for URL and the response
    2. Write a function that will handle the fetch
    3. Set everything up in order using useEffect hook ... set URL based on props (location (inside useEffect in dependency array..put props in))
    4. Do Fetch...set response state setWHATEVER
    5. Then display results however
    */
  return (
    <div>
      <h1>Hello from Ticketmaster</h1>
      <p>{props.location.coords ? props.location.coords.latitude : null}</p>
    </div>
  );
};

export default Ticketmaster;
