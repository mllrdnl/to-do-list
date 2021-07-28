import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export function ATodoList() {
	const [todos, setTodos] = useState([
		"walk the dogs",
		"feed the cats",
		"take out the trash"
	]);
	const [input, setInput] = useState("");

	return (
		<div className="container">
			<h1 className="todo-title">todos</h1>
			<div className="todo-list">
				<input
					type="text"
					onChange={e => setInput(e.target.value)}
					value={input}
					onKeyUp={e => {
						if (e.keyCode === 13 && input !== "")
							setTodos([...todos, input]);
						setInput("");
					}}
				/>

				<ul className="list">
					{todos.map((task, index) => {
						return (
							<li key={index}>
								{task}
								<button
									onClick={() => {
										const taskindex = todos.indexOf(task);
										if (index > -1) {
											todos.splice(taskindex, index);
										}
									}}>
									X
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
