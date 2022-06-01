import React from "react";

import SliderData from "./SliderData";
import ImageSlider from "./ImageSlider";
import "../styled_components/Section4.css";

const Section4 = () => {
	return (
		<div className='section4'>
			<div className='ourworks_section4'>
				<h1 className='h1_section4'>Our Works</h1>
				<p>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration.
				</p>
			</div>
			<ImageSlider slides={SliderData} />
		</div>
	);
};

export default Section4;
