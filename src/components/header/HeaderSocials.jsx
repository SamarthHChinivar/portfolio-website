import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiSololearn } from "react-icons/si";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/samarth-h-chinivar"
				target="_blank"
				rel="noopener noreferrer"
				title="Linkedin having 6K+ Followers"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/SamarthHChinivar"
				target="_blank"
				rel="noopener noreferrer"
				title="GitHub having 5k+ Views"
			>
				<BsGithub />
			</a>
			{/* <a href="https://www.sololearn.com/profile/6093118" target="_blank" rel="noopener noreferrer" title='Geeks for Geeks'><SiSololearn/></a> */}
		</div>
	);
};

export default HeaderSocials;
