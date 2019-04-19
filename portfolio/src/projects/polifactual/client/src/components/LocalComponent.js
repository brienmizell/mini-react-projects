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
  Col,
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

class Locals extends Component {
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
        let newResults = Object.values(results); // newResults is the json response array of the users civic representives at each elected level of government.
        let ocdArray = newResults[2]; // ocdArray equals the names of the ocd divisions returned from the api.
        let officesArray = newResults[3]; // officesArray equals the names of the office and info about that office for each level of elected government.
        let personInfoArray = newResults[4]; // personInfoArray is the names and info for the person who currently has been elected to the seat of the newResults array.
        let countyKey = ""; // create a new variable countyKey as an empty sting to accept an upcoming assignment
        let councilKey = ""; // create a new variable councilKey as an empty sting to accept an upcoming assignment
        Object.keys(ocdArray).forEach(element => {
          // for each key in the ocd array make a new array with the value of that key under the following circumspances:
          if (element.includes("council")) {
            // if the key includes the value council...
            councilKey = element; // add the value of the key to the councilKey variable.
          } else if (element.includes("county") || element.includes("city")) {
            countyKey = element; // add the value of the key to the countyKey variable.
          }
        });

        // let localOfficeName = ocdArray[councilKey].name; // this is the name of the office held by the key value that includes council from the above forEach/if statement.
        let indicesArray = [];
        if (councilKey) {
          indicesArray = ocdArray[councilKey].officeIndices;
        }
        // this array will hold the values of the officeIndices that has the value of councilKey from the ocdArray.
        indicesArray = indicesArray.concat(ocdArray[countyKey].officeIndices); // combine each officeIndices in the indices array.
        let wonderfulData = indicesArray.map(index => {
          // create a variable wonderfulData that will map through each index of the indicesArray, then...
          let positionData = { positionName: officesArray[index].name }; // position data will equal the value of name of the corresponding index of the officesArray.
          let positionIndices = officesArray[index].officialIndices; // positionIndices will equal the officalIndices value of the index of that officeArray.
          positionData.people = positionIndices.map(index2 => {
            // positionData.people will map through the values of positionIndices and then...
            return personInfoArray[index2]; //retun the corresponding index from the personInfoArray for each.
          });
          return positionData; // return the positionData || name of that index.
        });

        //////////////////////////////////////////////////////////////////////////////
        //                                                                          //
        //    wonderfulData will return an array of objects                         //
        //    each index of the object will have keys with the names of:            //
        //                                                                          //
        //    people: whos value will have another array of objects with            //
        //        info about that person such as address, email, phone number, etc. //
        //                                                                          //
        //    positionName: which will have a key value equal to the name of the    //
        //        position.                                                         //
        //                                                                          //
        //////////////////////////////////////////////////////////////////////////////

        let masterArray = []; //create a new array called masterarray. setting it as an empty array awaiting assignment.

        for (let i = 0; i < wonderfulData.length; i++) {
          // for loop starting at "i" = 0 we will increment "i" by one each time we loop through as long as i less than or equal to the length of the wonderfulData array.
          let office = wonderfulData[i].positionName;
          let personInfo = wonderfulData[i].people[0]; // personInfo equals each index of personInfoArray.

          let TwitterHandle; // establish a TwitterHandle variable value to be added later.

          let personAddress = personInfo.address ? personInfo.address[0] : null; //personAddress equals each personInfo.address array index 0 or null.
          let phoneNumber = personInfo.phones ? personInfo.phones[0] : null; //personAddress equals each personInfo.address array index 0 or null.

          let personEmail = personInfo.emails || null; // if an elected official has an email address add that value to personEmail.
          let personPhoto = personInfo.photoUrl || null; //if an elected official has a photo url add that value to personPhoto.
          let personUrl = personInfo.urls || null; // if an elected official has a website (personal or for the department) add that value to personUrl.

          wonderfulData.forEach(index => {
            // for each index in offices array.offical indices.

            if (personInfo.channels) {
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
          });
          // establish a variable named personOfficenfo as an object to hold values we want to used for state.
          let personOfficeInfo = {
            officeName: office,
            personName: personInfo.name,
            address: personAddress,
            officeIndices: office.officialIndices,
            party: personInfo.party,
            phoneNumber: phoneNumber,
            twitter: TwitterHandle,
            email: personEmail,
            photo: personPhoto,
            url: personUrl
          };
          masterArray.push(personOfficeInfo); // push each instance in personOfficeInfo info into masterArray.
        }

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
      // map through the item and index of each item inthis.state.personofficeinfo.
      return (
        <section className="text-center my-5">
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
                  style={{ width: "18.5rem", height: "18rem" }}
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
                  {item.address ? (
                    <>
                      {item.address.line1 ? <>{item.address.line1}</> : null}
                      {item.address.line2 ? <>{item.address.line2}</> : null}
                      {item.address.city ? <>{item.address.city}</> : null}
                      {item.address.state ? <>{item.address.state}</> : null}
                      {item.address.zip ? <>{item.address.zip}</> : null}
                    </>
                  ) : null}
                  <br />
                  <strong>Party: </strong>
                  {item.party && item.party !== "Unknown" ? (
                    <>
                      <>{item.party}</>
                    </>
                  ) : null}

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
          <h1 className="text-white">Local Representatives</h1>
        </strong>
        <hr />
        <>{officeNames}</>
      </div>
    );
  }
}

export default Locals;
