import React, { useState, useEffect } from "react";
import "./index.scss";
const App = () => {
	const [type, setType] = useState('hex');
	const [color, setcolor] = useState("#000000");

	const random = (length) => {
		return Math.floor(Math.random()*(length))
	}
	const generate = () => {
		if (type==='hex') {
			const hex = [0,1,2,3,4,5,6,7,8,9,'A', 'B','C','D','E','F']
			let hexResult = '#'
			for (let i = 0; i < 6; i++) {
				let element = hex[ random(hex.length)];
				console.log(element);
				hexResult +=element
			}
			setcolor(hexResult)
		} else if (type==='rgb') {
			const r = random(256);
			const g = random(256);
			const b = random(256);
			setcolor(`#${r}${g}${b}`)
		}
	}
	
	const changeHex = () => {
		setType('hex')
	}
	const changeRgb = () => {
		setType('rgb')
	}
	useEffect(() => {
		generate()
	
	 
	}, [type])
	
	
	return (
		<div style={{ background: color }} className="wrapper-control">
			<h1>Получился цвет: {type === 'hex' ? 'hex' : 'rgb'}</h1>
				<h3>{color}</h3>
			<div className="control">
				<button onClick={changeHex}>HEX</button>
				<button onClick={changeRgb}>RGB</button>
				<button onClick={generate}>сгенерировать</button>
			</div>
		</div>
	);
};

export default App;
