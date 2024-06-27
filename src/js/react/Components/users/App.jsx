import React, { useEffect, useState } from "react";
import "./index.scss";
import { Success } from "./components/Succes.jsx";
import { Users } from "./components/users/Users.jsx";
import axios from "axios";
// Тут список пользователей: https://reqres.in/api/users

function App() {

	const [items, setItems] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [isloading, setIsloading] = useState(false);
	const [invite, setInvite] = useState([])
	const [sendInvite, setSendInvite] = useState(false)
	const [count, setCount] = useState(0)
	// const [invited, setInvited] = useState(false)
	let invited = false
	const inputSearch = (e) => {
		// console.log(e.target.value);
		setSearchValue(e.target.value)
	}
	console.log(invite);
	const buttonSendInvite = () => {
		setSendInvite(true)
	}

	// setFavorites(prev => prev.filter(item => Number(item.parendId) !== Number(obj.id)))

	const addInvite =  (id) => {
		if (invite.find(_id => _id === id)) {
			console.log(1);
			setInvite(prew => prew.filter( _id => _id !==id))
			// setInvited(false)
			invited=false
			setCount(count -1)
		} else {
			console.log(2);
			setInvite(prew => [...prew, id])
			// setInvited(true)
			invited=true
			setCount(count +1)
		}
		
	}

	// const invited = (id) => {
	// 	return items.some(item => item.id !== id)
	// }
	const changeCount = () => {

	}
	useEffect(() => {
		async function fethdata() {
			try {
				setIsloading(true)
				const resp = await axios.get('https://reqres.in/api/users')
				setItems(resp.data.data)
				setIsloading(false)
			} catch (error) {
				console.log(error);
				// alert('Не удалось выполнить запрос')
			}
		}
		fethdata()
	}
	,[])

	return (
		<div className="Appu">
			{!sendInvite ? <Users
				isLoading={isloading}
				searchValue={searchValue}
				inputSearch={inputSearch}
				items={items} 
				buttonSendInvite={buttonSendInvite}
				invite= {invite}
				addInvite={addInvite}
				invited={invited}
				/> :
				<Success 
				setSendInvite={setSendInvite} 
				count={count}/>
				}
			
		</div>
	);
}

export default App;
