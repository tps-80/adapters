import React, { Component } from 'react';
import './App.css';

const allDevices = [
  {
    id: 0,
    type: "Laptop",
  },
  {
    id: 1,
    type: "Desktop",
  },
  {
    id: 2,
    type: "iPad"
  },
]

const userDevice = {
    id: 1,
    type: "unknown",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDevices,
      userDevice,
    };
  }

  logger() { console.log("you clicked something") }
  deviceAdder(type) {
    console.log("inside deviceAdder", type)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            Which device do you have?
          </p>
          <div onClick={this.logger}>
            Laptop
          </div>
          <div onClick={() => this.deviceAdder("lappy")}>
            Desktop
          </div>
        </header>
        <h3>You might have a <br/>
          {this.state.userDevice.type}
        </h3>
      </div>
    );
  }
}

export default App;
