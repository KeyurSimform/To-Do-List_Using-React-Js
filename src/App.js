import React, { Component } from "react";
import "./App.css";
import {ToDo} from "./components/To_Do/to-do.componenet"
import {NodeList} from "./components/node-list/node-list.component"


class App extends Component {

  // taskComp()  {
  //   // this.setState({isActive:"ture"});
  //   console.log("hi");
  // }

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
        {
          noteName: "Implementations",
          noteId: "n6",
          isActive: "",
        },
        {
          noteName: "Implementations",
          noteId: "n7",
          isActive: "",
        },
        {
          noteName: "Implementations",
          noteId: "n8",
          isActive: "",
        },
        {
          noteName: "Implementations",
          noteId: "n9",
          isActive: "",
        },
        {
          noteName: "Implementations",
          noteId: "n10",
          isActive: "",
        }
      ],
    };
  }

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
