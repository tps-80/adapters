import React, { Component } from 'react';
import './App.css';
class Laptop extends Component {

  render() {
    return (
      <div className="App-header">
        <p>
          Which laptop do you have?
        </p>
        <div onClick={this.logger}>
          MacBook Pro
        </div>
        <div onClick={() => this.deviceAdder("compy")}>
          Something Older
        </div>
      </div>
    );
  }
}

export default Laptop;
