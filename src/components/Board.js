import React from 'react';
import { Card } from './Card';
import '../styles/Board.css';
export const Board = (props) => {
	const { handleClick, totalCards } = props;
	return (
		<div className="board">
			{totalCards.map((card) => (
				<Card id={card} key={card} handleClick={handleClick} />
			))}
		</div>
	);
};
