import React, { Component } from "react";
import "./App.css";
import {ToDo} from "./components/To_Do/to-do.componenet"
import {NodeList} from "./components/node-list/node-list.component"


class App extends Component {

// **************************************** main app as a class componenet*****************************************************
  constructor() {
    super(); 
    
    this.state = {
      notes: [
        {                                                                
          noteName: "Today's Set-Up",
          noteId: "n1",
        },
        {
          noteName: "Today's agenda",
          noteId: "n2",
        },
        {
          noteName: "yesterday's work review",
          noteId: "n3",
        },
        {
          noteName: "Learning Topics",
          noteId: "n4",
        },
        {
          noteName: "Implementations",
          noteId: "n5",
        },
        {
          noteName: "Revision",
          noteId: "n6",
        },
        {
          noteName: "lookup for the doubts",
          noteId: "n7",
        },
        {
          noteName: "discussion with mentor for the doubts",
          noteId: "n8",
        },
        {
          noteName: "apply the solution for the doubts",
          noteId: "n9",
        },
        {
          noteName: "submiting the assignement",
          noteId: "n10",
        }
      ],
    };
  }
// **************************************** main app rendering*****************************************************
  render() {
    return (
      <div className="App">
        <ToDo notes = {this.state.notes}>
        </ToDo>
      </div>
    );
  }
} 
export default App;
