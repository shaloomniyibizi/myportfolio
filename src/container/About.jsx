import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { ImTarget } from 'react-icons/im';
import { BiVector } from 'react-icons/bi';
import { AppWrapper } from './../wrapper';

const abouts = [
	{
		title: 'Design',
		description: 'create digutal product with unique idea',
		imgUrl: <BiVector />,
		link: '20 Projects',
	},
	{
		title: 'Font-End',
		description: 'I develop frontend with coding super smooth',
		imgUrl: <FaCode />,
		link: '15 Projects',
	},
	{
		title: 'SEO',
		description: 'boost your busness with seo optmize',
		imgUrl: <ImTarget />,
		link: '4 Projects',
	},
];
const About = () => {
	return (
		<section className='section container flex flex-col-reverse gap-20  md:flex-row'>
			<div className='w-full '>
				<div className='flex flex-col gap-12  '>
					{abouts.map((about, index) => (
						<motion.div
							whileInView={{ x: [-100, 0], opacity: [0, 1] }}
							whileHover={{ scale: 1.03 }}
							transition={{ duration: 1, type: 'tween' }}
							key={about.title + index}
							className='rounded-xl border-b-2  border-b-primarycolor bg-bgcolor-varient px-8 py-4 shadow-bs drop-shadow-lg hover:drop-shadow-xl'
						>
							<div className='flex items-center justify-between'>
								<p className='text-2xl font-semibold'>{about.title}</p>
								<div className='w-10 text-3xl'>
									<img src={about.imgUrl} alt='' className='w-10' />
									{about.imgUrl}
								</div>
							</div>
							<p className='text-graycolor '>{about.description}</p>
							<p className='uppercase'>{about.link}</p>
						</motion.div>
					))}
				</div>
			</div>
			<motion.div
				whileInView={{ x: [200, 0], opacity: [0, 1] }}
				whileHover={{ scale: 1.021 }}
				transition={{ duration: 1, type: 'tween' }}
				className='about__right w-full py-4 pl-7 pr-2 tracking-tighter  shadow-bs'
			>
				<h3 className=''>Introduce</h3>
				<h1 className='mt-4'>Hello! I'm Shaloom</h1>
				<h2 className='mt-3 text-xl italic'>
					every great design begin with an even better story
				</h2>
				<p className='bout__desc mt-4 text-lg text-graycolor'>
					I am a highly skilled and experienced developer and support engineer with a passion for technology. 
					I have over 3+ years of experience in the IT industry, and I am proficient in a variety of programming languages, frameworks, and tools.
					I am also an excellent communicator and problem solver, and I am always willing to learn new things.
				</p>
				<p className='bout__desc mt-4 text-lg text-graycolor'>
					In my previous role as a developer, I was responsible for developing and debugging software for a variety of projects.
					I also provided technical support  to users, and I was able to quickly and effectively resolve their issues.
				</p>
				<p className='bout__desc mt-4 text-lg text-graycolor'>
					I am currently looking for a new role as a developer and support engineer where I can use my skills and experience to make a positive impact.
					I am eager to learn new things and take on new challenges, and I am confident that I can be a valuable asset to any team.
				</p>
			</motion.div>
		</section>
	);
};

export default AppWrapper(About, 'about', 'py-8 overflow-hidden text-gray-200');
