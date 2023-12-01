import { useState } from "react";
import "./App.css";

function getDaysInMonth(year, month) {
	return new Date(year, month + 1, 0).getDate();
}

function getDiary() {
	return new Map();
}

function App() {
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	const [year, setYear] = useState(now.getFullYear());
	const [month, setMonth] = useState(now.getMonth());
	const [day, setDay] = useState(now.getDate());
	const [diary, setDiary] = useState(getDiary());

	/**
	 * MonthPicker
	 */
	function MonthPicker() {
		function prev() {
			if (month > 0) {
				setMonth(month - 1);
			}
		}

		function next() {
			if (month < 11) {
				setMonth(month + 1);
			}
		}

		const monthName = new Date(year, month, 1).toLocaleString("default", {
			month: "long",
		});

		return (
			<div className="MonthPicker">
				<button onClick={prev}>&lt;</button>
				<span>{monthName}</span>
				<button onClick={next}>&gt;</button>
			</div>
		);
	}

	/**
	 * YearPicker
	 */
	function YearPicker() {
		return (
			<div className="YearPicker">
				<button onClick={() => setYear(year - 1)}>&lt;</button>
				<span>{year}</span>
				<button onClick={() => setYear(year + 1)}>&gt;</button>
			</div>
		);
	}

	/**
	 * DayPicker
	 */
	function DayPicker() {
		const days = [];
		const numDays = getDaysInMonth(year, month);
		for (let i = 1; i <= numDays; i++) {
			const className = day == i ? "DiaryDay" : "Day";
			days.push(
				<div className={className} onClick={() => setDay(i)}>
					<span>{i}</span>
					{diary.has("" + year + month + i) && <span>*</span>}
				</div>
			);
		}
		return <div className="DayPicker">{days}</div>;
	}

	/**
	 * DiaryNote
	 */
	function DiaryNote() {
		const date = "" + year + month + day;
		const [editing, setEditing] = useState(!diary.has(date));

		function submitNote() {
			if (text) {
				const updated = new Map(diary);
				updated.set(date, text);
				setDiary(updated);
				setEditing(false);
			}
		}

		function deleteNote() {
			const updated = new Map(diary);
			updated.delete(date);
			setDiary(updated);
			setEditing(true);
		}

		const disabled = diary.has(date) && !editing;
		var text = diary.get(date);

		return (
			<div className="DiaryNote">
				<textarea
					disabled={disabled}
					onChange={(event) => (text = event.target.value)}>
					{text}
				</textarea>
				<div>
					{disabled && <button onClick={() => setEditing(true)}>Edit</button>}
					{!disabled && <button onClick={submitNote}>Submit</button>}
					{diary.has(date) && <button onClick={deleteNote}>Delete</button>}
				</div>
			</div>
		);
	}

	return (
		<div className="App">
			<h1>Diary</h1>
			<MonthPicker />
			<YearPicker />
			<DayPicker />
			<DiaryNote />
		</div>
	);
}

export default App;
