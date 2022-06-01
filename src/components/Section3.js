import React from "react";

import Icon1 from "./icon-01.png";
import Icon2 from "./icon-02.png";
import Icon3 from "./icon-03.png";
import GridItem from "./Grid-item";
import "../styled_components/Section3.css";

const Section3 = () => {
	const cards = [
		{
			image: Icon1,
			title: "Business Strategy",
			description:
				"I throw myself down among the tall grass by the stream as I lie close to the earth.",
		},
		{
			image: Icon2,
			title: "Website Development",
			description:
				"I throw myself down among the tall grass by the stream as I lie close to the earth.",
		},
		{
			image: Icon3,
			title: "Marketing & Reporting",
			description:
				"I throw myself down among the tall grass by the stream as I lie close to the earth.",
		},
		{
			image: Icon1,
			title: "Business Strategy",
			description:
				"I throw myself down among the tall grass by the stream as I lie close to the earth.",
		},
	];
	return (
		<div className='section3'>
			<div className='services_section3'>
				<h1 className='h1_section3'>Services</h1>
				<p>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration.
				</p>
				<h3 className='h3_section3'>
					<span>Requ</span>est Custom Service
				</h3>
			</div>

			<div class='grid-container'>
				<div class='grid-item'>
					<GridItem
						image={cards[0].image}
						title={cards[0].title}
						description={cards[0].description}
					/>
				</div>
				<div class='grid-item'>
					<GridItem
						image={cards[1].image}
						title={cards[1].title}
						description={cards[1].description}
					/>
				</div>
				<div class='grid-item'>
					<GridItem
						image={cards[2].image}
						title={cards[2].title}
						description={cards[2].description}
					/>
				</div>
				<div class='grid-item'>
					<GridItem
						image={cards[3].image}
						title={cards[3].title}
						description={cards[3].description}
					/>
				</div>
			</div>
		</div>
	);
};

export default Section3;
