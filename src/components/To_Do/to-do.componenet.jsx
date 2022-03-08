import React from "react";
import { CurrentDate } from "../NotesHeader/header.component";
import "./to-do.style.css"
import { NodeList } from "../node-list/node-list.component";
import { AddButton } from "../Add_Button/addButton.component";

// **************************************** outer most component which will hold all other components*****************************************************

export const ToDo = (props) => {
    return <div className="to-do">
        <CurrentDate>
            
        </CurrentDate>
        <NodeList notes={props.notes}>
        </NodeList>
        <AddButton notes={props.notes} addNewNote={props.addNewNote}></AddButton>
    </div>
}                                     