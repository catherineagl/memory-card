import React from 'react';
import { HighScore } from './HighScore';
import { Score } from './Score';
import '../styles/Header.css';
export const Header = (props) => {
	const { score, highScore } = props;
	return (
		<header>
			<h1>The Rick & Morty Memory Game</h1>
			<Score score={score} />
			<HighScore highScore={highScore} />
		</header>
	);
};
