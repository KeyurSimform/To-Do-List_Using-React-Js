import React, { Component } from "react";
import "./App.css";
import { NodeList } from "./components/node-list/node-list.component";
import {ToDo} from "./components/To_Do/to-do.componenet"

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [
        {
          noteName: "Today's Set-Up",
          noteId: "n1",
          isActive: "",
        },
        {
          noteName: "Today's agenda",
          noteId: "n2",
          isActive: "",
        },
        {
          noteName: "yesterday's work review",
          noteId: "n3",
          isActive: "",
        },
        {
          noteName: "Learning Topics",
          noteId: "n4",
          isActive: "",
        },
        {
          noteName: "Implementations",
          noteId: "n5",
          isActive: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">

        <ToDo notes = {this.state.notes}></ToDo>
        
      </div>
    );
  }
}
export default App;
