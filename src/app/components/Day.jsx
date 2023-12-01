"use client";
import validator from "is-my-date-valid";

function leapYear(year) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

export default function Day({ day, setDay, month, year }) {
	const numDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var n = numDays[month];
	if (month == 1 /*february*/) {
		n = leapYear(year) ? 29 : 28;
	}
	const days = [];
	for (let i = 1; i <= n; i++) {
		const dayClass = i == day ? "selected-day" : "day";
		days.push(
			<div className={dayClass} onClick={() => setDay(i)}>
				<span>{i}</span>
			</div>
		);

		// how to  display the numbers 1 through the length of the array
		// numDays.map({i}); ??
		//numDays.push() ??
		// setDay();
	}

	return <div className="calendar">{days}</div>;
}
//  how to use month and year button control date?
//  leap year?
//  function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
