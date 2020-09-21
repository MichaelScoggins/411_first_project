import React, { Component } from 'react';

class FirstComponent extends Component {
  render() {
    return (
      <>
        <h1>This is Our Listing Component</h1>
        <ul>
          {this.props.items.map((item, index) => {
          return <li key={index}>{this.props.items[index]}
            <button onClick={this.props.delItem.bind(this, this.props.items[index])}>X</button>
          </li>
        })}
        </ul>
      </>
    )
  }
}

export default FirstComponent