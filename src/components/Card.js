import React from 'react';

export const Card = (props) => {
	const { card, handleClick } = props;
	return (
		<div className="card" onClick={() => handleClick(card.id)}>
			<img src={card.image} alt="character" />
			<h3>{card.name}</h3>
		</div>
	);
};
