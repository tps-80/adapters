import React, { Component } from 'react';
import Device from './App';
import './App.css';

class Laptop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const {userDevice,
           deviceAdder,
           logger} = this.props;
  }

  render() {
    return (
      <div className="App-body">
        <p>
          Which laptop do you have?
        </p>
        <div onClick={() => this.props.deviceAdder("MacBook Pro")}>
          MacBook Pro
        </div>
        <div onClick={() => this.deviceAdder("Legacy")}>
          Something Older
        </div>
      </div>
    );
  }
}

export default Laptop;
