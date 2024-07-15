/** @format */

import React, { useState,useEffect } from 'react';
import './index.scss';
import Todo from './components/Todo.jsx';
import Form from './components/Form.jsx';
import EditTodo from './components/EditTodo.jsx';
const App = () => {

	const [todos, settodos] = useState([]);
	const [inputValue, setInputValue] = useState('');

	// useEffect(() => {
	// 	setInputValue(JSON.parse(window.localStorage.getItem('inputValue')));
	// }, []);
	// useEffect(() => {
	// 	window.localStorage.setItem('inputValue', inputValue);
	//  }, [inputValue]);
	const task = {
		id: Math.floor(1000 + Math.random() * 9000),
		task: inputValue,
		complite: false,
		edit: false,
	};

	const inputTask = (e) => {
		setInputValue(e.target.value);
	};

	const addTodo = () => {
		if (inputValue) {
			settodos((prew) => [...prew, task]);
			setInputValue('');
			console.log(task);
		}
	};

	const dellTodo = (id) => {
		settodos(todos.filter((todo) => todo.id !== id));
	};

	const compliteF = (id) => {
		settodos(
			todos.map(todo => todo.id === id ?
				{...todo, complite:!todo.complite} : todo)
		);
	};

	const editTodo = (id) => {
		settodos(
			todos.map(todo => todo.id === id ?
				{ ...todo, edit: !todo.edit } : todo)
		);
	};

	const edit = (id, task) => {
		settodos(
			todos.map(todo => 
				todo.id === id ?
				{ ...todo, task, edit: !todo.edit } : todo)
		);
	};

	return (
		<div className='page'>
			<div className='page__container todo'>
				<div className='todo__wrapper'>
					{todos.length === 0 ?
						<h1 className='todo__title'>Нет никаких дел</h1>:
						<h1 className='todo__title'>Количество дел: {todos.length}</h1>
					}
					<Form
						id={task.id}
						inputValue={inputValue}
						addTodo={addTodo}
						inputTask={inputTask}
					/>
					<ul className='todo__list'>
						{todos.map((todo) =>
							todo.edit ? (
								<li className='todo__item' key={todo.id}>
									<EditTodo 
									id={todo.id} 
									inputValue={todo.task} 
									editTodo={edit}
									/>
								</li>
							) : (
								<li className='todo__item' key={todo.id}>
									<Todo
										id={todo.id}
										inputValue={todo.task}
										dellTodo={dellTodo}
										compliteF={compliteF}
										complite={todo.complite}
										editTodo={editTodo}
									/>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
