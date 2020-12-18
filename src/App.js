import React, { Component } from 'react'
import './App.css'
import Header from './components/layout/Header'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'click me',
        status: 'red',
      },
    ],
    input: '',
    counter: 2,
  }

  onChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      todos: [
        ...this.state.todos,
        {
          title: this.state.input,
          id: this.state.counter,
          status: 'red',
        },
      ],
      input: '',
      counter: this.state.counter + 1,
    })
  }

  removeItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((x, i) => i !== id)],
    })
  }

  handleClick = (todo) => {
    if (todo.status === 'red') {
      console.log('clicked!')
      todo.status = 'yellow'
    } else if (todo.status === 'yellow') {
      todo.status = 'green'
    } else if (todo.status === 'green') {
      todo.status = 'red'
    }
    console.log(todo.status)
    // todo.status =
    this.setState({ todos: this.state.todos })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            style={{ flex: '10', padding: '5px' }}
            placeholder="Add Todo ..."
            value={this.state.input}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>

        <ul>
          {this.state.todos.map((todo, idx) => {
            return (
              <li key={todo.id}>
                <span
                  onClick={(e) => this.handleClick(todo)}
                  style={{ color: todo.status }}
                  value={todo.id}
                  id={idx}
                >
                  {todo.title}
                </span>
                <span>
                  <button onClick={() => this.removeItem(idx)}>X</button>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
