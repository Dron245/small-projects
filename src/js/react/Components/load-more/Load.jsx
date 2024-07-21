import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
const Load = () => {
	const [loading, setloading] = useState(true)
	const [images, setImages] = useState([]);
	const [limit, setlimit] = useState(20)
	const [disabled, setdisabled] = useState(false)
	useEffect(() => {
		async function fethData() {
			try {
				setloading(true)
				const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=40&delay=100`);
				setImages(data.products);
				console.log(data);
				setloading(false)
			} catch (error) {
				console.log(error);
			}
		}

		fethData();
		limit === 60 && setdisabled(true)
	}, [limit]);
	
	return (
		<div className="container">
			{loading ? <div className="load">Загрузка...</div> : (
				<ul className="list">
				{images.map((image) => (
					<li className="item" key={image.id}>
						{
							<>
								<h2 className="title">{image.title}</h2>
								<p className="cost">{image.price}</p>
								<img className="img" src={image.thumbnail}></img>
							</>
						}
					</li>
				))}
			</ul>
			)}
			<button disabled={disabled} onClick={()=> setlimit(limit + 20)} className="button">Загрузить ещё</button>
			
		</div>
	);
};

export default Load;
