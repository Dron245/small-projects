import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";
import './slider.scss'
import Slide from './Components/Slide.jsx'
const Slider = () => {

	const [images, setImages] = useState([])
	const [current, setCurrent] = useState(1)
	console.log(images);
	useEffect(() => {
	  async function fethdata() {
		try {
			const {data} = await axios.get('https://66853f80b3f57b06dd4bf714.mockapi.io/photos')
			setImages(data)
		} catch (error) {
			return <div>{error.message}</div>
		}
	  }
	
	  fethdata()
	}, [])
	
	function slidePrew() {
		setCurrent(current === 1 ? images.length : current - 1)
	}

	function slideNext() {
		setCurrent(current === images.length ? 1 : current + 1)
	}
  return (
	 <div className="cntainer-main">
		<FaArrowLeft
			size={30}
			className='arrow arrow-prew'
			onClick={slidePrew}
		/>
		{images.map(
			(image, index) => 
			<Slide
				photo= {image.photos[0]}
				key={index}
				index={index}
				current={current}
				/>
		)}
		<FaArrowRight
			size={30}
			className='arrow arrow-next'
			onClick={slideNext}
		/>
		<div className="pagination">
			{[...Array(images.length)].map((_,index)=> (
				<div 
				key={index} 
				className={index+1 == current ? 'pag-item current' : 'pag-item'}
				>
				</div>
			))}
		</div>
	 </div>
  )
}

export default Slider