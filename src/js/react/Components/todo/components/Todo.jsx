/** @format */

import React from 'react';

const Todo = ({ id, inputValue, dellTodo, compliteF, complite, editTodo }) => {
	return (
		<>
			<div
				onClick={() => compliteF(id)}
				className={`todo__task
				 ${complite ? 'complite' : ''}`}
			>
				{inputValue}
			</div>
			<button onClick={() => editTodo(id)} type='button' className='todo__button edit'>
				<img src='./../../../../../img/edit.svg' alt='' />
			</button>
			<button onClick={() => dellTodo(id)} type='button' className='todo__button del'>
				<img src='./../../../../../img/delete.svg' alt='' />
			</button>
		</>
	);
};

export default Todo;
