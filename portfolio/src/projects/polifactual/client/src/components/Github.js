import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";

import Styles from '../styles/Github.css';
import githubpic from '../styles/images/Github.png';

const Github = () => {
  return (
    <MDBContainer>
      <MDBCard className="my-5 px-5 pt-5 pb-5 white text-center">
      {/* <section className="text-center my-5 px-5 pt-5 pb-5"> */}
        <MDBRow>
          <MDBCol md="12" className="mb-4">
            <MDBCard
              
            >
            <img src={githubpic} className="img-fluid" />
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 white">
                <div>
                  <h2 className="indigo-text py-3 font-weight-bold">
                    <MDBIcon icon="github" size="lg" />
                    <br />
                    <strong>Github</strong>
                  </h2>
                  <p className="pb-3 grey-text">
                    Our group decided to use Github to make it easy to collaborate and look back at previous versions of our work. 
                    Please check out this projects repo on Github!
                    Dont forget to also check out our Trello Board! 
                  </p>
                  <MDBBtn color="indigo" rounded size="md" href="https://github.com/Kllicks/Polifactual">
                    <MDBIcon icon="clone" className="left"/>  See Github for Project
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      {/* </section> */}
      </MDBCard>
      </MDBContainer>
  );
}

export default Github;