import React from 'react';

function FirstComponent(props) {
  console.log('This is FirstComponent Props******', props.items)
  return (
    <>
      <h1>This is Our Listing Component</h1>
      <ul>
        {props.items.map((item, index) => {
        return <li key={index}>{props.items[index]}</li>
      })}
      </ul>
    </>
  )
}

export default FirstComponent