import React from 'react'
import ModifyItem from './ModifyItem'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  return (
    <ul>
      {props.items.map((x, i) => {
        return (
          <TodoItem
            item={x.title}
            removeItem={props.removeItem}
            index={i}
            changeStatus={props.changeStatus}
            status={props.items.status}
            state={props.state}
          />
        )
      })}
    </ul>
  )
}
