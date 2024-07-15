import React from "react";
import Counter from "./Components/counter/Counter.jsx"
import Modal from "./Components/modal/App.jsx";
import Qiuz from "./Components/quiz/App.jsx"
import Users from "./Components/users/App.jsx"
import Converter from "./Components/converter/App.jsx"
import Photos from "./Components/photos/App.jsx"
import Todo from "./Components/todo/App.jsx"
import "./Components/users/index.scss"
const App = () => {
	return (
		<>
			{/* <Counter/> */}
			{/* <Modal/> */}
			{/* <Qiuz/> */}
			{/* <Users/> */}
			{/* <Converter/> */}
			<Photos />
			{/* <Todo/> */}
		</>
	)
}

export default App