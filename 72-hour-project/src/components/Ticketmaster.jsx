import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";

const Ticketmaster = (props) => {
  const [events, setEvents] = useState([]);

  const key = "OLGIKro3RShZ6AAJiMcpO7j1EIEHjiAF";

  const handlePropsChange = async () => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=40&apikey=${key}&latlong=${props.location.coords.latitude},${props.location.coords.longitude}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log(json._embedded.events);
        setEvents(json._embedded.events);
      });
  };

  useEffect(() => {
    if (props.location?.coords?.latitude && props.location?.coords?.longitude) {
      handlePropsChange();
    }
  }, [props.location.coords]);
  //use effect runs when component is mounted. WHen it's mounted, I am running my handlePropsChange immediately which is where my fetch is. Need to figure out way to do useEffect but not run fetch immediately...don't run fetch until button is clicked.

  // function displayCards() {
  //   {
  //     events.map((event, id) => (
  //       <p className="events" key={id}>
  //         {event.name}
  //       </p>
  //     ));
  //   }
  // }
  return (
    <div>
      <h1 className="Ticketmaster">Ticketmaster: Nearby Events</h1>
      {events.map((event, id) => (
        <div key={id}>
          <h3 className="events">{event.name}</h3>
          <p>{`Date: ${event.dates.start.localDate}`}</p>
          <p>{`Distance: ${event.distance}`}</p>
        </div>
      ))}
    </div>
  );
};

// const Example = (props) => {
//   return (
//     <div>
//       <Card inverse>
//         <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
//         <CardImgOverlay>
//           <CardTitle tag="h5">Card Title</CardTitle>
//           <CardText>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </CardText>
//           <CardText>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </CardText>
//         </CardImgOverlay>
//       </Card>
//     </div>
//   );
// };

export default Ticketmaster;
