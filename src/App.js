import React, { useState, useEffect } from 'react';

import './App.css';
import { Board } from './components/Board';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [totalCards, setTotalCards] = useState([1, 2, 3, 4, 5]);
	const [cards, setCards] = useState([]);
	const [selectCard, setSelectCard] = useState('');

	const randomArr = (ar) => ar.sort(() => Math.random() - 0.5);

	useEffect(() => {
		setTotalCards(randomArr(totalCards));
	}, [cards]);

	const handleClick = (id) => {
		if (cards.find((el) => el === id)) {
			if (score > highScore) setHighScore(score);
			setScore(0);
			setCards([]);
			return;
		} else {
			setCards([...cards, id]);
			setScore(score + 1);
		}
	};
	return (
		<div className="App">
			<Header />
			<Board handleClick={handleClick} totalCards={totalCards} />
			<Footer />
		</div>
	);
}

export default App;
