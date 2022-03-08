import React, { useState } from "react";

import "./addButton.style.css";

// import { AddIcon } from "../AddIcon/AddIcon.component";

// **************************************** This is the component to add the notes*****************************************************

export let AddButton = (props) => {
	const [AddIconButton, setAddIconButton] = useState(true);
	const [NewNoteName, setNewNoteName] = useState("");
// *****************************This will handle changing of the add button onclick**********
	let AddClickButton = () => {
		setAddIconButton(!AddIconButton);
		// ClickHandler = !ClickHandler
		console.log("add button clicked");
	};

	let OnChangeHandler = (event) => {
		setNewNoteName(event.target.value);
	  };

// ***********This will sense the key press when the input text area is opened******
	const KeyHandler = (event) => {
		let UserInput = event.target.value;
		console.log(UserInput);
		if (event.key === "Enter") {
		  if (UserInput.length === 0) {
			alert("Opps!! please add some note");
		  } else {
			// let NewNote = UserInput;	
			props.addNewNote(UserInput);
			AddClickButton();
			// console.log("keyhandler");

		  }
		}
		else if(event.key === "Escape"){
			AddClickButton();
			// console.log("esc");
		}
	  };
    
	return (
		<>
			{AddIconButton && (
				<div className="plus-container" onClick={AddClickButton}>
					<p className="plus">+</p>
				</div>
			)}
			{AddIconButton === false && (
				<div>
					<input
						className="add-input"							
						type="text"
						placeholder="Add your task here"
						value={NewNoteName}
						onChange={OnChangeHandler}
						onKeyUp={KeyHandler}
					/>  
				</div>
			)}
		</>
	);
};
