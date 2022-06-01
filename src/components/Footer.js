import React from "react";

import "../styled_components/Footer.css";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer_img'>
				<h4 className='footer_h4'>READY TO DO THIS</h4>
				<h2 className='footer_h2'>
					Let's get <br /> to work
				</h2>
				<button className='footer_btn'>CONTACT US</button>
			</div>
			<div className='contacts'>
				<div className='lists'>
					<div>
						<h3 className='footer_h3'>Quick Link</h3>
						<ul>
							<li>Work</li>
							<li>About</li>
							<li>Let's Talk</li>
						</ul>
					</div>
					<div>
						<h3 className='footer_h3'>Say Hello</h3>
						<ul>
							<li>admin@example.com</li>
							<li>hr@example.com</li>
							<li>hr@example.com</li>
						</ul>
					</div>
				</div>
				<p className='footer_p'>
					Copyright © 2021 Rainbow-Themes. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
