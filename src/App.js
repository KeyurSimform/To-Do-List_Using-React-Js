import React, { useState } from "react";
import "./App.css";
import { ToDo } from "./components/To_Do/to-do.componenet";
import { NodeList } from "./components/node-list/node-list.component";

function App() {
	// **************************************** main app as a class componenet*****************************************************
	// constructor() {
	//   super();

	let addNewNote = (NewNote) => {
		console.log("Hey we got the new note" + NewNote);

		const addNote = [{
				noteName: NewNote,
				noteId: parseInt(notes.length + 1),
    }
		];
		setnotes([...notes, addNote]);
		console.log(addNote);
	};
	const [notes, setnotes] = useState([
		{
			noteName: "Today's Set-Up",
			noteId: 1,
		},
		{
			noteName: "Today's agenda",
			noteId: 2,
		},
		{
			noteName: "yesterday's work review",
			noteId: 3,
		},
		// {
		//   noteName: "Learning Topics",
		//   noteId: "n4",
		// },
		// {
		//   noteName: "Implementations",
		//   noteId: "n5",
		// },
		// {
		//   noteName: "Revision",
		//   noteId: "n6",
		// },
		// {
		//   noteName: "lookup for the doubts",
		//   noteId: "n7",
		// },
		// {
		//   noteName: "discussion with mentor for the doubts",
		//   noteId: "n8",
		// },
		// {
		//   noteName: "apply the solution for the doubts",
		//   noteId: "n9",
		// },
		// {
		//   noteName: "submiting the assignement",
		//   noteId: "n10",
		// }
	]);
	// }
	// **************************************** main app rendering*****************************************************
	// render() {
	return (
		<div className="App">
			<ToDo notes={notes} addNewNote={addNewNote}></ToDo>
		</div>
	);
	// }
}
export default App;
