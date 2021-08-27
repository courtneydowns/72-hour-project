import React from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TicketmasterChild = (props) => {
  const { name, dates, _embedded, distance } = props?.event;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="event-card" tag="h3">
            {name}
          </CardTitle>
          <CardText>
            <ul style={{ listStyle: "none" }}>
              <h4 className="date">{`Date: ${dates.start.localDate}`}</h4>
              <h4 className="venue">{`Venue: ${_embedded.venues[0].name}`}</h4>
              <h5 className="distance">{`Distance: ${distance}`}</h5>
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default TicketmasterChild;
