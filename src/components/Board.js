import React from 'react';
import { Card } from './Card';
import '../styles/Board.css';
export const Board = (props) => {
	const { handleClick, totalCards } = props;

	return (
		<div className="board">
			{totalCards.map((card) => (
				<Card card={card} key={card.id} handleClick={handleClick} />
			))}
		</div>
	);
};
