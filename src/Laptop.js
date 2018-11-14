import React, { Component } from 'react';
import Device from './App';
import './App.css';

class Laptop extends Component {
  constructor(props) {
    super(props);
    const {userDevice} = this.props;
  }
  render() {
    return (
      <div className="App-header">
        <p>
          Which laptop do you have?
        </p>
        <div onClick={() => this.deviceAdder("MacBook Pro")}>
          MacBook Pro
        </div>
        <div onClick={() => this.deviceAdder("Legacy")}>
          Something Older
        </div>
        <h3>You might have a <br/>
          {this.userDevice}
        </h3>
      </div>
    );
  }
}

export default Laptop;
