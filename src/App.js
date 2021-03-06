import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Laptop from './Laptop';
import Desktop from './Desktop';

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
  {
    id: 3,
    type: "iPhone"
  },
]

const userDevice = {
    id: 1,
    type: "unknown",
};

function logger() {
  console.log("you clicked something")
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



  deviceAdder(deviceType) {
    // const updatedDevice = this.state.userDevice;
    // updatedDevice.type = type;
    // console.log("inside deviceAdder", updatedDevice)
    logger();
    this.setState({userDevice: { type: deviceType }})
    ReactDOM.render(<Laptop />,document.getElementById('body'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            This is the header
          </p>  
        </header>
        <body id="body" className="App-body">
          <p>
            Which device do you have?
          </p>
          <Device onClick={() => this.deviceAdder("lappy")} logger={this.logger}>
            Laptop
          </Device>
          <Device onClick={() => this.deviceAdder("compy")}>
            Desktop
          </Device>
        </body>
        <footer className="App-footer">
          <h3>You might have a <br/>
            {this.state.userDevice.type}
          </h3>
        </footer>
      </div>
    );
  }
}

class Device extends Component {
  render() {
    const {onClick,children} = this.props;    
    return(
      <div onClick={onClick}>{children}</div>
    )
  }
}

export default App;
export {Device}