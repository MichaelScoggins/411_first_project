import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  state = {
    input: '',
    items: [
      {
        id: 1,
        title: 'coding project',
        completed: false
      },
      {
        id: 2,
        title: 'sleep',
        completed: false
      }
    ]
  }
  
  removeItem = (id) => {
    this.setState(
      { items: [...this.state.items.filter(item => item.id !== id)] }
    )    
  }

  render() {
    return this.state.items.map(item => (
      <li>
        <TodoItem 
          key={this.state.items.id} 
          item={item} 
          removeItem={this.removeItem}          
        />
      </li>
    ))
  }
}

export default TodoList