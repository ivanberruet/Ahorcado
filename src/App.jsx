import React, {useState} from 'react'
import Game from './containers/Game'
import Home from './containers/Home'

const App = () => {
const [gameOn, setGameOn] = useState(false)

return (
		<div className='App'>
			{gameOn
			? <Game setGameOn={setGameOn} />
			: <Home setGameOn={setGameOn} />
			}
		</div>
	)
}

export default App
