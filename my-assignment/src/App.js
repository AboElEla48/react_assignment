import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {

  state = {
    nameState: 'Ahmed'
  };

/**
* Manipulate state button handler
*/
  manipulateStateHandler = (event) => {
    console.log('manipulateStateHandler clicked');
    this.setState({
      nameState: event.target.value
    });
  }

  render = () => {
    return (
      <div className="App">

        <UserInput
          userName ={this.state.nameState}
          changeProp = {this.manipulateStateHandler}/>

        <UserOutput
          userName ={this.state.nameState}/>

        <UserOutput
          userName ={this.state.nameState}/>

        <UserOutput
          userName ='Hamada'/>


      </div>
    );
  }
}

export default App;
