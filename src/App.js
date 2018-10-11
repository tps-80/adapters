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

const logger = function() {
  console.log("you clicked something")
  ReactDOM.render(<Laptop />,document.getElementById('root'));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDevices,
      userDevice,
      page: 'home',
    };
  }

  deviceAdder(type) {
    const updatedDevice = this.state.userDevice;
    updatedDevice.type = type;
    console.log("inside deviceAdder", updatedDevice)
    this.setState({userDevice: updatedDevice})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            Which device do you have?
          </p>
          <div onClick={logger}>
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

export default App;
