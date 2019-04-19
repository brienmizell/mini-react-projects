import React, { Component } from "react";
import Styles from "../styles/App.css";
import FooterPage from "./Footer";

import Login from "./Login";
import Register from "./Register";

import Home from "./HomeComponent";
import Locals from "./LocalComponent";
import States from "./StateComponent";
import Nationals from "./NationalComponent";
import Team from "./Team";
import Trello from "./Trello";
import Github from "./Github";
import About from "./About";
import Why from "./Why";

import LogoutButton from "./logoutButton";

import axios from "axios";

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  FormInline,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from "mdbreact";
import { MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  clickLogout = props => {
    return () => {
      axios.post("/api/logout").then(res => {
        props.history.push("/");
        this.setState({ isLoggedIn: false });
      });
    };
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  doLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  };

  componentDidMount() {
    axios.get("/api/verify").then(res => {
      if (res.data.user) {
        this.setState({ isLoggedIn: true }, () => {
          const user = res.data.user;
          sessionStorage.setItem("streetaddress", user.streetaddress);
          sessionStorage.setItem("currentstate", user.currentstate);
          sessionStorage.setItem("zipcode", user.zipcode);
          console.log("logged in");
        });
      } else {
      }
    });
  }

  render() {
    return (
      <div className="App bg">
        <Router>
          <>
            <Navbar color="transparent" dark expand="md">
              <NavbarBrand>
                <h2>
                <strong className="white-text">Polifactual</strong>
                </h2>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleCollapse} />
              <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <NavbarNav left>
                  <NavItem >
                    <NavLink to="/">Home</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to="/About">About</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to="/Why">Why</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to="/Github">Github</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to="/Trello">Trello</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to="/Team">Meet The Team</NavLink>
                  </NavItem>
                      {this.state.isLoggedIn ? (
                        <NavItem >
                      
                          <Dropdown>

                          <DropdownToggle nav caret> Representatives </DropdownToggle>
                          <MDBDropdownMenu className="dropdown-default" right>
                            <MDBDropdownItem href="/Local">Local</MDBDropdownItem>
                            <MDBDropdownItem href="/State">State</MDBDropdownItem>
                            <MDBDropdownItem href="/National">National</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </Dropdown>
                   
                        </NavItem>

                      ) : null}
                </NavbarNav>

                <NavbarNav right>
                  {this.state.isLoggedIn ? (
                    <LogoutButton clickLogout={this.clickLogout} />
                  ) : (
                    <div>
                      <Link to="/Register">
                        <MDBBtn
                          floating
                          color="indigo darken-4"
                          onClick={this.clickLogin}
                        >
                          Register
                        </MDBBtn>
                      </Link>
                      <Link to="/Login">
                      <MDBBtn
                        floating
                        color="indigo darken-4"
                        onClick={this.clickLogin}
                      >
                        Login
                      </MDBBtn>
                    </Link>
                    </div>
                  )}
                </NavbarNav>
              </Collapse>
            </Navbar>

            {/* ROUTES */}
            {/* <Route exact path="/" component={Home} /> */}
            <Route
              exact
              path="/"
              render={props => {
                return <Home clickLogout={this.clickLogout} {...props} />;
              }}
            />
            {/* <Route exact path="/Signup" component={Signup} /> */}
            <Route
              exact
              path="/Login"
              render={props => {
                return <Login doLoggedIn={this.doLoggedIn} {...props} />;
              }}
            />
            <Route
              path="/Register"
              render={props => {
                return <Register doLoggedIn={this.doLoggedIn} {...props} />;
              }}
            />
            <Route path="/About" component={About} />
            <Route path="/Why" component={Why} />
            <Route path="/Github" component={Github} />
            <Route path="/Trello" component={Trello} />
            <Route path="/Team" component={Team} />
            <Route exact path="/Local" component={Locals} />
            <Route exact path="/State" component={States} />
            <Route exact path="/National" component={Nationals} />
          </>
        </Router>

        {/* Footer */}
        <FooterPage />
      </div>
    );
  }
}

export default App;
