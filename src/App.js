import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Laptop from './Laptop';

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
      page: 'home',
    };
  }

  logger() {
    console.log("you clicked something")
    ReactDOM.render(<Laptop />,document.getElementById('root'));
  }

  deviceAdder(deviceType) {
    // const updatedDevice = this.state.userDevice;
    // updatedDevice.type = type;
    // console.log("inside deviceAdder", updatedDevice)
    this.logger();
    this.setState({userDevice: { type: deviceType }})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            Which device do you have?
          </p>
          <Device/>
          <div onClick={this.logger}>
            Laptop
          </div>
          <div onClick={() => this.deviceAdder("compy")}>
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

class Device extends Component {
  render() {
    return(
      <div>My butt</div>
    )
  }
}

export default App;
export {Device}