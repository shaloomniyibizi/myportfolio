import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { AppWrapper } from './../wrapper';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { SiMinutemailer } from 'react-icons/si';

const Contact = () => {
	const articles = [
		{
			title: 'Email',
			name: 'shaloomniyibizi@gmail.com',
			icon: <MdOutlineEmail />,
			link: 'mailto:shaloomniyibizi@gmail.com',
		},
		{
			title: 'Whatsapp',
			name: '+250789104307',
			icon: <BsWhatsapp />,
			link: 'https://api.whatsapp.com/send?phone=+250789104307',
		},
		{
			title: 'Messager',
			name: 'shaloom niyibizi',
			icon: <RiMessengerLine />,
			link: 'https://m.me/shaloom.n',
		},
	];

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_9sv94op',
			'template_qvqjjxs',
			form.current,
			'ZoPcVfk-7ib_Ht8j8'
		);
		e.target.reset();
	};

	return (
		<section className='section container'>
			<motion.div
				whileInView={{
					y: [200, 0],
					opacity: [0, 1],
					transition: { type: 'spring', duration: 1, delay: 1 },
				}}
				animate={{
					y: 0,
					transition: { type: 'spring', duration: 1, delay: 1 },
				}}
				className='contact_container container grid gap-6 rounded-2xl bg-bgcolor p-6 lg:grid-cols-3'
			>
				<div className='contact_options flex flex-col gap-4'>
					{articles.map((article, index) => (
						<article
							key={index}
							className='flex flex-col items-center rounded-xl border-b-2 border-b-primarycolor bg-bgcolor-varient p-4 text-center transition-all duration-500 ease-in-out hover:-translate-y-1'
						>
							<div className='center flex justify-center gap-2'>
								<span className='text-2xl '>{article.icon}</span>
								<h4>{article.title}</h4>
							</div>
							<a
								href={article.link}
								className='mt-2 inline-block text-sm '
								target='_blank'
								rel='noopener noreferrer'
							>
								<h5 className='text-primarycolor'>{article.name}</h5>
							</a>
						</article>
					))}
				</div>
				<form
					ref={form}
					onSubmit={sendEmail}
					className='flex flex-col gap-5 lg:col-span-2'
				>
					<input
						type='text'
						name='name'
						className='resize-none rounded-lg border border-bgcolor-varient bg-transparent focus:border-primarycolor focus:ring-0'
						placeholder='Your Full Name'
					/>
					<input
						type='email'
						name='email'
						className='resize-none rounded-lg border border-bgcolor-varient bg-transparent focus:border-primarycolor focus:ring-0'
						placeholder='Your Email'
					/>
					<textarea
						name='message'
						rows='7'
						className='resize-none rounded-lg border border-bgcolor-varient bg-transparent focus:border-primarycolor focus:ring-0'
						placeholder='Your Message'
					></textarea>
					<button type='submit' className='btn btn-primary'>
						<span>Send</span>
						<SiMinutemailer className='text-xl text-white' />
					</button>
				</form>
			</motion.div>
		</section>
	);
};

export default AppWrapper(Contact, 'contact', 'bg-bgcolor-varient');
