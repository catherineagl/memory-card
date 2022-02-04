import React from 'react';

export const Card = (props) => {
	return (
		<div className="card" onClick={() => props.handleClick(props.id)}>
			card {props.id}
		</div>
	);
};
