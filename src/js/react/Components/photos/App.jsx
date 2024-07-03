import React, { useState, useEffect } from "react";
import "./index.scss";
import Collection from "./components/Collection.jsx";
import axios from "axios";

function App() {
	const [collections, setCollections] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	useEffect(() => {
		async function fethdata() {
			try {
				const res = await axios.get("https://66853f80b3f57b06dd4bf714.mockapi.io/photos");
				setCollections(res.data);
			} catch (error) {
				console.log(error);
				console.log("не получилось");
			}
		}
		fethdata();
	}, []);
	return (
		<div className="App">
			<h1>Моя коллекция фотографий</h1>
			<div className="top">
				<ul className="tags">
					<li className="active">Все</li>
					<li>Горы</li>
					<li>Море</li>
					<li>Архитектура</li>
					<li>Города</li>
				</ul>
				<input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
			</div>
			<div className="content">
				{collections.filter(collection=>collection.name.toLowerCase().includes(searchValue.toLowerCase()))
				.map((collection, index) => {
					return <Collection 
					name={collection.name}
					photos={collection.photos} 
					key={index} />;
				})}
			</div>
			<ul className="pagination">
				<li>1</li>
				<li className="active">2</li>
				<li>3</li>
			</ul>
		</div>
	);
}

export default App;
