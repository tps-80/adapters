import React, { Component } from 'react';
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
        <div onClick={this.props.logger}>
          MacBook Pro
        </div>
        <div onClick={() => this.deviceAdder("compy")}>
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
