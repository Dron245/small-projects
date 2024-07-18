/** @format */

import React from 'react';
import { FaStar } from 'react-icons/fa';
import './index.scss';
import { useState } from 'react';

const Star = () => {
	const [click, setClick] = useState(0);
	const [hover, setHover] = useState(0);

	function clickRaiting(index) {
		setClick(index)
	}

	function moveRaiting(index) {
		setHover(index)
	}

	function leaveRaiting() {
		setHover(0)
	}
	return (
		<div>
			{[...Array(5)].map((_, index) => (
				<FaStar
					className={index+1 <= (hover || click) ? 'active' : 'noactive'}
					key={index}
					size={50}
					onClick={() => clickRaiting(index+1)}
					onMouseMove={() => moveRaiting(index+1)}
					onMouseLeave={() => leaveRaiting()}
				/>
			))}
		</div>
	);
};

export default Star;
