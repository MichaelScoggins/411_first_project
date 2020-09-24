import React, { Component }  from 'react';
import './App.css';
import Header from './components/layout/Header'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />        
      </div>
    )
  }
}

export default App;