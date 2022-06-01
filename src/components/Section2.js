import React from "react";

import About1 from "./about-1.jpg";
import "../styled_components/Section2.css";

const Section2 = () => {
	return (
		<div className='section2'>
			<div className='img_section2'>
				<img className='imagine' src={About1} alt='icon1' />
			</div>
			<div className='description_section2'>
				<div>
					<h1 className='title_section2'>About</h1>
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which dont look even slightly
						believable. If you are going to use a passage of Lorem Ipsum,
					</p>
				</div>
				<div className='subtitles'>
					<div>
						<h2 className='subtitle_section2'>Who we are</h2>
						<p>
							There are many vtions of passages of Lorem Ipsum available, but
							the majority have suffered.
						</p>
					</div>
					<div>
						<h2 className='subtitle_section2'>Who we are</h2>
						<p>
							There are many vtions of passages of Lorem Ipsum available, but
							the majority have suffered.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section2;
