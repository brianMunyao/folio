import React, { useState } from 'react';

import AppBtn from './AppBtn';
import AppLink from './AppLink';

const NavBar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<nav className="topNav">
				<AppLink to="/" className="logo">
					breivaCo
				</AppLink>
				<div className="navs">
					<AppLink to="#" className="nav-link">
						Skills
					</AppLink>
					<AppLink to="#" className="nav-link">
						Projects
					</AppLink>
					<AppLink to="#" className="nav-link">
						About
					</AppLink>
					<AppLink to="#" className="nav-link">
						Contact
					</AppLink>
					<AppBtn to="#" className="nav-btn">
						Get in touch
					</AppBtn>
				</div>

				<AppLink
					className="burger"
					onClick={() => setSidebarOpen(true)}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</AppLink>
			</nav>

			<nav
				className="sideNav"
				style={
					sidebarOpen
						? { transform: 'translateX(0)' }
						: { transform: 'translateX(100%)' }
				}>
				<div className="sideNavTop">
					<AppLink
						className="sideNav-close"
						onClick={() => setSidebarOpen(false)}>
						<i class="fas fa-times"></i>
					</AppLink>
					<AppLink to="#" className="sidenav-link">
						Skills
					</AppLink>
					<AppLink to="#" className="sidenav-link">
						Projects
					</AppLink>
					<AppLink to="#" className="sidenav-link">
						About
					</AppLink>
					<AppLink to="#" className="sidenav-link">
						Contact
					</AppLink>
					<AppBtn to="#" className="sidenav-btn">
						Get in touch
					</AppBtn>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
