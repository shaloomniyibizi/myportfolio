import React from 'react';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { motion } from 'framer-motion';

const SocialMedia = () => {
	const scaleVariants = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			animate: { scale: [0, 1, 1.5, 1] },
		},
	};
	return (
		<div className='app__social hidden flex-col items-center justify-end p-4 sm:flex'>
			<motion.a
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				transition={{ type: 'spring', duration: 0.5, delay: 1 }}
				href='http://www.twiter.com'
				target='_blank'
				rel='noopener noreferrer'
				className='my-1 flex h-8 w-8 items-center justify-center rounded-full border border-bgcolor bg-primarycolor text-textcolor transition-all duration-300 ease-in-out hover:border-primarycolor hover:bg-textcolor hover:text-gray-100'
			>
				<BsTwitter className='h-4 w-4 ' />
			</motion.a>
			<motion.a
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				transition={{ type: 'spring', duration: 0.5, delay: 1.2 }}
				href='http://www.instagram.com'
				target='_blank'
				rel='noopener noreferrer'
				className='my-1 flex h-8 w-8 items-center justify-center rounded-full border border-bgcolor bg-primarycolor text-textcolor transition-all duration-300 ease-in-out hover:border-primarycolor hover:bg-textcolor hover:text-gray-100'
			>
				<BsInstagram className='h-4 w-4 ' />
			</motion.a>
			<motion.a
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				transition={{ type: 'spring', duration: 0.5, delay: 1.4 }}
				href='http://www.facebook.com'
				target='_blank'
				rel='noopener noreferrer'
				className='my-1 flex h-8 w-8 items-center justify-center rounded-full border border-bgcolor bg-primarycolor text-textcolor transition-all duration-300 ease-in-out hover:border-primarycolor hover:bg-textcolor hover:text-gray-100'
			>
				<BsFacebook className='h-4 w-4 ' />
			</motion.a>
			<motion.span
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				animate={{ height: '4rem' }}
				transition={{ type: 'spring', duration: 0.5, delay: 0.8 }}
				className='w-1 rounded-full bg-primarycolor'
			/>
		</div>
	);
};

export default SocialMedia;
