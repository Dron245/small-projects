/** @format */

import React, { useState, useEffect } from 'react';
import './index.scss';
import Collection from './components/Collection.jsx';
import axios from 'axios';

const cats = ['Все', 'Горы', 'Море', 'Архитектура', 'Города'];
function App() {
	const [collections, setCollections] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [categories, setcategories] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	useEffect(() => {
		async function fethdata() {
			try {
				const categ = categories ? `&category=${categories}` : '';
				setIsLoading(true);
				const res = await axios.get(
					`https://66853f80b3f57b06dd4bf714.mockapi.io/photos?p=${page}&l=2${categ}&`
				);
				setCollections(res.data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				console.log('не получилось');
			}
		}
		fethdata();
	}, [categories, page]);
	return (
		<div className='App'>
			<h1>Моя коллекция фотографий</h1>
			<div className='top'>
				<ul className='tags'>
					{cats.map((item, index) => (
						<li
							onClick={() => setcategories(index)}
							className={categories === index ? 'active' : ''}
							key={index}
						>
							{item}
						</li>
					))}
				</ul>
				<input
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					className='search-input'
					placeholder='Поиск по названию'
				/>
			</div>
			{isLoading ? (
				<h3>Загрузка...</h3>
			) : (
				<div className='content'>
					{collections
					.filter(collection =>
							collection.name.toLowerCase().includes(searchValue.toLowerCase())
						)
					.map((collection, index) => {
						return (
							<Collection
								name={collection.name}
								photos={collection.photos}
								key={index}
							/>
						);
					})}
				</div>
			)}

			<ul className='pagination'>
				{[...Array(5)].map((it, i) => (
					<li
						key={i}
						onClick={() => setPage(i + 1)}
						className={page === i + 1 ? 'active' : ''}
					>
						{i + 1}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
