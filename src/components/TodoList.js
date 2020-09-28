import React from "react";
import ModifyItem from "./ModifyItem";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <ul>
      {props.items.map((x, i) => {
        return <TodoItem item={x} removeItem={props.removeItem} index={i} />;
      })}
    </ul>
  );
}
