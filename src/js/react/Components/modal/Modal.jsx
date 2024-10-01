import React from 'react';
import { useState } from 'react';

import './styleModal.scss';

function Modal({ openn, setOpen, children }) {
	return (
		<div className='App'>
			<button onClick={() => setOpen(true)} className='open-modal-btn'>
				✨ Открыть окно
			</button>
			<div className={`overlay animated ${openn ? 'show' : ''}`}>
				<div className='modal'>
					<svg onClick={() => setOpen(false)} height='200' viewBox='0 0 200 200' width='200'>
						<title />
						<path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
					</svg>
					<img src='https://randomwordgenerator.com/img/picture-generator/g131651ededd6d7f44ecef08d2e388516842cd6d8049831bbb50825b361c9439b8411ee3b0a988f7bf4195fa04ca97615_640.jpg' />
					{children}
				</div>
			</div>
		</div>
	);
}

export default function App() {
	const [open, setOpen] = useState(false);
	return (
		<Modal openn={open} setOpen={setOpen}>
			<div className='qwe'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit deserunt ea nulla nesciunt facilis
				laudantium expedita nisi dolor iste!
			</div>
		</Modal>
	);
}
