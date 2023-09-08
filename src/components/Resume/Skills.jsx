import React, { useState, useEffect } from 'react';
import { SiTailwindcss } from 'react-icons/si';
import { FaCss3, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';

const Skills = () => {
	const items = [
		{
			icon: <FaHtml5 />,
			skill: 'HTML5',
			percentage: '96%',
		},
		{
			icon: <FaCss3 />,
			skill: 'CSS3',
			percentage: '85%',
		},
		{
			icon: <FaJsSquare />,
			skill: 'Javascript',
			percentage: '70%',
		},
		{
			icon: <FaReact />,
			skill: 'React JS',
			percentage: '74%',
		},
		{
			icon: <SiTailwindcss />,
			skill: 'Tailwindcss',
			percentage: '88%',
		},
	];

	return (
		<div>
			<div className='skills-bar max-w-full py-4  px-7 shadow-bs'>
				<div className='flex flex-col items-center justify-center text-center'>
					<h2 className=''> My Skills</h2>
					<span className='mt-2 block h-1 w-32 rounded-full  bg-primarycolor' />
				</div>
				{items.map((item, index) => (
					<div
						className='showText1 flex items-center justify-center gap-4'
						key={index}
					>
						<div className='text-2xl lg:text-4xl'>{item.icon}</div>
						<div className='bar my-5 flex-1 first:mt-0'>
							<div className='info showText1 mb-1'>
								<span className='text-sm font-medium lg:text-lg'>
									{item.skill}
								</span>
							</div>
							<div className='progress-line bg- relative h-[10px] w-full scale-x-0 rounded-lg bg-black shadow-line transition-transform duration-500 ease-in-out'>
								<span
									className={`line absolute  h-full w-0 rounded-lg bg-white transition-all duration-500 ease-linear before:absolute before:right-0 before:-top-[10px] before:h-0 before:w-0 before:border-[7px] before:border-b-0 before:border-r-0 before:border-transparent before:border-t-black`}
									style={{ width: item.percentage }}
								>
									<span
										className={`showText absolute -top-7 right-0 h-fit w-fit bg-black px-1 py-0.5 text-right text-xs text-white transition-all duration-500 ease-in-out`}
									>
										{item.percentage}
									</span>
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
