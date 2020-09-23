import React, { Component }  from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends Component {
  delItem = (key) => {
    this.setState({ items: [...this.state.items.filter((poop, index) => index !== key)] }) 
  }   

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
