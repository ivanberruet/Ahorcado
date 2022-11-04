import React, { useState, useEffect } from 'react'
import HangMan from '../components/HangMan'
import Keyboard from '../components/Keyboard'
import Word from '../components/Word'
import {alphabet} from '../utils/alphabet'
import Confetti from 'react-confetti'

const randomWord = require('random-spanish-words')

function Game({setGameOn}) {
	const gameWord = randomWord().normalize("NFD").replace(/[\u0300-\u0361]/, '').normalize()
	const [word, setWord] = useState(gameWord)
	const [err, setErr] = useState(0)
	const [corr, setCorr] = useState(0)
	
	useEffect(()=>{
		console.log("Word to guess: ",word);
	},[word])

	const keysArray = Array.from(alphabet)
	
	console.log("Correct: ",corr);
	console.log("Error: ",err);
	
	if(err === 7){
		const missingLetters = Array.from(document.querySelectorAll('.not_guessed'))
		missingLetters.map(item=>{
			item.style.color = '#FF8787';
		});
		keysArray.map(letter=>{
			let hastSuccess = document.getElementById(letter).classList.contains('success')
			let hastError = document.getElementById(letter).classList.contains('error')
			if (!hastSuccess && !hastError){
				document.getElementById(letter).classList.add('endgame');
			}
		})
	}
	if(corr === word.length){
		keysArray.map(letter=>{
			let hastSuccess = document.getElementById(letter).classList.contains('success')
			let hastError = document.getElementById(letter).classList.contains('error')
			if (!hastSuccess && !hastError){
				document.getElementById(letter).classList.add('endgame');
			}
		})
	}
return (
		<div className='Game'>
			{corr===word.length && <Confetti />}
			<HangMan err={err} />
			<Word word={word} />
			<Keyboard err={err} setErr={setErr} word={word} setCorr={setCorr} />
			{(corr===word.length || err===7) && <button onClick={()=>setGameOn(false)} className='btn'>Jugar de nuevo</button>}
		</div>
	)
}

export default Game
