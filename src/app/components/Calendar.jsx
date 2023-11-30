"use client";

export default function Calendar() {
	return (
		<div>
			<div className="month">
				<button>{"<"}</button>
				<p>....</p>
				<button>{">"}</button>
            </div>

			<div className="year">
					<button>{"<"}</button>
					<p>.....</p>
					<button>{">"}</button>
			</div>

			
		</div>
	);
}
