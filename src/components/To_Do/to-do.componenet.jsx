import React from "react";

import "./to-do.style.css"
import { NodeList } from "../node-list/node-list.component";

export const ToDo = (props) => {
    return <div className="to-do">
        <NodeList notes={props.notes}>
        </NodeList>
    </div>
}