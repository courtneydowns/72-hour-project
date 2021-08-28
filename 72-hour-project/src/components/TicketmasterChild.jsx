import React from "react";
import { Card, CardTitle, CardText, CardBody, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../Ticketmaster.css";

const TicketmasterChild = (props) => {
  const { name, dates, _embedded, distance } = props.event;
  return (
      <div>
        <Card
          style={{
            marginTop: 30, maxWidth: 335, minHeight: 345
          }} body inverse color="info"
        >
          <CardBody>
            <CardTitle
              className="event-card"
              style={{ fontSize: 30, textAlign: "center" }}
              tag="h3"
            >
              {name}
            </CardTitle>
            <CardText>
              <center>
                <h4 className="venue" style={{ fontSize: 24, textAlign: "center" }}>
                  {`Venue: ${_embedded.venues[0].name}`}
                </h4>
                <h4 className="date" style={{ fontSize: 20, textAlign: "center" }}>
                  {`Date: ${dates.start.localDate}`}
                </h4>
                <h5 className="distance" style={{ fontSize: 18, textAlign: "center" }}>
                  {`Distance: ${distance}`}
                </h5>
              </center>
            </CardText>
          </CardBody>
        </Card>
      </div>
  );
};

export default TicketmasterChild;
