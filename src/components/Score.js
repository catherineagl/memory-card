import React from 'react';

export const Score = (props) => {
	return (
		<div className="score">
			Score <span>{props.score}</span>
		</div>
	);
};
