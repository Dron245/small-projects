import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Block } from './Block.jsx';
import './index.scss';

import axios from "axios";


function App() {
	const [list, setlist] = useState([])
	const [curFrom, setCurFrom] = useState('rub')
	const [curTo, setCurTo] = useState('usd')
	const [inFrom, setInFrom] = useState(1) // значение в левом инпуте
	const [inTo, setInTo] = useState(0)	// значение в правом инпуте
	// console.log(inFrom);
	// const ref = useRef({rub:85,usd:1,eur:95,gbp:101})
	// const ref = useRef({})
	useEffect(() => {
		async function fethdata() {
			try {
				// ref.current = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
				// ref.current = await axios.get('https://reqres.in/api/users')
				const res = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
				setlist(res.data.usd)
				// console.log(ref.current);
			} catch (error) {
				console.log(error);
				console.log("не получилось");
			}
		}
		fethdata()
		}
	,[])
	console.log(list)
	const onChangeFromValue = (value) => {
		// const result = inFrom * ref.current.data.usd[curFrom]
		// console.log(ref.current[curTo]);
		// const result = (value / ref.current[curFrom]) * ref.current[curTo]
		const result = (value / list[curFrom]) * list[curTo]
		setInTo(result)
		setInFrom(value)
	}
	const onChangeToValue = (value) => {
		// const result = (ref.current[curFrom] / ref.current[curTo]) * value
		const result = (list[curFrom] / list[curTo]) * value
		setInFrom(result)
		setInTo(value)
	}

	useEffect(() => {
		onChangeFromValue(inFrom)
	}, [curTo]);

	useEffect(() => {
		onChangeToValue(inTo)
	}, [curFrom]);
  return (
    <div className="Appc">
      <Block 
		value={inFrom} 
		currency={curFrom} 
		onChangeValue={onChangeFromValue} 
		onChangeCurrency={(cur) =>setCurFrom(cur)} />
      <Block 
		value={inTo} 
		currency={curTo} 
		onChangeValue={onChangeToValue} 
		onChangeCurrency={(cur) =>setCurTo(cur)} />
    </div>
  );
}

export default App;