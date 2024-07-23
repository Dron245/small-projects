import React from 'react'
import data from './data.js'

import './index.scss'

import MenuList from './menu-list.jsx'

const ThreeMenu = () => {

  return (
	 <div className='Threecontainer'>
		{<MenuList
		menu = {data}
		/>}
		
	 </div>
  )
}

export default ThreeMenu