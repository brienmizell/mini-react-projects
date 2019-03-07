import React, { Component } from "react";

class RegularClass {}
class ComponentClass extends Component {}

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
  }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Brien. I'm a software engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Decatur, GA. I code every day.</p>
            <p>
              My favoirte language is JavaScript, and I think React.js is
              awesome.
            </p>
            <p>Besides coding, I also love music, beer, sports and ramen!</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
