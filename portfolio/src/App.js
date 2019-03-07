import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
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
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />

        <SocialProfiles />
      </div>
    );
  }
}

export default App;
