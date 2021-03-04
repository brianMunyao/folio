import React from 'react';
import { Link } from 'react-router-dom';

const AppLink = ({ to, onClick, className, children }) => {
	if (to) {
		return (
			<Link to={to}>
				<span className={`app-link ${className}`}>{children}</span>
			</Link>
		);
	} else {
		return (
			<span className={`app-link ${className}`} onClick={onClick}>
				{children}
			</span>
		);
	}
};

export default AppLink;
