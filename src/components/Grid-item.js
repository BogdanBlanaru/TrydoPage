import React from "react";

import "../styled_components/Section3.css";

const GridItem = (props) => {
	return (
		<div className='services_item'>
			<div>
				<img src={props.image} alt={props.image} />
			</div>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</div>
	);
};

export default GridItem;
