/** @format */
import React from 'react';


const Item = ({question, answer, id, openSingle, openMulti, single, select, multi}) => {
	return (
		<div
			onClick={single ? () => openSingle(id) : () => openMulti(id)}
			className='accordion__item'
		>
			<h3 className='accordion__title'>{question}</h3>
			{single
				? select == id && <p className='accordion__text'>{answer}</p>
				: multi.indexOf(id) !== -1 && (
						<p className='accordion__text'>{answer}</p>
					)}
		</div>
	);
};

export default Item;
