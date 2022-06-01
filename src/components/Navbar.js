import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

import logo from "./logo.png";
import NavItems from "./NavItems";
import "../styled_components/Navbar.css";

const Navbar = () => {
	const [hidden1, setHidden1] = useState("hidden");

	const mouseEnterHandler1 = () => {
		setHidden1("");
	};
	const mouseLeaveHandler1 = () => {
		setHidden1("hidden");
	};

	const [hidden2, setHidden2] = useState("hidden");

	const mouseEnterHandler2 = () => {
		setHidden2("");
	};
	const mouseLeaveHandler2 = () => {
		setHidden2("hidden");
	};

	const [hidden3, setHidden3] = useState("hidden");

	const mouseEnterHandler3 = () => {
		setHidden3("");
	};
	const mouseLeaveHandler3 = () => {
		setHidden3("hidden");
	};

	const [hidden4, setHidden4] = useState("hidden");

	const mouseEnterHandler4 = () => {
		setHidden4("");
	};
	const mouseLeaveHandler4 = () => {
		setHidden4("hidden");
	};

	const [hidden5, setHidden5] = useState("hidden");

	const mouseEnterHandler5 = () => {
		setHidden5("");
	};
	const mouseLeaveHandler5 = () => {
		setHidden5("hidden");
	};

	const [hidden6, setHidden6] = useState("hidden");

	const mouseEnterHandler6 = () => {
		setHidden6("");
	};
	const mouseLeaveHandler6 = () => {
		setHidden6("hidden");
	};

	return (
		<div className='navbar'>
			<img src={logo} alt='logo' />
			<div className='navitems'>
				<Dropdown>
					<Dropdown.Toggle
						className='dropdown_toggle'
						variant='success'
						id='dropdown-basic'
						onMouseEnter={mouseEnterHandler1}
						onMouseLeave={mouseLeaveHandler1}>
						Home
					</Dropdown.Toggle>

					<Dropdown.Menu
						className={`dropdown_menu ${hidden1}`}
						onMouseEnter={mouseEnterHandler1}
						onMouseLeave={mouseLeaveHandler1}>
						<Dropdown.Item className='dropdown_item'>Main Demo</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Main Demo Dark
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Creative Agency
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Creative One Page
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Creative Portfolio
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle
						className='dropdown_toggle'
						variant='success'
						id='dropdown-basic'
						onMouseEnter={mouseEnterHandler2}
						onMouseLeave={mouseLeaveHandler2}>
						Service
					</Dropdown.Toggle>

					<Dropdown.Menu
						className={`dropdown_menu ${hidden2}`}
						onMouseEnter={mouseEnterHandler2}
						onMouseLeave={mouseLeaveHandler2}>
						<Dropdown.Item className='dropdown_item'>Action</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Another action
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle
						className='dropdown_toggle'
						variant='success'
						id='dropdown-basic'
						onMouseEnter={mouseEnterHandler3}
						onMouseLeave={mouseLeaveHandler3}>
						About
					</Dropdown.Toggle>

					<Dropdown.Menu
						className={`dropdown_menu ${hidden3}`}
						onMouseEnter={mouseEnterHandler3}
						onMouseLeave={mouseLeaveHandler3}>
						<Dropdown.Item className='dropdown_item'>Action</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Another action
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle
						className='dropdown_toggle'
						variant='success'
						id='dropdown-basic'
						onMouseEnter={mouseEnterHandler4}
						onMouseLeave={mouseLeaveHandler4}>
						Pages
					</Dropdown.Toggle>

					<Dropdown.Menu
						className={`dropdown_menu ${hidden4}`}
						onMouseEnter={mouseEnterHandler4}
						onMouseLeave={mouseLeaveHandler4}>
						<Dropdown.Item className='dropdown_item'>Action</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Another action
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle
						className='dropdown_toggle'
						variant='success'
						id='dropdown-basic'
						onMouseEnter={mouseEnterHandler5}
						onMouseLeave={mouseLeaveHandler5}>
						Blocks
					</Dropdown.Toggle>

					<Dropdown.Menu
						className={`dropdown_menu ${hidden5}`}
						onMouseEnter={mouseEnterHandler5}
						onMouseLeave={mouseLeaveHandler5}>
						<Dropdown.Item className='dropdown_item'>Action</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Another action
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle
						className='dropdown_toggle'
						variant='success'
						id='dropdown-basic'
						onMouseEnter={mouseEnterHandler6}
						onMouseLeave={mouseLeaveHandler6}>
						Contact
					</Dropdown.Toggle>

					<Dropdown.Menu
						className={`dropdown_menu ${hidden6}`}
						onMouseEnter={mouseEnterHandler6}
						onMouseLeave={mouseLeaveHandler6}>
						<Dropdown.Item className='dropdown_item'>Action</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Another action
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
						<Dropdown.Item className='dropdown_item'>
							Something else
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<NavItems></NavItems>
			</div>
		</div>
	);
};

export default Navbar;
