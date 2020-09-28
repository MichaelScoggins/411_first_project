import React from 'react'

export class TodoItem extends React.Component {
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
    status: 'red',
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
    const status = this.state.status
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

  renderTodos = () => {
    return this.state.items.map((x, i) => (
      <li key={i}>
        <span style={{ color: this.state.status }}>{x.title}</span>

        <button onClick={() => this.removeItem(i)}>X</button>
      </li>
    ))
  }

  render() {
    return (
      <div>
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

        <ul onClick={() => this.changeStatus()}>{this.renderTodos()}</ul>
      </div>
    )
  }
}

export default TodoItem
