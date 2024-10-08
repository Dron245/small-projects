import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './dropmenu.scss';
import MenuItem from './Menu-item.jsx';
const Dropmenu = () => {
	const [load, setLoad] = useState(true);
	const [list, setlist] = useState([]);
	const [dropdown, setdropdown] = useState(false);
	const [searchvalue, setsearchvalue] = useState('');
	
	useEffect(() => {
		//   console.log(list);
		async function fethdata() {
			try {
				setLoad(true);
				const resp = await axios.get('https://dummyjson.com/users?limit=100');
				setlist(resp.data.users.map((item) => item.firstName));

				setLoad(false);
			} catch (error) {
				setLoad(false);
				console.log(error);
			}
		}

		fethdata();
	}, []);

	function handle(e) {
		const querry = e.target.value
		setsearchvalue(querry)
		console.log(e);
		console.log(querry.length);
		if (querry.length > 1) {
			setdropdown(true)
		}	else {
			setdropdown(false)
		}
	}

	function search(e) {
		setsearchvalue(e.target.innerText)
		setdropdown(false)
	}
	return (
		<div className='dropmenu'>
			{load ? (
				<p>Загрузка...</p>
			) : (
				<div className='dropmenu__container'>
					<input
						value={searchvalue}
						onChange={handle}
						type='text'
						className='dropmenu__input'
					/>
					{dropdown && (
						<ul className='dropmenu__list'>
							{/* {console.log(list)} */}
							{list
								.filter((item) => item.toLowerCase().includes(searchvalue.toLowerCase()))
								.map((item, index) => (
									// <li onClick={(e) => search(e)} className='dropmenu__item' key={i}>
									// 	{item}
									// </li>
									<MenuItem key={index} search={search} i={item}/>
								))}
						</ul>
					)}
				</div>
			)}
		</div>
	);
};

export default Dropmenu;
