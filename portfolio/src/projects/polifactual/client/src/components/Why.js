import React from 'react';

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
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
  } from "mdbreact";



class Why extends React.Component {
  render() {
    return (
      <div>
 <MDBContainer >
 <MDBCard className="my-5 px-5 pt-5 pb-5 white">
 <MDBCard>
         <h2 className="h1-responsive font-weight-bold text-center my-5">
           Why is it so great?
         </h2>
         <p className="lead grey-text w-responsive text-center mx-auto mb-5">
           For those that have struggled to keep informed about poltics that affect thier every day lives, we have developed Polifactual to bring you all the information relevant too your neighborhood with just a few clicks.
         </p>

         <MDBRow>
           <MDBCol lg="5" className="text-center text-lg-left">
             <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Local</h5>
                <p className="grey-text">
                 On your local page, you will see representatives such as your local Tax Comissioner and Sheriff
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">State</h5>
                <p className="grey-text">
                  On the state level, you will see representatives such as your Governor and state senators 
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">National</h5>
                <p className="grey-text">
                Polifactual can display your legislative representatives at a national level, such as President, and Vice-President
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
export default Why;


