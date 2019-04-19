import React, {Component} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/Register.css';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
    MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline } from "mdbreact";


class Register extends Component {
    constructor(props) {
		super(props);

		this.state = {
			id: '',
			name: '',
			username: '',
            streetaddress: '',
            city: '',
			currentstate: '',
			zipcode: '',
			password: ''
		};
    }
    
    _handleName = event => {
		const value = event.target.value;

		this.setState({
			name: value
		});
    }

    _handleUsername = event => {
		const value = event.target.value;

		this.setState({
			username: value
		});
    }
    
    _handleStreetAddress = event => {
		const value = event.target.value;

		this.setState({
			streetaddress: value
		});
    }

    _handleCity = event => {
		const value = event.target.value;

		this.setState({
			city: value
		});
    }

    _handleCurrentState = event => {
		const value = event.target.value;

		this.setState({
			currentstate: value
		});
    }

    _handleZipcode = event => {
		const value = event.target.value;

		this.setState({
			zipcode: value
		});
    }

	_handlePassword = event => {
		const value = event.target.value;

		this.setState({
			password: value
		})
	}

	_handleSubmit = event => {
		event.preventDefault();

		axios
			.post("/api/register", this.state)
			.then(response => {
                // Need a response including the address from userObj
                if (response.data.user) {
                    console.log(response.data)
					const user = response.data.user;
					console.log(user);
					this.props.doLoggedIn();
					// Save data to sessionStorage
					// sessionStorage.setItem('key', 'value');
					sessionStorage.setItem('streetaddress', user.streetaddress);
					sessionStorage.setItem('city', user.city);
					sessionStorage.setItem('currentstate', user.currentstate);
					sessionStorage.setItem('zipcode', user.zipcode);
					// Get saved data from sessionStorage
					// let streetaddress = sessionStorage.getItem('streetaddress');
					// console.log(streetaddress);
					// let city = sessionStorage.getItem('city');
					// console.log(city);
					// let currentstate = sessionStorage.getItem('currentstate');
					// console.log(currentstate);
					// let zipcode = sessionStorage.getItem('zipcode');
                    // console.log(zipcode);
                    this.props.history.push('/Local')
                }
            })
            .catch(err => {
                console.log(err);
            });
	}

    render() {
        return (
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer className="main">
            <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 signuparea">
                  <h1 className="h1-responsive font-weight-bold">
                    Register now!{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                   Register and keep your address on file! That way you can login and see your current representatives!
                  </h6>
                  {/* <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn> */}
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard id="classic-card">
                    <MDBCardBody className="z-depth-2 indigo-text sizing" >
                    <form className="signup-form" onSubmit={this._handleSubmit}>
                      <h3 className="text-center">
                        <MDBIcon icon="user" /> Register:
                      </h3>
                      <hr className="hr-light" />
                      {/* Form */}
                        <MDBInput left
                            id="name" 
                            label="Your name" 
                            icon="user" 
                            type="text" 
                            name="name" 
                            autocomplete="off" 
                            onChange={this._handleName} 
                            value={this.state.name} />
                        <MDBInput 
                            id ="username" 
                            label="Username" 
                            icon="user" 
                            type="text" 
                            name="username" 
                            autocomplete="off" 
                            onChange={this._handleUsername} 
                            value={this.state.username} />
                        <MDBInput
                            id="password" 
                            label="Your password"
                            icon="lock"
                            type="password"
                            name="password" 
                            autocomplete="off"
                            onChange={this._handlePassword}
							value={this.state.password}
                            />
                        <MDBInput 
                            id ="streetaddress" 
                            label="Street Address" 
                            icon="address-book"
                            type="text" 
                            name="streetaddress" 
                            autocomplete="off"
                            name="streetaddress" 
                            onChange={this._handleStreetAddress}
							value={this.state.streetaddress} />
                        <MDBInput 
                            id ="city" 
                            label="City" 
                            icon="address-book"
                            type="text" 
                            name="city" 
                            autocomplete="off"
                            name="city" 
                            onChange={this._handleCity}
							value={this.state.city} />
                        <MDBInput 
                            id ="currentstate" 
                            label="State" 
                            icon="address-book" 
                            type="text" 
                            name="currentstate" 
                            autocomplete="off"
                            onChange={this._handleCurrentState}
							value={this.state.currentstate}/>
                        <MDBInput 
                            id ="zipcode" 
                            icon="address-book" 
                            label="Zipcode" 
                            type="text" 
                            name="zipcode" 
                            autocomplete="off"
                            onChange={this._handleZipcode}
							value={this.state.zipcode} />
                        <div className="remember-me">
                            <input type="checkbox"/>
                            <span>I accept Terms of Service</span>
                        </div>
                        <div className="text-center mt-4 black-text">
                            <MDBBtn color="indigo" type="submit">Register Now!</MDBBtn>
                        </div>
                        </form>
                            <a href="#">Privacy Policy</a>
                        <div className="register">
                            <span>Already have an account?</span>
                            <br />
                            <Link to="/login">Log In Here</Link>
                        </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
       
        )
    }
};

export default Register;


