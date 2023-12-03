"use client";
import { useState } from "react";

export default function Submit({
	diary,
	setDiary,
	year,
	month,
	day,
	setMarkedDay,
	markedDay,
}) {
	//add "" to convert the numerical values of year, month, and day to strings before concatenation.
	const key = "" + year + month + day;

	/*var text = diary.get(key);
		const text = diary[key] || "";
	*/

	// Use the || operator to default to an empty string if the key doesn't exist
	const entry = diary[key] || { text: "", disabled: false };

	/*
	if (entry !== undefined) {
		// The value is defined, you can use it here
		console.log("Diary entry for", key, ":", entry);
	} else {
		// The value is undefined, handle it as needed
		console.log("No diary entry found for", key);
	}

	*/
	/*The handleClick function now updates the state by
	creating a new object using the spread operator,
	ensuring that you preserve the existing entries
	and update the one for the current date.
	*/

	function handleClick(e) {
		e.preventDefault();

		// diary.set(key, text);
		setDiary((prevDiary) =>
			// new Map(prevDiary).set(key, text));
			// Create a new object using the spread operator, updating the entry for the current date
			({ ...prevDiary, [key]: { ...entry, disabled: true } })
		);
	}

	/*function textArea(){
		if (entry){
			const updated = new Map(diary);
				updated.set(date, text);
				setDiary(updated);
		}
	}
	*/

	return (
		<div>
			<textarea
				type="text"
				className={`text-box ${entry.disabled ? "blue-textarea" : ""}`}
				value={entry.text}
				onChange={(e) =>
					setDiary((prevDiary) =>
						// 	new Map(prevDiary).set(key, e.target.value))}
						({ ...prevDiary, [key]: { ...entry, text: e.target.value } })
					)
				}
				disabled={entry.disabled}></textarea>

			<br />

			<button
				className="submit"
				onClick={handleClick}
				disabled={entry.disabled}>
				Submit
			</button>
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
