import React, { Component }  from 'react';
import './App.css';
import FirstComponent from './FirstComponent'

class App extends Component {
  state = {
      id: '1',
      input: '',
      items: []
    }

  // toggle = () => {this.setState({isOn: !this.state.isOn})}

  inputUpdate = event => {this.setState({ input: event.target.value })}
  delItem = id => {
    this.setState({ items: [...this.state.items.filter(item => item.id !== id)] }) 
  }

  formSubmit = event => {
    event.preventDefault()
    console.log('*****THIS IS STATE*****', this.state.items)
    this.setState({
      items : [...this.state.items, this.state.input, this.state.id++],
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
        <FirstComponent items={this.state.items} delItem={this.delItem} id={this.state.id}/>
      </div>
    );
  }
}

export default App;
