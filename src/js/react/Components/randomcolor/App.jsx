import React, { useState, useEffect } from "react";
import "./index.scss";
const App = () => {
	const [type, setType] = useState(null);
	const [color, setcolor] = useState("#000000");
	console.log(type)
	console.log(color);
	const generate = () => {
		if (type==='hex') {
			const hex = ['A', 'B','C','D','E','F']
			let hexResult = '#'
			for (let i = 0; i < 6; i++) {
				let element = hex[ Math.floor(Math.random()*hex.length)];
				console.log(element);
				hexResult +=element
			}
			setcolor(hexResult)
		} else if (type==='rgb') {
			const r = Math.floor(Math.random()*256)
			const g = Math.floor(Math.random()*256)
			const b = Math.floor(Math.random()*256)
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
				<h3>{type && type==='hex' ? `hex ${color}` : type==='rgb' ? `rgb ${color}` : null}</h3>
			<div className="control">
				<button onClick={changeHex}>HEX</button>
				<button onClick={changeRgb}>RGB</button>
				<button onClick={generate}>сгенерировать</button>
			</div>
		</div>
	);
};

export default App;
