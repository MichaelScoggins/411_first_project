import React, { Component }  from 'react';
import './App.css';
// import FirstComponent from './firstComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOn: false 
    }
  }

  render() {
    return (
      <div className="App">
        <h1>First React Project</h1>
        <button>Submit</button>
      </div>
    );
    }
}

export default App;
