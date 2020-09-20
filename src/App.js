import React, { Component }  from 'react';
import './App.css';
import FirstComponent from './firstComponent'

class App extends Component {
  state = {
      input: '',
      items: []
    }

  // toggle = () => {this.setState({isOn: !this.state.isOn})}

  inputUpdate = event => {this.setState({ input: event.target.value })}

  formSubmit = event => {
    event.preventDefault()
    console.log('*****THIS IS STATE*****', this.state.items)
    this.setState({
      items : [...this.state.items, this.state.input],
      input: ''
    })
  }  

  render() {
    console.log('*****THIS IS STATE*****', this.state.items)
    return (
      <div className="App">
        <h1>Hello Freak Bitches</h1>
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputUpdate}/>
          <button >Submit</button>
        </form>
        <FirstComponent items={this.state.items} />
      </div>
    );
  }
}

export default App;
