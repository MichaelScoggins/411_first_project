import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    input: "",
  };

  onChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input],
      input: "",
    });
  };

  removeItem = (index) => {
    this.setState({
      items: [...this.state.items.filter((x, i) => i !== index)],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
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
        <div>
          <TodoList
            state={this.state}
            items={this.state.items}
            removeItem={this.removeItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
