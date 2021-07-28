import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export function TodoList() {
	const [todos, setTodos] = useState([
		"walk the dogs",
		"feed the cats",
		"take out the trash"
	]);
	const [input, setInput] = useState("");

	return (
		<div className="todo-container">
			<h1 className="title">todos</h1>
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

// const index = array.indexOf(5);
// if (index > -1) {
// 	array.splice(index, 1);
// }

//what components will you create?
//where will the to do tasks be stored?

// const AnyComponent = () => {
//     const [inputValue, setInputValue ] = React.useState('');

//     const validateInput = () => {
//       if(inputValue === "") alert("The input cannot be empty");
//       else alert("All perfect!");
//     };
//     return <div>
//         <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
//         <button onClick={validateInput}>Click to validate empty</button>
//     </div>;
// }
