import React from "react";
import './node-list.style.css';

import { ToDo } from "../To_Do/to-do.componenet";

export const NodeList = (props) => {


  return <div className="node-list-container">
             <div className="node-list"> 
             {/* {console.log(note)} */}
             {props.notes.map((note) => (
               <p key={note.noteId} >
               <i class="fa-solid fa-circle-check"></i>
                {note.noteName}
                {/* {console.log(note.isActive)} */}
               </p>
              ))}
          </div>
  </div>;
};
