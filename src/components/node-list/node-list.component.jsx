import React from "react";
import './node-list.style.css';


import NodeItem from "../NodeItem/NodeItem";

// **************************************** Outer most comopenent of the app*****************************************************

export const NodeList = (props) => {
// this component will map the notes list in the ToDo component
  return <div className="node-list-container">
             <div className="node-list"> 
             {/* {console.log(note)} */}
             {props.notes.map((note) => {
               return <NodeItem key= {note.noteId} noteName={note.noteName}></NodeItem>; /*Returning the component which will populate the notes in the todo list app */
             })}
          </div>
  </div>; 
};
