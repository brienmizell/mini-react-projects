import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

  import screenshotRegis from "../styles/images/screenshotRegister.png";

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
  MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
  } from "mdbreact";



class About extends React.Component {
  render() {
    return (
      <div>
      <MDBContainer>
        <MDBCard className="my-5 px-5 pt-5 pb-5 white">
        <MDBCard>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          What all can Polifactual do?
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Below you will see several points highlighting some of our features  
        </p>
        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="flag-checkered"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">National</h5>
                <p className="grey-text">
                  Polifactual can display your legislative representatives at a national level
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Experimental</h5>
                <p className="grey-text">
                Want to see who represents other areas and not just your current locality? You can change your information to display other localities and inform you of other representatives.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="glass" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Personal</h5>
                <p className="grey-text">
                  Once you are registered, you will be able to see your unique homepage, with your local and state information.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
            <img
              className="img-fluid"
              src= {screenshotRegis}
              alt=""
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Twitter</h5>
                <p className="grey-text">
                  Want to go ahead and follow your representatives or like their posts? Polifactual allows you to see twitter feeds for those who are on the social media site.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="flash" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Rapid</h5>
                <p className="grey-text">
                  With just a few clicks, all your relevant legislative information will be displayed before your eyes
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Mobile</h5>
                <p className="grey-text">
                Polifactual is on the go! Can be used on any mobile device with a web browser.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      </MDBCard>
      </MDBContainer>
      </div>
    );
  }
}
export default About;


