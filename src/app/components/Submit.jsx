"use client";
import { useState } from "react";
import Day from "./Day.jsx";

export default function Submit({ diary, setDiary, year, month, day }) {
	//add "" to convert the numerical values of year, month, and day to strings before concatenation.
	const key = "" + year + month + day;
	if (document.getElementById("note") && !(key in diary)) {
		document.getElementById("note").value = "";
	}

	// Use the || operator to default to an empty string if the key doesn't exist
	const entry = diary[key];
	
	function handleClick(e) {
		if (e.target.value) e.preventDefault();
		const text = document.getElementById("note").value;
		setDiary((prevDiary) =>
			// Create a new object using the spread operator, updating the entry for the current date
			({ ...prevDiary, [key]: text })
		);
	}

	return (
		<div>
			<textarea
				id="note"
				type="text"
				value={diary[key]}
				placeholder="Type something..."
				className={`text-box ${entry ? "turnBlue-textarea" : ""}`}
				disabled={entry}>
				{entry}
			</textarea>

			<br />

			<button className="submit" onClick={handleClick} disabled={entry}>
				Submit
			</button>
			{/* <button 
			id="edit-del"
			onClick={edit}
			disabled={entry.disabled}
			>Edit</button>
			<button 
			id="edit-del"
			onClick={edit}
			disabled={entry.disabled}
			>Delete</button> */}
		</div>
	);
}

/*code before prev//// export default function Submit({ diary, year, month, day }) {
	const key = "" + year + month + day;
	var text = diary.get(key) || "";

	function submit() {
		if (text) {
			console.log(text);
			diary.set(key, text);
		}
	}
	console.log(text);

	return (
		<div>
			<textarea onChange={(e) => (text = e.target.value)}>{text}</textarea>

			<br />

			<button className="submit" onClick={submit}>
				{text}
			</button>
		</div>
	);
}
*/
