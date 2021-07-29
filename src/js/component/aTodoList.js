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
			<div className="row d-flex justify-content-center">
				<div className="col-12">
					<h1 className="todo-title text-center">todos</h1>
				</div>
				<div className="col-6">
					<div className="todo-list d-flex justify-content-center flex-column">
						<input
							type="text"
							onChange={e => setInput(e.target.value)}
							value={input}
							onKeyUp={e => {
								if (e.keyCode === 13 && input !== "") {
									setTodos([...todos, input]);
									setInput("");
								}
							}}
						/>

						<ul className="list text-center">
							{todos.map((task, index) => {
								return (
									<li key={index}>
										<div className="row">
											<div className="col">{task}</div>

											<div className="col">
												<button
													onClick={() => {
														const taskindex = todos.indexOf(
															task
														);
														if (index > -1) {
															todos.splice(
																taskindex,
																1
															);
															setTodos([
																...todos
															]);
														}
													}}>
													X
												</button>
											</div>
										</div>
									</li>
								);
							})}
							<li id="totaltasks">{todos.length} items left</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
