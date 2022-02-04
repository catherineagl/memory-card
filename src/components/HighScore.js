import React from 'react';

export const HighScore = (props) => {
	return (
		<div className="score">
			High score <span>{props.highScore}</span>
		</div>
	);
};
