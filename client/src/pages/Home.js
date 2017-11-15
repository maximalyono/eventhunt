import React from "react";
import { Link } from "react-router-dom";
import EventList from "../organisms/EventList";
import Cats from "../organisms/Cats";

import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";

// -----------------------------------------------------------------------------


const div1 = {
  fontWeight: "bold",
  fontSize: "16px",
  float: "left",
  padding: "20px"
};

const Home = () => (
  <div style={div1}>
    <Container>
    <Row>
      <Col><EventList /></Col>
      <Col><Cats /></Col>
    </Row>
    </Container>
  </div>
);

export default Home;
