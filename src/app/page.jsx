"use client";
import Calendar from "./components/Calendar.jsx";
import Submit from "./components/Submit.jsx";
// import Test from "./components/Test.jsx";

export default function Home() {
	return (
		<div>
			<h1 className="diary">Diary</h1>

			<Calendar />
			<Submit />
			{/* <Test /> */}
		</div>
	);
}
