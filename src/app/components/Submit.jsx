//"use client";
import { useState } from "react";
export default function Submit({ diary, year, month, day }) {
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
