import { Timeline } from "react-twitter-widgets";
import React, { Component } from "react";

// import Styles from '../styles/National.css';

import {
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCollapse
} from "mdbreact";

import {
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip
} from "mdbreact";

import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Col
} from "mdbreact";

import {
  MDBCard,
  MDBCardUp,
  MDBCardBody,
  MDBAvatar,
  MDBRotatingCard
} from "mdbreact";
import { spacing } from "material-ui/styles";

class Nationals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // flipped1: false,
      office: [],
      personOfficeInfo: []
    };
  }

  componentDidMount() {
    let streetaddress = sessionStorage.getItem("streetaddress"); // streetaddress equals the value that the useradded to the street address from the database.
    let city = sessionStorage.getItem("city"); // city equals the value that the useradded to the city from the database.
    let state = sessionStorage.getItem("currentstate"); // state equals the value that the useradded to the state from the database.
    let zipcode = sessionStorage.getItem("zipcode"); // zipcode equals the value that the useradded to the zip code from the database.

    const addressUrl = encodeURI(
      `${streetaddress} ${city} ${state} ${zipcode}`
    ); // addressUrl equals the address that will be sent to the api.

    fetch(
      `https://www.googleapis.com/civicinfo/v2/representatives?address=${addressUrl}&includeOffices=true&key=AIzaSyB3cRW6zO8D3INc-NHDFA-0ck77gQAYpOU`,
      { headers: { "Content-Type": "application/json; charset=utf-8" } }
    )
      .then(response => response.json())
      .then(results => {
        let newResults = Object.values(results); // newResults will be json response array of the users civic representives at each elected level of government.
        let officesArray = newResults[3]; // officesArray equals the names of the office and info about that office for each level of elected government.
        let personInfoArray = newResults[4]; // personInfoArray is the names and info for the person who currently has been elected to the seat of the newResults array.
        let masterArray = [];

        officesArray.forEach(office => {
          // for each office (index) of the officesArray.
          if (office.divisionId === newResults[3][0].divisionId) {
            // if the divisionid of the 0 index of the third index of newResults is equal to divisionId of the current office...
            office.officialIndices.forEach(index => {
              // for each index of officialIndices
              let personInfo = personInfoArray[index]; // personInfo equals each index of personInfoArray.
              let TwitterHandle; // establish a TwitterHandle variable value to be added later.
              let personEmail = personInfo.emails || null; // if an elected official has an email address add that value to personEmail.
              let personPhoto = personInfo.photoUrl || null; //if an elected official has a photo url add that value to personPhoto
              let personUrl = personInfo.urls || null; // if an elected official has a website (personal or for the department) add that value to personUrl
              if (personInfoArray[index].channels) {
                // if the index of personInfoArray has a .channels value.
                personInfo.channels.forEach(index2 => {
                  // for each index of .channels
                  if (index2.type === "Twitter") {
                    // if the key name of that index equals twitter.
                    let theirTwitterHandle = index2.id; //theirTwitterHandle equals the key value of twitter key.
                    TwitterHandle = theirTwitterHandle; // add the value of theirTwitterHandle to TwitterHandle.
                    return TwitterHandle; //return the value of TwitterHandle so it can be accesed outside of the forEach.
                  } else {
                    let TwitterHandle = null; // if that index of the personInfoArray.channels does not have a twitter set their TwitterHandle to null.
                    return TwitterHandle; // return the value of TwitterHandle so it can be accesed outside of the forEach.
                  }
                });
              }
              // establish a variable named personOfficenfo as an object to hold values we want to used for state.
              let personOfficeInfo = {
                officeName: office.name,
                personName: personInfo.name,
                address: personInfo.address[0],
                party: personInfo.party,
                phoneNumber: personInfo.phones[0],
                twitter: TwitterHandle,
                email: personEmail,
                photo: personPhoto,
                url: personUrl
              };
              masterArray.push(personOfficeInfo);
            });
          }
        });

        this.setState({
          personOfficeInfo: masterArray
        });
      })
      .catch(function(error) {
        console.log("Looks like there was a problem: \n", error);
      });
  }

  render() {
    let officeNames = this.state.personOfficeInfo.map((item, index) => {
      return (
        <section className="text-center">
          <MDBRow>
            <MDBCol lg="12" md="12" className="mb-lg-0 mb-12">
              <MDBCard ecommerce align="center">
                {item.photo ? (
                  <MDBCardImage
                    className="rounded-circle pt-4"
                    cascade
                    top
                    style={{ width: "18.5rem", height: "18rem" }}
                    src={item.photo}
                    alt=""
                  />
                ) : (
                  <img
                    style={{ width: "13rem", height: "15rem" }}
                    src={"/images/NoPhotoAvailable.jpg"}
                    alt=""
                  />
                )}
                <MDBCardBody cascade className="text-center">
                  <a href="#!" className="text-muted">
                    <h5>
                      {item.personName ? (
                        <>
                          <a href={item.url}>{item.personName}</a>
                        </>
                      ) : null}
                    </h5>
                  </a>
                  <MDBCardTitle>
                    <strong>
                      {item.officeName ? <>{item.officeName}</> : null}
                    </strong>
                  </MDBCardTitle>
                  <hr />
                  <MDBCardText>
                    <strong> Address: </strong>
                    {item.address.line1 ? <>{item.address.line1}</> : null}
                    <br />
                    {item.address.line2 ? <>{item.address.line2}</> : null}
                    <br />
                    {item.address.city ? <>{item.address.city}</> : null}
                    <text> , </text>
                    {item.address.state ? <>{item.address.state}</> : null}
                    <text> </text>
                    {item.address.zip ? <>{item.address.zip}</> : null}
                    <br />
                    <strong>Party: </strong>
                    {item.party ? <>{item.party}</> : null}
                    <br />
                    <strong>Phone Number: </strong>
                    {item.phoneNumber ? <>{item.phoneNumber}</> : null}
                    <br />
                    {item.twitter ? (
                      <>
                        <strong>Twitter: </strong>
                        <Timeline
                          dataSource={{
                            sourceType: "profile",
                            screenName: item.twitter
                          }}
                          options={{
                            username: item.twitter,
                            height: "400",
                            width: "60%"
                          }}
                        />
                      </>
                    ) : null}
                  </MDBCardText>
                  <MDBCardFooter className="px-1">
                    {item.email ? (
                      <span className="float-right">
                        <MDBBtn
                          size="lg"
                          tag="a"
                          floating
                          social="email"
                          href={"mailto:" + item.email}
                        >
                          <MDBIcon icon="envelope" />
                        </MDBBtn>
                      </span>
                    ) : null}
                  </MDBCardFooter>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      );
    });

    return (
      <div>
        <br />
        <strong>
          <h1 className="text-white">National Representatives</h1>
        </strong>
        <hr />
        <>{officeNames}</>
      </div>
    );
  }
}

export default Nationals;
