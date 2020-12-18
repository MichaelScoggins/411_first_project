import React from 'react'

export class TodoItem extends React.Component {
  state = {
    status: '',
  }

  changeStatus = (e) => {
    let status = this.state.status
    this.setState((e) => {
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
      <li key={this.props.index}>
        <span
          style={{ color: this.state.status }}
          onClick={this.changeStatus(this.props.index)}
        >
          {this.props.item}
        </span>
        <span>
          <button onClick={() => this.props.removeItem(this.props.index)}>
            X
          </button>
        </span>
      </li>
    )
  }
}

export default TodoItem
