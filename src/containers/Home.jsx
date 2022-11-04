import React from 'react'

import logo from "../assets/hang-man-logo.png"

function Home({setGameOn}) {

	function handleClick(){
		setGameOn(true)	
	}
	
	return (
		<div className='Home'>
			<img src={logo} alt="logo" className='logo' />
			<h1>Ahorcado</h1>
			<button onClick={handleClick} className='btn'>Jugar</button>
		</div>
	)
}

export default Home
