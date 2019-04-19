import React from 'react';

import Styles from '../styles/Home.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
  MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline, NavLink
  } from "mdbreact";



class Home extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer className="main">
                <MDBRow>
                  <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      {/* Polifactual{" "} */}
                    </h1>
                    {/* <hr className="hr-light" /> */}
                    <h6 className="mb-4">
                      {/* Bringing you your local, state, and national legislative representatives' information right to you from one source. */}
                    </h6>
                    {/* <MDBBtn color="indigo darken-4">Register Now!</MDBBtn> */}
                  </div>
                  <MDBCol md="6" xl="5" className="mt-xl-5">
                    <div className="black-text text-center text-md-left">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5;">
                      Polifactual{" "}
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4 ">
                      Bringing you your local, state, and national legislative representatives' information right to you from one source.
                    </h6>
                    {/* <MDBBtn color="indigo darken-4">Register Now!</MDBBtn> */}
                    <MDBBtn outline color="black">
                      <strong>
                        <NavLink to="/About">Learn More</NavLink>
                      </strong>
                    </MDBBtn>
                  </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
        </MDBContainer>
      </div>
    );
  }
}
export default Home;


