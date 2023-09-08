import React from 'react';
import { SocialMedia, NavigationDots } from '../components';
import { motion } from 'framer-motion';

const AppWrapper = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div
				id={idName}
				className={`app__container flex min-h-screen w-full flex-row overflow-x-hidden text-white ${classNames}`}
			>
				<SocialMedia />

				<div className='app__wrapper mx-4 flex w-full flex-1 flex-col items-center justify-center'>
					<Component />

					<motion.div
						whileInView={{
							x: [200, 0],
							opacity: [0, 1],
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						animate={{
							x: 0,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						className='copyright  hidden w-full flex-col items-end justify-end md:flex'
					>
						<p className='p-text '>&copy; 2022 Shaloom</p>
						<p className='p-text uppercase'>All rights reserved </p>
					</motion.div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};
export default AppWrapper;
