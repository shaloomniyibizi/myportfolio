import React from 'react';
import { BsBriefcase } from 'react-icons/bs';

const Experience = () => {
	const Experiences = [
		{
			year: '2022-present',
			title: 'Trainer and Computer lab technician',
			company: 'COBANGA',
			desc: 'Currently training software development and solving different software and hardware issues reported by staff',
		},
		{
			year: '2019 - 2022',
			title: 'Student',
			company: 'IPRC TUMBA',
			desc: 'I develop many products on both backend and frontend and I act as leader in different activities. my final year project become the bigest project in our collage ',
		},
		{
			year: '2020-2021',
			title: 'Frontend Developer',
			company: 'OWNER',
			desc: 'I design different project and develop an e-commerce dashboard',
		},
	];
	return (
		<div>
			<div className='single__experience-container p-5 '>
				<div className='mb-5 flex flex-col items-center justify-center text-center'>
					<h2 className=''>Experience</h2>
					<span className='mt-2 block h-1 w-40 rounded-full  bg-primarycolor' />
				</div>
				{Experiences.map((experience, index) => (
					<div key={index} className='single__experience relative z-30 py-4 px-7 before:absolute before:top-0 before:left-0 before:z-40 before:h-full before:w-0.5 before:bg-[#7865ff] before:text-[#7865ff]'>
						<span className='experince__icon absolute -left-[8px] z-50 text-xl text-primarycolor'>
							<BsBriefcase />
						</span>
						<h6 className='mb-2 text-sm font-light opacity-[75%]'>
							{experience.year}
						</h6>
						<h5 className='mb-1 text-lg'>
							{experience.title} at {experience.company}
						</h5>
						<p className='text-base font-light'>{experience.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
