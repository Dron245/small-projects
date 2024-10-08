import React from 'react'
const MenuItem = ({search, i}) => {
  return (
	 <li onClick={search} className="dropmenu__item">{i}</li>
  )
}

export default MenuItem