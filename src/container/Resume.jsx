import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants';
import {
	Education,
	Experience,
	Skills,
	Projects,
	Interest,
} from '../components';

import { AppWrapper } from './../wrapper';

const Resume = () => {
	const [open, setOpen] = useState(true);
	const Menus = [
		{ title: 'Education', src: images.edubook },
		{ title: 'Skills', src: images.pcskills },
		{ title: 'Experience', src: images.workhistory },
		{ title: 'Projects', src: images.project },
		{ title: 'Interests', src: images.interest },
	];

	const Resumedata = [
		{ tag: 'Education' },
		{ tag: 'Experience' },
		{ tag: 'Projects' },
		{ tag: 'Skills' },
		{ tag: 'Interests' },
	];

	const [activeFilter, setActiveFilter] = useState('Education');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	const [filterData, setFilterData] = useState([{ tag: 'Education' }]);

	const handleExperienceFilter = (Menu) => {
		setActiveFilter(Menu);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			setFilterData(Resumedata.filter((data) => data.tag.includes(Menu)));
		}, 500);
	};

	return (
		<motion.section
			whileInView={{
				y: [-200, 0],
				opacity: [0, 1],
				transition: { type: 'spring', duration: 1, delay: 1 },
			}}
			animate={{
				y: 0,
				transition: { type: 'spring', duration: 1, delay: 1 },
			}}
			className='section container flex flex-col overflow-hidden rounded-3xl shadow-bs md:flex-row'
		>
			<div
				className={` ${
					open ? 'flex md:block md:w-52' : 'flex md:block md:w-16'
				} gradient-bg-welcome relative flex items-center gap-x-4 py-5 pl-3 transition-all duration-300 md:h-full md:pt-8`}
			>
				<img
					src='./src/assets/arrow.png'
					className={`absolute -right-3 top-9 hidden w-7 cursor-pointer rounded-full
					border-2 border-bgcolor-varient md:block ${!open && 'rotate-180'}`}
					onClick={() => setOpen(!open)}
				/>
				<div className='hidden md:flex'>
					<img
						src='./src/assets/logo.png'
						className={`h-8 w-8 cursor-pointer rounded-lg transition-all duration-500 ${
							open && 'rotate-[360deg]'
						}`}
					/>
					<h1
						className={`hidden origin-left text-xl font-medium text-white transition-all duration-300 md:block ${
							!open && 'scale-0'
						}`}
					>
						Shaloom
					</h1>
				</div>
				<ul className='flex items-center gap-x-4 md:pt-16 md:block'>
					{Menus.map((Menu, index) => (
						<li
							key={index}
							onClick={() => handleExperienceFilter(Menu.title)}
							className={`md:hncl relative flex cursor-pointer items-center justify-start gap-x-4 rounded-full p-2 text-md text-white hover:bg-bgcolor-varient md:rounded-l-full ${
								activeFilter === Menu.title ? 'md:ncl bg-bgcolor-varient' : ''
							}`}
						>
							<img
								src={Menu.src}
								className='z-10 hidden h-6 w-6 rounded-full md:block md:h-8 md:w-8'
							/>
							<span
								className={`${
									!open && 'scale-0'
								} origin-left transition-all duration-300`}
							>
								{Menu.title}
							</span>
						</li>
					))}
				</ul>
			</div>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className='h-full flex-1 pt-0 shadow-bs md:pl-8'
			>
				<div className=' '>
					{filterData.map((data, index) => (
						<div
							className='h-[80vh] overflow-y-scroll drop-shadow-xl'
							key={index}
						>
							{data.tag === 'Education' ? (
								<Education />
							) : data.tag === 'Experience' ? (
								<Experience />
							) : data.tag === 'Skills' ? (
								<Skills />
							) : data.tag === 'Projects' ? (
								<Projects />
							) : data.tag === 'Interests' ? (
								<Interest />
							) : (
								<Education />
							)}
						</div>
					))}
				</div>
			</motion.div>
		</motion.section>
	);
};

export default AppWrapper(Resume, 'resume', 'bg-bgcolor-varient');
