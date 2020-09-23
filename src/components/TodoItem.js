import React from 'react'

export class TodoItem extends React.Component {
  render() {
    const { id, title } = this.props.item
    return (
        <p>
          { title }
          <button onClick={() => this.props.removeItem(id)}>X</button>
        </p>
    )
  }
}

export default TodoItem
