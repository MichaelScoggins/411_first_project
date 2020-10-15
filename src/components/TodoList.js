import React from 'react'
// import ModifyItem from './ModifyItem'
// import TodoItem from './TodoItem'

export default function TodoList(props) {
  const [status, changeStatus] = React.useState(props.status)
  const [id, setId] = React.useState(1)
  const [title, addTodo] = React.useState('')

  const handleClick = (e) => {
    changeStatus(
      status === 'red'
        ? 'yellow'
        : status === 'yellow'
        ? 'green'
        : status === 'green'
        ? 'red'
        : 'red'
    )
    // setId(e.currentTarget.id)
  }

  return (
    <ul>
      {props.items.map((x, i) => {
        return (
          <li key={i} id={i}>
            <button
              style={{ color:  }}
              onClick={() => handleClick(i)}
              id={i}
            >
              {x.title}
            </button>
            <span>
              <button onClick={() => this.props.removeItem(i)}>X</button>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
