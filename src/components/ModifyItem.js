import React from 'react'
import TodoItem from './TodoItem'

export class ModifyItem extends React.Component {
  state = {
    input: '',
    items: [],
    idCounter: 1
  }

  removeItem = (id) => {
    this.setState(
      { items: [...this.state.items.filter(item => item.id !== id)] }
    )
  }

  renderItems = () => {
    return this.state.items.map(item => (
      <li key={this.state.items.id}>
        <TodoItem 
          item={item} 
          removeItem={this.removeItem}
        />
      </li>
    ))
  }

  onChange = event => {this.setState({ input: event.target.value })}

  onSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    this.setState({
      items: [...this.state.items, {id: this.state.idCounter, title: this.state.input}],
      idCounter: this.state.idCounter + 1,
      input: '',
    })
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
        {this.renderItems()}
      </div>
    )
  }
}

export default ModifyItem
