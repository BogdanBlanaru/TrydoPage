import React, { useState } from "react";

import "../styled_components/Section5.css";

const ImageSection5 = (props) => {
	const [hidden, setHidden] = useState("hidden");

	const mouseEnterHandler = () => {
		setHidden("");
	};
	const mouseLeaveHandler = () => {
		setHidden("hidden");
	};

	return (
		<>
			<div
				className='image_section5'
				onMouseEnter={mouseEnterHandler}
				onMouseLeave={mouseLeaveHandler}>
				<img src={props.image} alt='Image' className='img_section5' />
				<div className='inside_image5'>
					<h5 className='h5_section5'>{props.title}</h5>
					<h4 className='h4_section5'>{props.description}</h4>
					<button className={`btn-nav btn_section5 ${hidden}`}>
						READ MORE
					</button>
				</div>
			</div>
		</>
	);
};

export default ImageSection5;
