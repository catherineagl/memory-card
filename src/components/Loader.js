import React from 'react';
import icon from '../icono.png';
import '../styles/Loader.css';

export const Loader = () => {
	return (
		<div className="loader">
			<img className="img-loader" src={icon} alt="" />
		</div>
	);
};
