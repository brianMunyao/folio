import React from 'react';
import { Link } from 'react-router-dom';

const AppBtn = ({ to, className, onClick, children }) => {
	if (to) {
		return (
			<Link to={to}>
				<span className={`app-btn ${className}`}>{children}</span>
			</Link>
		);
	} else {
		return (
			<span className={`app-btn ${className}`} onClick={onClick}>
				{children}
			</span>
		);
	}
};

export default AppBtn;
