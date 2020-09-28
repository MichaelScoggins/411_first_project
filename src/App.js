import React, { Component } from 'react'
import './App.css'
import Header from './components/layout/Header'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    items: [
      {
        title: '1',
        id: '1',
        status: 'red',
      },
      {
        title: '2',
        id: '2',
        status: 'red',
      },
      {
        title: '3',
        id: '3',
        status: 'red',
      },
    ],
    input: '',
  }

  onChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.input],
      input: '',
    })
  }

  // removeItem = (index) => {
  //   this.setState({
  //     items: [...this.state.items.filter((x, i) => i !== index)],
  //   })
  // }

  removeItem = (index) => {
    const todos = this.state.items
    todos.splice(index, 1)
    this.setState({
      items: [...todos],
    })
  }

  changeStatus = () => {
    let status = this.state.status
    this.setState({
      status:
        status === 'red'
          ? 'yellow'
          : status === 'yellow'
          ? 'green'
          : status === 'green'
          ? 'red'
          : 'red',
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoItem />
      </div>
    )
  }
}

export default App
