import React, { useState } from "react";
import "./index.scss";

const Theme = () => {
	const [theme, settheme] = useState(()=>{
		 const qwe = JSON.parse(localStorage.getItem('theme'))
		return qwe || 'light'}
	)
	console.log(theme);
	function changeTheme () {
		settheme(prew=> {
			const newTheme = prew ==='light' ? 'dark' : 'light'
			localStorage.setItem("theme", JSON.stringify(newTheme))
			return newTheme
		}
		)
	}

	return (
		<div className={theme==="light" ? 'theme light' : 'theme dark'} >
			<div className="theme__container">
				<p className="theme__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi, vero
					mollitia nostrum aperiam aliquid! Non asperiores similique aliquam quidem.
				</p>
				<input onChange={changeTheme} className="theme__input" type="checkbox" name="" id="" />
			</div>
		</div>
	);
};

export default Theme;
