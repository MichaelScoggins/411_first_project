import React, { Component } from 'react'

export class AddItem extends Component {

  onChange = event => {this.setState({ input: event.target.value })}

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })
  } 


  render() {
    return (
      <div className="App">
        <h1>Hello Freak Bitches</h1>
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.onChange}/>
          <button >Submit</button>
        </form>
      </div>
    )
  }
}

export default AddItem
