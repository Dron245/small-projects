/** @format */

import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

function ProgressScroll() {
	const [list, setList] = useState([]);
	const [progress, setprogress] = useState();
	const [load, setload] = useState(true);

	useEffect(() => {
		async function fethdata() {
			try {
				const resp = await axios.get("https://dummyjson.com/products?limit=100");
				setList(resp.data.products);
				setload(false);
			} catch (error) {
				console.log(error);
			}
		}
		fethdata();
	}, []);

	function handleScrollPerc() {
		const height =
			document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrollTop = document.documentElement.scrollTop;
		const percentage = (scrollTop / height) * 100;
		console.log(height, scrollTop, percentage);
		setprogress(percentage);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScrollPerc);

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	return (
		<div className="progress">
			<h1 className="progress__title">Progress bar</h1>
			<div className="progress__bar-wrapper">
				<div style={{ width: progress + "%" }} className="progress__bar-body"></div>
			</div>
			{load ? (
				<p>загрузка...</p>
			) : (
				<div className="progress__content">
					{list.map((item) => (
						<p key={item.id} className="progress__item">
							{item.title}
						</p>
					))}
				</div>
			)}
		</div>
	);
}

export default ProgressScroll;
