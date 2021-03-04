import React from 'react';
import NavBar from '../components/NavBar';

import '../styles/MainStyle.css';

const Main = () => {
	return (
		<div className="mainContainer">
			<div className="mainTop">
				<NavBar />
				<main>
					<div className="greeting">
						<span className="grey">Hi, my name is </span>
						<span>Brian</span>
					</div>
					<div className="greetingSub">
						<span className="grey">I am a </span>
						<span>Full Stack Web </span>
						<span className="grey">App and </span>
						<span>Mobile </span>
						<span className="grey">App Developer.</span>
					</div>
				</main>
				<div className="scrollDown">
					<div className="scroll">
						<span className="scrollText">scroll</span>
						<span className="scrollIcon">
							<i class="fas fa-arrow-down"></i>
						</span>
					</div>
				</div>
			</div>

			<div className="skills">,fkdj</div>
		</div>
	);
};

export default Main;
