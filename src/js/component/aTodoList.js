import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export function ATodoList() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	React.useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/mllrdnl", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				if (resp.status === 404) {
					fetch(
						"https://assets.breatheco.de/apis/fake/todos/user/mllrdnl",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify([])
						}
					);
					return [];
				} else {
					return resp.json();
				}
			})
			.then(data => {
				//this is converting an array of objects to an array of labels
				setTodos(data.map(x => x.label)); //then we use the setTodos to replace the list of todos - this is how the "loading" part works
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	React.useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/mllrdnl", {
			method: "PUT",
			body: JSON.stringify(todos.map(x => ({ label: x, done: false }))),
			headers: {
				"Content-Type": "application/json"
			}
		});
	}, [todos]);

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
							placeholder="what needs done?"
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
