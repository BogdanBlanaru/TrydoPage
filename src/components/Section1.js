import React from "react";

import Icon1 from "./icon-01.png";
import Icon2 from "./icon-02.png";
import Icon3 from "./icon-03.png";
import GridItem from "./Grid-item";
import "../styled_components/Section1.css";

const Section1 = () => {
	const cards = [
		{
			image: Icon1,
			title: "Business Strategy",
			description:
				"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		},
		{
			image: Icon2,
			title: "Website Development",
			description:
				"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		},
		{
			image: Icon3,
			title: "Marketing & Reporting",
			description:
				"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		},
		{
			image: Icon1,
			title: "Business Strategy",
			description:
				"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		},
	];
	return (
		<div className='section1'>
			<h1 className='h1_section1'>
				A DIGITAL
				<br />
				AGENCY.
			</h1>
			<div className='services'>
				<GridItem
					image={cards[0].image}
					title={cards[0].title}
					description={cards[0].description}
				/>

				<GridItem
					image={cards[1].image}
					title={cards[1].title}
					description={cards[1].description}
				/>

				<GridItem
					image={cards[2].image}
					title={cards[2].title}
					description={cards[2].description}
				/>
			</div>
		</div>
	);
};

export default Section1;
