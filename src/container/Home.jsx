import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { AppWrapper } from './../wrapper';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const Home = () => (
	<div className=' app__header app__flex flex flex-col md:flex-row'>
		<motion.div
			whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className='app__header-info flex h-full flex-[0.65] flex-col items-start justify-start'
		>
			<div className='app__header-badge flex w-fit flex-col sm:w-full  md:items-end md:justify-end'>
				<div className='badge-cmp app__flex mr-4 flex  items-center justify-center rounded-lg border border-gray-500 py-2 px-4 shadow-xl shadow-slate-800'>
					<span className='mr-5 text-xl md:text-3xl'>👋</span>
					<div>
						<p className='p-text text-left text-sm leading-normal'>
							Hello, I am
						</p>
						<h1 className='head__text text-center text-4xl font-bold capitalize'>
							Shaloom
						</h1>
					</div>
				</div>

				<div className='tag-cmp app__flex mr-4 mt-4 flex w-fit flex-col items-center justify-center rounded-lg border border-gray-500 py-2 px-4 shadow-xl shadow-slate-800'>
					<p className='p-text w-full text-right text-sm uppercase leading-normal'>
						Web developer
					</p>
					<p className='p-text w-full text-right text-sm uppercase leading-normal'>
						UI/UX Designer
					</p>
				</div>
			</div>
		</motion.div>

		<motion.div
			whileInView={{ opacity: [0, 1] }}
			transition={{ duration: 0.5, delayChildren: 0.5 }}
			className='app__header-img relative flex  h-full flex-1 items-end justify-end '
		>
			<img
				src={images.profile}
				alt='profile_bg'
				className='z-[1] w-full  rounded-b-full object-contain shadow-xl shadow-slate-800'
			/>
			<motion.img
				whileInView={{ scale: [0, 1] }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				src={images.circle}
				alt='profile_circle'
				className=' absolute inset-0 z-0 h-[90%] w-full object-contain'
			/>
		</motion.div>

		<motion.div
			variants={scaleVariants}
			whileInView={scaleVariants.whileInView}
			className='app__header-circles ml-4 flex h-full flex-[0.75] items-start justify-evenly  md:flex-col'
		>
			{[images.flutter, images.redux, images.sass].map((circle, index) => (
				<div
					className='circle-cmp app__flex m-4 flex h-36 w-36 items-center justify-center rounded-full bg-gray-200 shadow-xl shadow-slate-700 first:m-0 first:h-24 first:w-24 last:m-0 last:h-20 last:w-20'
					key={`circle-${index}`}
				>
					<img src={circle} alt='profile_bg' className=' h-[60%] w-[60%]' />
				</div>
			))}
		</motion.div>
		<div className='wave'>
			<svg
				data-name='Layer 1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1200 120'
				preserveAspectRatio='none'
			>
				<path
					d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
					className='shape-fill'
				></path>
			</svg>
		</div>
	</div>
);

export default AppWrapper(
	Home,
	'home',
	'gradient-bg-welcome relative text-white '
);
