import React from "react";
import { useState } from "react";

import "./style.scss"

export default function Counter () {
const [value, setvalue] = useState(0)

const fminus = () => {
	if (value>0) {
		setvalue(value - 1)
	}
	else return
}
const fplus = () => {
	setvalue(value +1)
}

	return (
		<main className="main">
			<h1 className="title">{value}</h1>
			<button onClick={fminus} className="button minus"> - </button>
			<button onClick={fplus} className="button plus"> + </button>
		</main>
	)
}