import React, { useState } from 'react';
import { images } from './../constants';
import { motion } from 'framer-motion';
import { AppWrapper } from './../wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';

const testimoniols = [
	{
		name: 'Shaloom',
		title: 'Algolia',
		company: 'Staff Engineer',
		profileImage: images.profile,
		description:
			'Tailwind CSS is the only framework that I have seen scale on large teams.',
	},
	{
		name: 'Aline',
		title: 'tumba',
		company: 'Teacher',
		profileImage: images.workexperience,
		description:
			'Teaching is the only job that I have seen scale on large teams.',
	},
	{
		name: 'fred',
		title: 'gild president',
		company: 'Tumba STU',
		profileImage: images.edupeople,
		description: 'I am a student at iprc tumba where am grid prsident there.',
	},
];
const Testimoniol = () => {
	// 	const [currentIndex, setCurrentIndex] = useState(0);
	// 	const testimoniol = testimoniols[currentIndex];

	// const handleClickLeft = (index) => {
	// 	setCurrentIndex(index);
	// 	setAnimateCard([{ x: 100, opacity: 0 }]);

	// 	setTimeout(() => {
	// 		setAnimateCard([{ x: 0, opacity: 1 }]);
	// 		setCurrentIndex(index === 0 ? testimoniols.length - 1 : index - 1);
	// 	}, 500);
	// };
	// const handleClickRight = (index) => {
	// 	setCurrentIndex(index);
	// 	setAnimateCard([{ x: 100, opacity: 0 }]);

	// 	setTimeout(() => {
	// 		setAnimateCard([{ x: 0, opacity: 1 }]);
	// 		setCurrentIndex(index === testimoniols.length - 1 ? 0 : index + 1);
	// 	}, 500);
	// };

	// const [animateCard, setAnimateCard] = useState({ x: 0, opacity: 1 });

	return (
		<motion.section
			whileInView={{
				x: [200, 0],
				opacity: [0, 1],
				transition: { type: 'spring', duration: 1, delay: 1 },
			}}
			animate={{
				x: 0,
				transition: { type: 'spring', duration: 1.5, delay: 1 },
			}}
			className='section container'
		>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2,
					slideShadows: true,
				}}
				loop={true}
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Autoplay, EffectCoverflow, Pagination]}
				className='flex h-full w-full items-center justify-center py-12'
			>
				{testimoniols.map((testimoniol, index) => (
					<SwiperSlide
						key={index}
						className='mx-auto flex h-72 w-full flex-col rounded-xl bg-cover bg-center px-8 '
					>
						<blockquote className='relative  pt-6  text-left'>
							<img
								src={images.quote}
								alt=''
								className='absolute right-0 top-0 h-8 w-8'
							/>
							<p className='font-medium text-white'>
								“{testimoniol.description}”
							</p>
						</blockquote>
						<div className=' mt-4 mb-6 flex items-center justify-start space-x-2'>
							<img
								className='h-12 w-12 rounded-full border-2 border-bgcolor object-contain p-0.5'
								src={testimoniol.profileImage}
								alt=''
								width='384'
								height='512'
							/>
							<figcaption className='font-medium'>
								<div className='text-primarycolor'>{testimoniol.name}</div>
								<div className='text-graycolor'>
									{testimoniol.company}, {testimoniol.title}
								</div>
							</figcaption>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</motion.section>
	);
};

export default AppWrapper(Testimoniol, 'testimoniol');
