import React, { useState } from "react";

import "./addButton.style.css";

// import { AddIcon } from "../AddIcon/AddIcon.component";

// **************************************** This is the component to add the notes*****************************************************

export let AddButton = (props) => {
	const [AddIconButton, setAddIconButton] = useState(true);

	let AddClickButton = () => {
		setAddIconButton(!AddIconButton);
		// ClickHandler = !ClickHandler
		console.log("add button clicked");
	};

    
	return (
		<>
			{AddIconButton && (
				<div className="plus-container" onClick={AddClickButton}>
					<p className="plus">+</p>
				</div>
			)}
			{AddIconButton === false && (
				<div onClick={AddClickButton}>
					<input
						className={style.input}
						type="text"
						placeholder="Your Title..."
						value={enteredTitle}
						onChange={titleChangeHandler}
						onKeyUp={enterKeyHandler}
					/>  
				</div>
			)}
		</>
	);
};
