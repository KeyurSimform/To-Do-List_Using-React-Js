import React, { useState, useEffect } from "react";
import "./App.css";
import { ToDo } from "./components/To_Do/to-do.componenet";
// import { NodeList } from "./components/node-list/node-list.component";

let newTime;

let resetTime = "23:59:59";
// resetTime is the time when Todos will be reset 
const getTodos = () => {
	let ToDo = localStorage.getItem("ToDos");
	// console.log()
	if (ToDo) {
		return JSON.parse(localStorage.getItem("ToDos"));
	} else {
		return [];
	}
};

// getTodos function will set TodDOs to the local storage

function App() {
	// **************************************** main app as a class componenet*****************************************************
	const [notes, setnotes] = useState(getTodos());
	const [currentTime, setCurrentTime] = useState(newTime);


// This below function of useEffect will help to check the time to resest the ToDos when day Changes
	useEffect(() => {
		const timeInterval = setTimeout(() => {
			newTime = new Date().toLocaleTimeString();
			setCurrentTime(newTime);
		}, 1000);

		return () => {
			clearTimeout(timeInterval);
		};
	}, [currentTime]);

	useEffect(() => {
		const ToDosItem = localStorage.getItem("ToDos");
		if (currentTime !== resetTime) {
			setnotes(JSON.parse(ToDosItem));
		} else {
			setnotes([]);
			localStorage.removeItem("ToDos");
		}
	}, [currentTime]);
// This Add new note is the function passed via props to the addButton to get the input given by the uset to set the ToDos.
	let addNewNote = (NewNote) => {
		// console.log("Hey we got the new note" + NewNote);

		const addNote = {
			noteName: NewNote,
			noteId: parseInt(notes.length + 1),
		};
		setnotes([...notes, addNote]);
		console.log(addNote);
	};

//  This below UseEffect will allow to set the ToDos, to the local storage

	useEffect(() => {
		localStorage.setItem("ToDos", JSON.stringify(notes));
	}, [notes]);

	// **************************************** main app rendering*****************************************************

	return (
		<div className="App">
			<ToDo notes={notes} addNewNote={addNewNote}></ToDo>
		</div>
	);
}

export default App;
