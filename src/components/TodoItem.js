import React from "react";

export class TodoItem extends React.Component {
  render() {
    return (
      <p>
        {this.props.item}
        <button onClick={() => this.props.removeItem(this.props.index)}>
          X
        </button>
      </p>
    );
  }
}

export default TodoItem;

// removeItem = (index) => {
//   this.setState({
//     items: [...this.state.items.filter((item, i) => item[i] !== index)],
//   });
// };
