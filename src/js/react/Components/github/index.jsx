import React from 'react'
import { useState, useEffect } from "react"
import User from "./User.jsx"
import "./index.scss"
import axios from "axios";

const Github = () => {

	const [loading, setloading] = useState(true)
	const [user, setuser] = useState('Dron245')
	const [searchValue, setsearchValue] = useState('')
	console.log(searchValue, user);
	useEffect(() => {
		async function fethdata () {
			try {
				// setloading(true)
				const resp = await axios.get(`https://api.github.com/users/${user}`)
				setuser(resp.data)
				setloading(false)
			} catch (error) {
				console.log(error);
			}
		}
		fethdata()
	}, [user])
	
	function handleSearch() {
		setuser(searchValue)
		console.log(user);
	}
	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			// setsearchValue(e.target.value)
			setuser(e.target.value)
		}
	}
  return (
	 <div>
		<div className="github">
			<div className="github__container">
				<div className="github__control">
					<input onKeyDown={handleKeyPress} value={searchValue} onChange={(e)=> setsearchValue(e.target.value)} 
						placeholder='Имя пользователя' className='github__input' type="text" />
					<button onClick={handleSearch} className='github__button'>Поиск</button>
				</div>
				<div className="github__content">
					{loading ? <p>Загрузка...</p> : (
						<User data={user}/>
					)}
				</div>
			</div>
		</div>
	 </div>
  )
}

export default Github