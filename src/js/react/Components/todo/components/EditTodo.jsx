/** @format */

import React, { useState } from 'react';

const EditTodo = ({ id, editTodo, inputValue }) => {
	const [value, setvalue] = useState(inputValue); //текст в редактировании задачи
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(id, value);
		editTodo(id, value);
	}
	return (
		<>
			<form onSubmit={handleSubmit} className="todo__form">
			<input
				value={value}
				onChange={(e) => setvalue(e.target.value)}
				type='text'
				className='todo__input'
			/>
			<button
				onClick={() => editTodo(id, value)}
				type='button'
				className='todo__button edit'
			>
				<img src='./../../../../../img/edit.svg' alt='' />
			</button>
			</form>
		</>
	);
};

export default EditTodo;
