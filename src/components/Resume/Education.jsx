import React from 'react';
import { BsBriefcase } from 'react-icons/bs';

const Education = () => {
	const educations = [
		{
			year: '2019-2022',
			school: 'IPRC Tumba, Rwanda',
			desc: 'A1 in information and Technology',
		},
		{
			year: '2019',
			school: 'Udemy and Coursera, Online',
			desc: 'Certificate in programming ',
		},
		{
			year: '2015-2018',
			school: 'BTR Rwamiko, Rwanda',
			desc: 'A2 in Computer Scence',
		},
	];
	return (
		<div>
			<div className='single__education-container p-5 '>
				<div className='mb-5 flex flex-col items-center justify-center text-center'>
					<h2 className=''>My Education</h2>
					<span className='mt-2 block h-1 w-48 rounded-full  bg-primarycolor' />
				</div>
				{educations.map((education, index) => (
					<div
						key={index}
						className='single__education relative z-30 py-5 px-7 before:absolute before:top-0 before:left-0 before:z-40 before:h-full before:w-0.5 before:bg-primarycolor before:text-primarycolor'
					>
						<span className='experince__icon absolute -left-[8px] z-50 text-xl text-primarycolor'>
							<BsBriefcase />
						</span>
						<h6 className='mb-2 text-sm font-light opacity-[75%]'>
							{education.year}
						</h6>
						<h5 className='mb-3 text-lg'>{education.school}</h5>
						<p className='text-base font-light leading-3'>{education.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
