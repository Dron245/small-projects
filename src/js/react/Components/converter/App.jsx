import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Block } from './Block.jsx';
import './index.scss';

import axios from "axios";


function App() {
	// const [rates, setrates] = useState([])
	const [fromCurency, setfromCurency] = useState('rub')
	const [toCurency, settoCurency] = useState('usd')
	const [fromPrice, setfromPrice] = useState(1) // значение в левом инпуте
	const [toPrice, settoPrice] = useState(0)	// значение в правом инпуте
	// console.log(fromPrice);
	// const ref = useRef({rub:85,usd:1,eur:95,gbp:101})
	const ref = useRef({})
	useEffect(() => {
		// async function fethdata() {
		// 	try {
		// 		// ref.current = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
		// 		const res = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
		// 		setrates(res.data.usd)
		// 		console.log(res.data.usd);
		// 		onChangeToPrice(1)
		// 		// console.log(ref.current.data.usd[fromCurency]);

		// 		// console.log(ref.current);
		// 	} catch (error) {
		// 		console.log(error);
		// 		console.log("не получилось");
		// 	}
		// }
		// fethdata()

		fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
		.then((res) => res.json())
		.then((json)=>{
			ref.current=json.usd
			onChangeToPrice(1)
			console.log(ref.current);
		})
		.catch((error)=>{console.log(error); 
				console.log('error')})
	}
	,[])
	// console.log(rates)
	// console.log(ref.current)
	const onChangeFromPrice = (value) => {
		const result = (value / ref.current[fromCurency]) * ref.current[toCurency]
		// const result = (value / rates[fromCurency]) * rates[toCurency]
		settoPrice(result.toFixed(3))
		setfromPrice(value)
	}
	const onChangeToPrice = (value) => {
		const result1 = (ref.current[fromCurency] / ref.current[toCurency]) * value
		// const result1 = (rates[fromCurency] / rates[toCurency]) * value
		setfromPrice(result1.toFixed(3))
		settoPrice(value)
	}

	useEffect(() => {
		onChangeFromPrice(fromPrice)
	}, [fromCurency, fromPrice]);

	useEffect(() => {
		onChangeToPrice(toPrice)
	}, [toCurency, toPrice]);
  return (
    <div className="Appc">
      <Block 
		value={fromPrice} 
		currency={fromCurency} 
		onChangeValue={onChangeFromPrice} 
		onChangeCurrency={(cur) =>setfromCurency(cur)} />
      <Block 
		value={toPrice} 
		currency={toCurency} 
		onChangeValue={onChangeToPrice} 
		onChangeCurrency={(cur) =>settoCurency(cur)} />
    </div>
  );
}

export default App;