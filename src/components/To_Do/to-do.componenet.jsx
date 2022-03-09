import React from "react";
import { CurrentDate } from "../NotesHeader/header.component";
import "./to-do.style.css"
import { NodeList } from "../node-list/node-list.component";
import { AddButton } from "../Add_Button/addButton.component";
import PropTypes from 'prop-types'

// **************************************** outer most component which will hold all other components*****************************************************

export const ToDo = (props) => {
    return <div className="to-do">
    {/* This Current Date */}
        <CurrentDate>
        </CurrentDate>
        <NodeList notes={props.notes}>
        </NodeList>
        <AddButton notes={props.notes} addNewNote={props.addNewNote}></AddButton>
    </div>
}                                     

ToDo.propTypes = {
    notes: PropTypes.array,
    addNewNote: PropTypes.func
}