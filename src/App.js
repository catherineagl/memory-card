import React, { useState, useEffect } from 'react';

import './App.css';
import { Board } from './components/Board';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { helpHttp } from './helpers/helpHttp';
import uniqid from 'uniqid';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [loading, setLoading] = useState(false);
	const [totalCards, setTotalCards] = useState([]);
	const [cards, setCards] = useState([]);
	const [loser, setLoser] = useState(false);

	const randomArr = (ar) => ar.sort(() => Math.random() - 0.5);

	useEffect(() => {
		setTotalCards(randomArr(totalCards));
	}, [cards]);

	useEffect(() => {
		const fetchData = async () => {
			let url =
				'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10';
			setLoading(true);

			const res = await helpHttp().get(url);
			let data = [];

			res.forEach((el) => {
				data.push({ name: el.name, image: el.image, id: uniqid() });
			});

			setTotalCards([...data]);
			setLoading(false);
		};

		fetchData();
	}, []);

	const handleClick = (id) => {
		if (cards.find((el) => el === id)) {
			if (score > highScore) setHighScore(score);
			setScore(0);
			setCards([]);
			setLoser(true);
			return;
		} else {
			setLoser(false);
			setCards([...cards, id]);
			setScore(score + 1);
		}
	};

	return (
		<div className="App">
			{loser && <Modal />}
			{loading && <Loader />}
			<Header score={score} highScore={highScore} />
			<Board handleClick={handleClick} totalCards={totalCards} />
			<Footer />
		</div>
	);
}

export default App;
