/** @format */

import React, { useState } from 'react';
import data from './data.js';
import './accordion.scss';
import Item from './components/Item.jsx';

const Accordion = () => {
	const [select, setselect] = useState(null);
	const [single, setSingle] = useState(true);
	const [multi, setMulti] = useState([]);
	console.log(select, multi);

	const openSingle = (id) => {
		setselect(select === id ? null : id);
	};

	const openMulti = (id) => {
		let copy = [...multi];
		const del = copy.indexOf(id)

		if (copy.indexOf(id) === -1) copy.push(id)
		else copy.splice(del, 1)
		setMulti(copy);
	};

	const changeOpen = () => {
		setSingle(!single);
	};

	return (
		<div className='accordion'>
			<div className='accordion__wrapper'>
				<button onClick={changeOpen} className='accordion__button'>
					{single ? 'Одиночное открытие' : 'Мульти открытие'}
				</button>
				<div className='accordion__items'>
					{data && data.length > 0 ? (
						data.map((item) => (
							<Item
							key={item.id}
							// item={item}
							openSingle={openSingle}
							openMulti={openMulti}
							select={select}
							single={single}
							multi={multi}
							{...item}
							/>
						))
					) : (
						<div>Нет спойлеров </div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
