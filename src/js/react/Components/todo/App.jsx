import React, { useState } from "react";
import "./index.scss";
import Todo from "./components/Todo.jsx";
import Form from "./components/Form.jsx";
import EditTodo from "./components/EditTodo.jsx";
// import Todos from "./components/Todos.jsx";
const App = () => {
	const [todos, settodos] = useState([]);
	const [inputValue, setInputValue] = useState("");
	
	const task = {
		id:Math.floor(1000 + Math.random() * 9000),
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
			setInputValue("");
			console.log(task);
		}
	};

	const dellTodo = (id) => {
		// console.log(id);
		settodos(todos.filter(todo=>todo.id !== id))
	}

	const compliteF = (id) => {
		console.log(id);
		settodos(todos.map(todo=>{
			if (todo.id === id) {
				// console.log(todo.complite);
				return {
					...todo, complite:!todo.complite
				}
			}
			console.log(todos);
			return todo
		}))
	}

	const editTodo = (id) => {
		settodos(todos.map(todo=> todo.id === id ? {...todo, edit:!todo.edit} : todo))
		// console.log(value);
		// console.log(task);
		// task.task = value
	}

	const edit = (id, task) => {
		settodos(todos.map(todo=> todo.id === id ? {...todo, task, edit:!todo.edit} : todo))
	}

	return (
		<div className="page">
			<div className="page__container todo">
				<div className="todo__wrapper">
					<h1 className="todo__title">Количество дел: {todos.length}</h1>
					<Form 
						inputValue={inputValue} 
						inputTask={inputTask} 
						addTodo={addTodo} 
					/>
					<ul className="todo__list">
						{todos.map((todo) => (
							todo.edit ? 
							<li className="todo__item" key={todo.id}>
								<EditTodo 
							id={todo.id}
							inputValue={todo.task} 
							// setInputValue={setInputValue}
							dellTodo={dellTodo}
							editTodo={edit}
							// value={value}
							// setvalue={setvalue}
							task={todo.task}
							/>
							</li>
								: (
									<li className="todo__item" key={todo.id}>
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
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
