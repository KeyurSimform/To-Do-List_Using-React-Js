import React from 'react'
import { useState } from 'react';

// ***************** Node Item component which will render the note to the parent NodeList component ***************************************
const NodeItem = (props) => {

  const [task, settask] = useState(false);

  const taskComp = () =>{
    settask (!task)
  }
  // This will return the notes with the description in it.
  // Here by using the conditional redering i have changed the state of the notes from active to completed.
  return ( 
    <div>
    <p onClick={taskComp} className={`${task && "text-decoration-line-through text-muted"}`}>
      <i className={`${"fa-solid fa-circle-check"} ${task && "text-secondary"}`}></i>
        {props.noteName}
        {/* {props.noteId} */}
    </p> 
 </div>
  )
}

export default NodeItem