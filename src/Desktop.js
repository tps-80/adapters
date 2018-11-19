import React, { Component } from 'react';
import Device from './App';
import './App.css';

class Desktop extends Component {
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
          Which desktop do you have?
        </p>
        <div onClick={() => this.props.deviceAdder("MacBook Pro")}>
          Mac Pro
        </div>
        <div onClick={() => this.deviceAdder("Legacy")}>
          iMac
        </div>
      </div>
    );
  }
}

export default Desktop;