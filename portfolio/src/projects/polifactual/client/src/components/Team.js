import React, { Component } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBAvatar,
  MDBCardBody,
  MDBIcon
} from "mdbreact";

import styles from "../styles/Team.css";

import helen from "../styles/images/helen.png";
import kyle from "../styles/images/kyle.png";
import brien from "../styles/images/brien.png";
import isaac from "../styles/images/isaac.png";

class Team extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBCard className="my-5 px-5 pt-5 pb-5 white text-center">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h1-responsive font-weight-bold my-5">
                Our amazing team
              </h2>
              <p className="grey-text w-responsive mx-auto mb-5">
                Our team is compromised of four DigitalCrafts coding bootcamp
                graduates with varying backgrounds and interests. Below is a
                little bit more about us, check us out!
              </p>
              <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                  <img
                    src={helen}
                    className="rounded-circle z-depth-1 img-fluid newphotosize"
                  />
                  <h5 className="font-weight-bold mt-4 mb-3">Helen Harris</h5>
                  <p className="text-uppercase indigo-text">
                    Software Engineer
                  </p>
                  <p className="grey-text">
                    A creative and detailed individual, with the ability to
                    develop effective and efficient solutions.
                  </p>
                  <ul className="list-unstyled mb-0">
                    <a
                      href="mailto:hchang0803@outlook.com"
                      className="p-2 fa-lg"
                    >
                      <MDBIcon icon="envelope" className="indigo-text" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/helen-harris-50205b15/"
                      className="p-2 fa-lg"
                    >
                      <MDBIcon icon="linkedin" className="indigo-text" />
                    </a>
                    <a
                      href="https://github.com/hharris0803"
                      className="p-2 fa-lg"
                    >
                      <MDBIcon icon="github" className="indigo-text" />
                    </a>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                  <img
                    src={brien}
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                  <h5 className="font-weight-bold mt-4 mb-3">Brien Mizell</h5>
                  <p className="text-uppercase indigo-text">
                    Software Engineer
                  </p>
                  <p className="grey-text">
                    Former Millwork Engineer/CNC Programmer turned Software
                    Engineer. My development philosophy is: <br />
                    <br />
                    “A good programmer is someone who always looks both ways
                    before crossing a one-way street.”
                  </p>
                  <ul className="list-unstyled mb-0">
                    <a href="mailto:brienmizell@me.com" className="p-2 fa-lg">
                      <MDBIcon icon="envelope" className="indigo-text" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/brienmizell/"
                      className="p-2 fa-lg"
                    >
                      <MDBIcon icon="linkedin" className="indigo-text" />
                    </a>
                    <a
                      href="https://github.com/brienmizell"
                      className="p-2 fa-lg"
                    >
                      <MDBIcon icon="github" className="indigo-text" />
                    </a>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                  <img
                    src={kyle}
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                  <h5 className="font-weight-bold mt-4 mb-3">Kyle Sekellick</h5>
                  <p className="text-uppercase indigo-text">
                    Software Engineer
                  </p>
                  <p className="grey-text">
                    Experience developing software applications for clients.
                    Seeking opportunities to leverage software development
                    skills in a collaborative environment.
                  </p>
                  <ul className="list-unstyled mb-0">
                    <a
                      href="mailto:sekellickkyle@yahoo.com"
                      className="p-2 fa-lg"
                    >
                      <MDBIcon icon="envelope" className="indigo-text" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kyle-sekellick-b16070135/"
                      className="p-2 fa-lg"
                    >
                      <MDBIcon icon="linkedin" className="indigo-text" />
                    </a>
                    <a href="https://github.com/Kllicks" className="p-2 fa-lg">
                      <MDBIcon icon="github" className="indigo-text" />
                    </a>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                  <img
                    src={isaac}
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                  <h5 className="font-weight-bold mt-4 mb-3">Isaac Fonseca</h5>
                  <p className="text-uppercase indigo-text">
                    Software Engineer
                  </p>
                  <p className="grey-text">
                    Exercise Physiologist turned Full- Stack Software Engineer,
                    with a passion for competitive video gaming and soccer.
                  </p>
                  <ul className="list-unstyled mb-0">
                    <a
                      href="mailto:isaacfo1010@gmail.com"
                      className="p-2 fa-lg"
                    >
                      <MDBIcon icon="envelope" className="indigo-text" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/isaac-fonseca10/"
                      className="p-2 fa-lg"
                    >
                      <MDBIcon icon="linkedin" className="indigo-text" />
                    </a>
                    <a href="https://github.com/isaacfo" className="p-2 fa-lg">
                      <MDBIcon icon="github" className="indigo-text" />
                    </a>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default Team;
