import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "../styles/Register.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
	MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline } from "mdbreact";


class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			redirectToPreviousRoute: false,
			id: '',
			name: '',
			username: '',
			streetaddress: '',
			currentstate: '',
			zipcode: '',
			password: ''
		};
	}

	_handleUsername = event => {
		const value = event.target.value;

		this.setState({
			username: value
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
			.post("/api/login", this.state)
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
					sessionStorage.setItem('currentstate', user.currentstate);
					sessionStorage.setItem('zipcode', user.zipcode);

					// Get saved data from sessionStorage
					// let streetaddress = sessionStorage.getItem('streetaddress');
					// console.log(streetaddress);
					// let currentstate = sessionStorage.getItem('currentstate');
					// console.log(currentstate);
					// let zipcode = sessionStorage.getItem('zipcode');
					// console.log(zipcode);

					this.props.history.push("/local")
				} 
	
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToPreviousRoute } = this.state;

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />;
    }
	return (
		<MDBMask className="d-flex justify-content-center align-items-center gradient">
		<MDBContainer className="main">
		  <MDBRow>
			<div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
			  <h1 className="h1-responsive font-weight-bold">
				Welcome Back!{" "}
			  </h1>
			  <hr className="hr-light" />
				<strong><p>We are happy to see you again!</p></strong>
			</div>

			<MDBCol md="6" xl="5" className="mb-4">
			  <MDBCard id="classic-card">
				<MDBCardBody className="z-depth-2 indigo-text">
				  <h3 className="text-center">
					<MDBIcon icon="user" /> Login
				  </h3>
				  <hr className="hr-light" />

				  <form className="signup-form" onSubmit={this._handleSubmit}>
					<MDBInput 
				  	id="username" 
				  	label="Your name" 
				  	icon="user" 
		 				placeholder="Username" 
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
		 				value={this.state.password} />
					
					<div className="remember-me">
		 				<input type="checkbox"/>
		 				<span>Remember Me</span>
		 			</div>

					<div className="text-center mt-4 black-text">
						<MDBBtn color="indigo" type="submit">Login</MDBBtn>
						<hr className="hr-light" />
					</div>
				  	</form>
		 				<a href="#">Privacy Policy</a>
					<div className="register">
		 				<span>Don't have an account yet?</span>
						 <br />
		 				<Link to="/register">Register here!</Link>
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


export default Login;