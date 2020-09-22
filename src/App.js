import React, { Component }  from 'react';
import './App.css';
import FirstComponent from './FirstComponent'

class App extends Component {
  state = {
      input: '',
      items: []
    }
  

  onChange = event => {this.setState({ input: event.target.value })}


  delItem = (key) => {
    this.setState({ items: [...this.state.items.filter((item, index) => index !== key)] }) 
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })
  }  

  render() {
    return (
      <div className="App">
        <h1>Hello Freak Bitches</h1>
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.onChange}/>
          <button >Submit</button>
        </form>
        <FirstComponent items={this.state.items} delItem={this.delItem}/>
      </div>
    );
  }
}

export default App;
