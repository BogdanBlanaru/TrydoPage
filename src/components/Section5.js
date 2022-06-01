import React from "react";

import Blog1 from "./blog-01.jpg";
import Blog2 from "./blog-02.jpg";
import Blog3 from "./blog-03.jpg";
import Brand1 from "./brand-01.png";
import Brand2 from "./brand-02.png";
import Brand3 from "./brand-03.png";
import Brand4 from "./brand-04.png";
import Brand5 from "./brand-05.png";
import Brand6 from "./brand-06.png";

import ImageSection5 from "./ImageSection5";
import "../styled_components/Section5.css";

const Section5 = () => {
	return (
		<div className='section5'>
			<div className='lastnews_section5'>
				<h1 className='h1_section5'>Latest News</h1>
				<p>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration.
				</p>
			</div>
			<div className='images_section5'>
				<ImageSection5
					image={Blog3}
					title='Development'
					description='Getting tickets to the big show'
				/>
				<ImageSection5
					image={Blog2}
					title='Management'
					description='A big ticket gone to be an interesting'
				/>
				<ImageSection5
					image={Blog1}
					title='Design'
					description='The Home of the Future Could Bebes'
				/>
			</div>
			<div className='row row1'>
				<div>
					<img src={Brand1} alt='Brand1' />
				</div>
				<div>
					<img src={Brand2} alt='Brand2' />
				</div>
				<div>
					<img src={Brand3} alt='Brand3' />
				</div>
				<div>
					<img src={Brand4} alt='Brand4' />
				</div>
				<div>
					<img src={Brand5} alt='Brand5' />
				</div>
			</div>
			<div className='row row2'>
				<div>
					<img src={Brand6} alt='Brand6' />
				</div>
				<div>
					<img src={Brand1} alt='Brand1' />
				</div>
				<div>
					<img src={Brand2} alt='Brand2' />
				</div>
				<div>
					<img src={Brand3} alt='Brand3' />
				</div>
			</div>
		</div>
	);
};

export default Section5;
