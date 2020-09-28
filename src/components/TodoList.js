import React from "react";
import ModifyItem from "./ModifyItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        <ModifyItem />
      </ul>
    );
  }
}

export default TodoList;
