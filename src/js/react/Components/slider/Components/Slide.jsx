import React from 'react'

const Slide = ({photo, index, current}) => {
  return (
	 <div className={index+1===current ? 'slide-img view' : 'slide-img hidden'} >
		<img src={photo} alt="" />
	 </div>
  )
}

export default Slide