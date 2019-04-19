import React, { Component } from "react";
import { Col, Container, Row, Footer } from "mdbreact";

import Styles from '../styles/Footer.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from "react-router-dom";

  
import About from "./About"
import Team from "./Team";

  import {NavLink} from "mdbreact";

  class FooterPage extends React.Component {
    render() {
    return (
    <Footer color="indigo darken-4 gradient" className="font-small pt-4 mt-4">
      <Container fluid className="text-center">
          <Row>
          <Col md="6">
          <h5 className="title indigo darker-4">Polifactual</h5>
          <p>
            Polifactual was a capstone project created by four DigitalCrafts Students. 
          </p>
          </Col>
          <Col md="2">
          <h5 className="title indigo darker-4 ">Help</h5>
            <li className="list-unstyled">
              <a href="/Team">Contact Us</a>
            </li>
            {/* <li className="list-unstyled">
              <a href="#!">Client Services</a>
            </li> */}
            {/* <li className="list-unstyled">
              <a href="#!">Site Map</a>
            </li> */}
            {/* <li className="list-unstyled">
              <a href="#!">Privacy Policy</a>
            </li> */}
            {/* <li className="list-unstyled">
              <a href="#!">Terms of Use</a>
            </li> */}
          </Col>
          <Col md="2" className="">
          <h5 className="title indigo darker-4 ">About</h5>
            <li className="list-unstyled">
              <a href="/About">About Polifactual</a>
            </li>
            {/* <li className="list-unstyled">
              <a href="#!">Careers</a>
            </li> */}
            <li className="list-unstyled">
              <a href="/Team">Meet the Team</a>
            </li>
          </Col>
          <Col md="2" className="">
          <h5 className="title indigo darker-4">Follow Us</h5>
            <li className="list-unstyled">
              <a href="https://github.com/Kllicks/Polifactual">Github</a>
            </li>
            <li className="list-unstyled">
              <a href="https://trello.com/b/pipJjSew/capstone-project">Trello</a>
            </li>
          </Col>
        </Row>
      </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            <h5>&copy; {new Date().getFullYear()} Copyright:{" "}
            Helen Harris, Kyle Sekellick, Brien Mizell, Isaac Fonseca . All Rights Reserved</h5>
          </Container>
        </div>
    </Footer>
    );
    }
    }
    
    export default FooterPage;