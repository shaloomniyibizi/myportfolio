import React, { useState } from 'react';

import { FaHome } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { MdContactMail } from 'react-icons/md';

const Navbar = () => {
	const [activeNav, setActiveNav] = useState('#');
	const navs = [
		{
			icon: <FaHome size='18' />,
			text: 'Home',
			title: 'Home',
			link: '#',
		},
		{
			icon: <AiOutlineUser size='18' />,
			text: 'About',
			title: 'About',
			link: '#about',
		},
		{
			icon: <BiBook size='18' />,
			text: 'Resume',
			title: 'Resume',
			link: '#resume',
		},
		{
			icon: <RiServiceLine size='18' />,
			text: 'Testimoniol',
			title: 'Testimoniol',
			link: '#testimoniol',
		},
		{
			icon: <MdContactMail size='18' />,
			text: 'Contact',
			title: 'Contact',
			link: '#contact',
		},
	];
	return (
		<div className='gradient-bg-welcome nav-container'>
			{navs.map((nav, index) => (
				<a key={index} href={nav.link} onClick={() => setActiveNav(nav.link)}>
					<NavIcon
						icon={nav.icon}
						text={nav.text}
						title={activeNav === nav.link ? nav.title : ''}
					/>
				</a>
			))}
		</div>
	);
};

const NavIcon = ({ icon, text, title }) => (
	<div className='nav-item group'>
		<div href='#' className='flex items-center justify-center'>
			<span className='ml-2'>{icon}</span>
			<span className='ml-2'>{title}</span>
		</div>

		<span className='nav-tooltip group-hover:scale-100'>{text}</span>
	</div>
);

export default Navbar;
