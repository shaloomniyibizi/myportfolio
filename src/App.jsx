import React from 'react';

import { About, Contact, Footer, Home, Resume, Testimoniol } from './container';
import { Navbar } from './components';
const App = () => {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Resume />
			<Testimoniol />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
