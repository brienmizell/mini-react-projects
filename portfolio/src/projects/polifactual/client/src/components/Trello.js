import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

import Trellopic from '../styles/images/Trello.png';
import Styles from '../styles/Trello.css';

const Trello = () => {
  return (
    <MDBContainer>
    <MDBCard className="my-5 px-5 pt-5 pb-5 white">
    <MDBCard>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <MDBView hover cascade waves>
                <img
                  src= {Trellopic}
                  className="img-fluid"
                /> 
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h1 className="font-weight-bold my-5">
                  Trello
                </h1>
                <p className="grey-text">
                Our team chose to use Trello as our choice of project planning software. We chose to use Trello to manage our web project for two reasons. It is free and helps keep us organized and focused. 
              </p>
                <MDBBtn className="btn-fb waves-light" color="indigo darken-4">
                  <MDBIcon icon="trello" />
                  <a href="https://trello.com/b/pipJjSew/capstone-project"><p className="white-text">Click here to check out our Trello page!</p></a>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBCard>
    </MDBCard>
    </MDBContainer>
  );
}

export default Trello;