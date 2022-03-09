import React from "react";

import "./header.style.css";
// **************************************** Header component to display the date*****************************************************

export const CurrentDate = () => {

	// This function will fetch the current date according to the system's date.
	
	let newDate = new Date();
	
	let date_raw = newDate.getDate();
	let month_raw = newDate.toLocaleString("en-us", {month:"short"});
	let year = newDate.getFullYear();
    // let day = newDate.getDate();
	let date, month;

	if (date_raw < 10) {
		date = "0" + date_raw.toString();
	} else {
		date = date_raw.toString();
	}
	if (month_raw < 10) {
		month = "0" + month_raw.toString();
	} else {
		month = month_raw.toString();
	}
	// props.dateChecker(date,month,year);
	return (
		// This will populate the date in the outer most component/
		<div className="header h-20">
			<div className="left-side">
				<div className="DateElem">
					<p className="date">{date}</p>
				</div>
				<div className="MonthYear">
					<p className="month">{month}</p>
					<p className="year">{year}</p>
				</div>
			</div>
			<div className="right-side">
				<p className="day">{newDate.toLocaleString('en-us', {  weekday: 'long' })}</p>
			</div>
		</div>
	);
};
