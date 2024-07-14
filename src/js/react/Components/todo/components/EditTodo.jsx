import React, {useState} from 'react'

const EditTodo = ({id, task, dellTodo, edit}) => {
	const [value, setvalue] = useState('') //текст в редактировании задачи
	edit(value, task.id);
	return (
		<>
		{console.log(task)}
			<input value={value} onChange={(e)=>setvalue(e.target.value)} type="text" className="todo__input" />
			{/* <div onClick={()=>compliteF(id)} className={`todo__task
				 ${complite ? 'complite' : ''}`} >{inputValue}</div> */}
			<button onClick={()=>edit(id, task)} type="button" className="todo__button edit">
				<img src="./../../../../../img/edit.svg" alt="" />
			</button>
			<button onClick={()=>dellTodo(id)} type="button" className="todo__button del">
				<img src="./../../../../../img/delete.svg" alt="" />
			</button>
		</>
		// </li>
	);
}

export default EditTodo