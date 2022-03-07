import React, { useState } from "react";

export const AddIcon = (props) => {
	return (
		<div>
				<div className="plus-container" onClick={props.AddIconButton}>
					<p className="plus">+</p>
				</div>
		</div>
	);
};
