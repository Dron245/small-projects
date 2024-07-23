import React from 'react'
import MenuItem from './menu-item.jsx'
const MenuList = ({menu}) => {
  return (
	 <ul className='menulist'>
		{menu.map((item, i) => (
			<MenuItem 
			key={i}
			item={item}
			/>
		))}
	 </ul>
  )
}

export default MenuList