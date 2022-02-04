import React from 'react';
import { HighScore } from './HighScore';
import { Score } from './Score';

export const Header = () => {
	return (
		<header>
			<h1>MARVEL MEMORY CARD</h1>
			<Score />
			<HighScore />
		</header>
	);
};
