import React from 'react'
export default function Button () {
  //We first defined the handleClick function 
  function handleClick() {
    alert("You clicked me!")

  }
  
  return (
    //and then passed it as a prop to <button>. 
    //handleClick is an Event Handler (prop)
    //IMPORTANT: functions passed to event handlers must be passed, NOT called.
    //Below is an example of being passed
    <button onClick={handleClick}>
      Click me
      </button>
  )
}