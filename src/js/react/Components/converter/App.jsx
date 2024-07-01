import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Block } from './Block.jsx';
import './index.scss';

import axios from "axios";


function App() {
	// const [list, setlist] = useState([])
	const [curFrom, setCurFrom] = useState('rub')
	const [curTo, setCurTo] = useState('usd')
	const [inFrom, setInFrom] = useState(0) // значение в левом инпуте
	const [inTo, setInTo] = useState(0)	// значение в правом инпуте
	// console.log(inFrom);
	const ref = useRef({})
	// console.log(ref);
	useEffect(() => {
		async function fethdata() {
			try {
				ref.current = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
				console.log(ref.current);
				// console.log(resp);
				// setlist(ref.current.data.usd)
			} catch (error) {
				console.log(error);
			}
		}
		fethdata()
		}
	,[])
	
	const onChangeFromValue = (value) => {
		setInFrom(value);
		// setInTo(inFrom * 2)
		// console.log(inFrom);
		console.log(ref.current);
		const result = inFrom * ref.current.data.usd[curFrom]
		setInTo(result)
	}
	const onChangeToValue = (value) => {
		setInTo(value)
	}

	useEffect(() => {
		onChangeFromValue(inFrom)
		// console.log(inFrom);
	}, [inFrom]);
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