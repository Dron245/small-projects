import React, { useState } from "react";

function Form({ inputValue, inputTask, addTodo }) {

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit} className="todo__form">
			<input
			 value={inputValue}
			  onChange={(e) => inputTask(e)}
			   className="todo__input"
				 type="text"
				 placeholder="Введите задачу" />
				<button 
				className="todo__add"
				onClick={addTodo}>
					<img src="./../../../../../img/add.svg"/>
				</button>
				 
		</form>
	);
}

export default Form;
