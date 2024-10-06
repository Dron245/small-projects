import React, { useEffect, useState } from "react";
import "./users.scss";
import { Success } from "./components/Succes.jsx";
import { Users } from "./components/users/Users.jsx";
import axios from "axios";
// Тут список пользователей: https://reqres.in/api/users

function App() {

	const [items, setItems] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [isloading, setIsloading] = useState(true);
	const [invite, setInvite] = useState([])
	const [sendInvite, setSendInvite] = useState(false)
	console.log(invite);
	useEffect(() => {
		async function fethdata() {
			try {
				const resp = await axios.get('https://reqres.in/api/users')
				setItems(resp.data.data)
				console.log(resp.data.data);
				
				setIsloading(false)
			} catch (error) {
				console.log(error);
			}
		}
		fethdata()
		}
	,[])

	const inputSearch = (e) => {
		setSearchValue(e.target.value)
	}
	const buttonSendInvite = () => {
		setSendInvite(true)
	}

	const addInvite =  (id) => {
		if (invite.includes(id)) {
			setInvite(prew => prew.filter( _id => _id !==id))
		} else {
			setInvite(prew => [...prew, id])
		}
	}

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
				/> :
				<Success 
				setSendInvite={setSendInvite} 
				count={invite.length}
				items={items.length}
				/>
				}
		</div>
	);
}

export default App;
