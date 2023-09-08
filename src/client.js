import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'nprp0vwr',
	dataset: 'production',
	apiVersion: '2022-02-01',
	useCdn: true,
	token:
		'sk890EN2LbtjLlH2Uw38w9LSNX2eeHyi1ECPNfN6vwoYQGDQtNxnjlh4LRbLyVYISQw4hEZQBUEebiwXSYhRmNodNppUgcHMqt8eUmk7zyhXWCDimlmGe0o1gmmP8ZyjWu54sKSoxeue916GnCNRFHseQiohLsWrL8irXMUeGtiRz3ugjAKd',
	ignoreBrowserTokenWarning: true,
});
