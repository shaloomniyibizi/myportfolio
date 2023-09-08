import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from './../../constants';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const works = [
		{
			title: 'React Portfolio',
			projectImage: images.portfolio,
			describtion:
				'hello react developer this is awasame looking potfolio that blow your mind',
			projectLink: 'https://shaloom.netlify.app/',
			codeLink: 'https://github.com/shaloomniyibizi/myportfolio',
			tag: 'Web',
		},
		{
			title: 'Mobile Application',
			projectImage: images.about02,
			describtion: 'hello mobile developer',
			projectLink: 'https://www.shaloom.com',
			codeLink: 'https://www.github.com/shaloomniyibizi',
			tag: 'Mobile',
		},
		{
			title: 'UA/UX Design',
			projectImage: images.about03,
			describtion: 'I design this nice look portfolio in Adobe xd',
			projectLink: 'https://www.shaloom.com',
			codeLink: 'https://www.github.com/shaloomniyibizi',
			tag: 'UA/UX',
		},
	];
	const [filterWork, setFilterWork] = useState([
		{
			title: 'React Portfolio',
			projectImage: images.portfolio,
			describtion:
				'hello react developer this is awasame looking potfolio that blow your mind',
			projectLink: 'https://shaloom.netlify.app/',
			codeLink: 'https://github.com/shaloomniyibizi/myportfolio',
			tag: 'Web',
		},
		{
			title: 'Mobile Application',
			projectImage: images.about02,
			describtion: 'hello mobile developer',
			projectLink: 'https://www.shaloom.com',
			codeLink: 'https://www.github.com/shaloomniyibizi',
			tag: 'Mobile',
		},
		{
			title: 'UA/UX Design',
			projectImage: images.about03,
			describtion: 'I design this nice look portfolio in Adobe xd',
			projectLink: 'https://www.shaloom.com',
			codeLink: 'https://www.github.com/shaloomniyibizi',
			tag: 'UA/UX',
		},
	]);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);
			if (item === 'All') {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tag.includes(item)));
			}
		}, 500);
	};
	return (
		<div className='flex w-full flex-col'>
			<div className='mb-5 flex flex-col items-center justify-center text-center'>
				<h2 className=''>My Projects</h2>
				<span className='mt-2 block h-1 w-40 rounded-full  bg-[#7865ff]' />
			</div>
			<div className='app__work-filter b-2 mt-2 flex flex-row flex-wrap items-center justify-center'>
				{['UA/UX', 'Web', 'Mobile', 'All'].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item m-1 flex cursor-pointer items-center justify-center rounded-xl bg-white py-2 px-2 text-xs font-semibold text-textcolor transition-all duration-500 hover:bg-bgcolor hover:text-white sm:px-4 sm:text-sm ${
							activeFilter === item ? 'item-active' : ''
						}`}
					>
						{item}
					</div>
				))}
			</div>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className='flex flex-wrap items-center justify-center'
			>
				{filterWork.map((work, index) => (
					<motion.div
						whileHover={{ scale: 0.98 }}
						className='m-4 flex w-[250px] cursor-pointer flex-col items-center justify-center rounded-lg bg-bgcolor p-4 shadow-xl transition-all duration-300'
						key={index}
					>
						<div className='relative flex h-48 w-full items-center justify-center'>
							<img
								src={work.projectImage}
								alt={work.title}
								className='h-full w-full rounded-lg object-cover'
							/>
							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: 'easeInOut',
									staggerChildren: 0.5,
								}}
								className='absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] opacity-0'
							>
								<a
									href={work.projectLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.8] }}
										transition={{ duration: 0.25 }}
										className='m-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)] font-bold text-white transition-all duration-300 ease-in'
									>
										<AiFillEye className='h-1/2 w-1/2' />
									</motion.div>
								</a>
								<a
									href={work.codeLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.8] }}
										transition={{ duration: 0.25 }}
										className='m-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)] font-bold text-white transition-all duration-300 ease-in'
									>
										<AiFillGithub className='h-1/2 w-1/2' />
									</motion.div>
								</a>
							</motion.div>
						</div>
						<div className='relative flex w-full flex-col items-center justify-center p-2'>
							<h1 className='text-xl leading-normal'>{work.title}</h1>
							<p className=''>{work.describtion}</p>

							<div className='absolute -top-6 flex items-center justify-center rounded-lg bg-bgcolor py-2 px-4 text-sm'>
								<p className=''>{work.tag}</p>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Projects;
