import React, { Component } from 'react';

class FirstComponent extends Component {
  // console.log('This is FirstComponent Props******', this.props.items)
  render() {
    return (
      <>
        <h1>This is Our Listing Component</h1>
        <ul>
          {this.props.items.map((item, index) => {
          return <li key={index}>{this.props.items[index]}</li>
        })}
        <button onClick={this.props.delItem.bind(this, this.props.id)}>X</button>
        </ul>
      </>
    )
  }
}

export default FirstComponent