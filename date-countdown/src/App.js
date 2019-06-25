import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25, 2019",
      newDeadline: ""
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.changeDeadline();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <div className="ui form">
          <div
            className="field"
            onChange={event =>
              this.setState({ newDeadline: event.target.value })
            }
          >
            <div className="ui form" style={{ fontSize: "25px" }}>
              Enter a date:{" "}
            </div>
            <div className="ui large action input" style={{ width: "600px" }}>
              <input
                type="text"
                name="date"
                placeholder="December 25 2019"
                onChange={event =>
                  this.setState({ newDeadline: event.target.value })
                }
                onKeyPress={this.handleKeyPress}
              />
              <div
                class="ui primary button"
                onClick={() => this.changeDeadline()}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
