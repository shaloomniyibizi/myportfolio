import React from 'react';
import { BsBriefcase } from 'react-icons/bs';

const Interest = () => {
	const interests = [
		{
			title: 'Game',
			desc: 'In my free time i like to play basket ball game as one of my hobby games ',
		},
		{
			title: 'Musics',
			desc: 'Listenning to smoothing musics is samething that make me filling comfutable in coding time ',
		},
		{
			title: 'Tutoriols',
			desc: 'Apart of teaching what i know to ather, I also like to run fron other programmer via youtube tutoriols and googling same documentation about the tech',
		},
		{
			title: 'Teaching',
			desc: 'Apart of being a tech and code writer, I olso love to teach people what I know simply becouse I believe in sharing',
		},
	];
	return (
		<div>
			<div className='single__Interest-container p-5 '>
				<div className='mb-5 flex flex-col items-center justify-center text-center'>
					<h2 className=''>My Interests</h2>
					<span className='mt-2 block h-1 w-44 rounded-full  bg-primarycolor' />
				</div>
				{interests.map((Interest, index) => (
					<div
						key={index}
						className='single__Interest relative z-30 py-5 px-7 before:absolute before:top-0 before:left-0 before:z-40 before:h-full before:w-0.5 before:bg-primarycolor before:text-primarycolor'
					>
						<span className='experince__icon absolute -left-[8px] z-50 text-xl text-primarycolor'>
							<BsBriefcase />
						</span>
						<h6 className='mb-2 text-lg'>{Interest.title}</h6>
						<p className='text-base font-light '>{Interest.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Interest;
