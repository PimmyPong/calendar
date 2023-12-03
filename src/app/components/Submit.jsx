"use client";
import { useState } from "react";
import Day from "./Day.jsx";

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

	// Use the || operator to default to an empty string if the key doesn't exist
	const entry = diary[key] || { text: "", disabled: false };

	function handleClick(e) {
		e.preventDefault();

		setDiary((prevDiary) =>
			// Create a new object using the spread operator, updating the entry for the current date
			({ ...prevDiary, [key]: { ...entry, disabled: true } })
		);
	}

	return (
		<div>
			<textarea
				type="text"
				placeholder="Type something..."
				className={`text-box ${entry.disabled ? "blue-textarea" : ""}`}
				value={entry.text}
				onChange={(e) =>
					setDiary((prevDiary) => ({
						...prevDiary,
						[key]: { ...entry, text: e.target.value },
					}))
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
