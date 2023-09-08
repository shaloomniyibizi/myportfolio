import React from 'react';
import FooterSocial from './FooterSocial';

const Footer = () => {
	return (
		<footer className='text-white'>
			<div className='footer flex w-full flex-col items-center pt-16'>
				<p className='footer-name shrink-0 pr-8 text-xl'>
					Let's make samething amazing together.
				</p>
				<p className='footer-copyright'>
					Start by <a href='#contact'>saying hi</a>
				</p>
			</div>
			<div className='footer flex w-full flex-col items-center justify-between gap-8  pt-8 sm:flex-row sm:gap-0'>
				<div className='footer-right flex shrink-0 flex-col pl-12 align-baseline md:pl-24 lg:pl-52'>
					<p className='footer-name shrink-0 pr-8 text-3xl'>
						<span className='font-bold'>Shaloom </span> Niyibizi
					</p>
					<p className='footer-copyright text-lightcolor'>
						&copy; 2022 All Right Reserved
					</p>
				</div>
				<div className='footer-sociols'>
					<FooterSocial />
				</div>
			</div>
		</footer>
	);
};
export default Footer;
