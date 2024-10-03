import React, { useState } from 'react'
import MenuList from './menu-list.jsx'
import { FaPlus, FaMinus } from 'react-icons/fa'

const menuItem = ({item}) => {

	const [current, setCurrent] = useState({})

	function openSubMenu(getCurrent) {
		setCurrent(
			{...current,
			[getCurrent]: !current[getCurrent]}
		)
	}
	console.log(current)
  return (
	 <li className="menu-item">
		<div className="menu-item__wrapper">
			<p>{item.label}</p>
			{item && item.children ? 
			<span onClick={()=>openSubMenu(item.label)}>
			{
				current[item.label] ? <FaMinus color='red' size={20}/> :
				<FaPlus color='red' size={20}/>
			}
			</span> : null }
		</div>
		{
			item && item.children && current[item.label] ? 
			<MenuList
			menu = {item.children}
			/>
			: null
		}
	 </li>
  )
}

export default menuItem