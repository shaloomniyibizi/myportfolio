import React from 'react';

const NavigationDots = (active) => {
	return (
		<div className='app__navigation hidden flex-col items-center justify-center p-4 sm:flex'>
			{['home', 'about', 'resume', 'testimoniol', 'contact'].map(
				(item, index) => (
					<a
						href={`#${item}`}
						key={item + index}
						className='app__navigation-dots m-2 h-2 w-2 rounded-full bg-[#cbcbcb] transition-all duration-200 ease-in-out hover:bg-bgcolor-varient'
						style={active === item ? (backgroundColor = '#313BAC') : {}}
					/>
				)
			)}
		</div>
	);
};

export default NavigationDots;
