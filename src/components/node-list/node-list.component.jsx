import React from "react";
import './node-list.style.css';

export const NodeList = (props) => {
  return <div className="node-list">
             {props.notes.map((note) => (
               <h1 key={note.noteId}>
                {note.noteName}
                {note.isActive}
            </h1>
          ))}
  </div>;
};
