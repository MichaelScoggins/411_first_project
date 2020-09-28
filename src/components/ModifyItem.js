import React from "react";
import TodoItem from "./TodoItem";

export class ModifyItem extends React.Component {
  state = {
    input: "",
    items: [],
    idCounter: 1,
    status: "",
  };

  handleClick = () => {
    let status = this.state.status;
    this.setState({
      status:
        status === "red"
          ? "yellow"
          : status === "yellow"
          ? "green"
          : status === "green"
          ? "red"
          : "red",
    });
  };

  removeItem = (id) => {
    this.setState({
      items: [...this.state.items.filter((item) => item.id !== id)],
    });
  };

  onChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        {
          id: this.state.idCounter,
          title: this.state.input,
          status: "red",
        },
      ],
      idCounter: this.state.idCounter + 1,
      input: "",
    });
  };

  renderItems = () => {
    return this.state.items.map((item, index) => (
      <ul>
        <li
          key={item.id}
          style={{ color: this.state.status }}
          onClick={() => this.handleClick(index)}
        >
          <TodoItem item={item} removeItem={this.removeItem} />
        </li>
      </ul>
    ));
  };

  render() {
    return (
      <div>
        <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Add Todo ..."
            value={this.state.input}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
        {this.renderItems()}
      </div>
    );
  }
}

export default ModifyItem;
