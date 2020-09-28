import React from 'react'

export class TodoItem extends React.Component {
  render() {
    const { title, id } = this.props.item
    return (
      <p>
        { title }
        <button onClick={() => this.props.removeItem(id)}>X</button>        
      </p>
    )
  }
}

export default TodoItem
