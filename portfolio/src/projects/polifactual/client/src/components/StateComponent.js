import React, { Component } from "react";
import { Timeline } from "react-twitter-widgets";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

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
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip
} from "mdbreact";

// import styles from '../styles/State.css';

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          // for each office inside of the offices array.
          if (
            office.divisionId === newResults[3][2].divisionId || // if office.divisionId equals the second or third index...
            office.divisionId === newResults[3][3].divisionId
          ) {
            office.officialIndices.forEach(index => {
              // for each index of  the officialIndices array inside of  office...
              let personInfo = personInfoArray[index]; // set personInfo equal to each index of th personInfoArray.
              let TwitterHandle; // establish a TwitterHandle variable to be assigned a value later.
              let personEmail = personInfo.emails || null; // if an elected official has an email address add that value to personEmail.
              let personPhoto = personInfo.photoUrl || null; //if an elected official has a photo url add that value to personPhoto
              let personUrl = personInfo.urls || null; // if an elected official has a website (personal or for the department) add that value to personUrl.

              if (personInfoArray[index].channels) {
                // check wether each index in the personInfoArray has a key named channels if they do...
                personInfo.channels.forEach(index2 => {
                  // for each key name of the channels array of objects...
                  if (index2.type === "Twitter") {
                    // If the value of that key name is Twitter...
                    let theirTwitterHandle = index2.id; // assign the key value of the Twitter key name to the variable theirTwitterHandle.
                    TwitterHandle = theirTwitterHandle; // assing theirTwitterHandle to TwitterHandle.
                    return TwitterHandle; // returnthe value of TwitterHandle so it can be used outside of the forEach.
                  }
                });
              }
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
    let officeNames = this.state.personOfficeInfo.map(function(item, index) {
      return (
        <section className="text-center my-5">
          {/* <MDBRow> */}
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
                        onLoad={() => console.log("Timeline is loaded!")}
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
          {/* </MDBRow> */}
        </section>
      );
    });

    return (
      <div className="Main">
        <br />
        <strong>
          <h1 className="text-white">State Representatives</h1>
        </strong>
        <hr />
        <>{officeNames}</>
      </div>
    );
  }
}

export default States;
