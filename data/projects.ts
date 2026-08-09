import { Project } from '@/interfaces/Project';

const projects: Project[] = [
	{
		id: 1,
		name: 'Itihaas',
		description:
			'Itihaas is a structured, community-driven platform for exploring the history of the Indian subcontinent, covering thousands of years of historical events, people, and civilizations. It brings together interconnected information on dynasties, rulers, wars, and significant events, allowing users to search specific topics, explore history chronologically, and discover connections between different periods and regions. Designed and built for students, researchers, and curious minds, Itihaas aims to make historical knowledge more accessible, organized, and engaging. The platform also provides a foundation for researchers and developers to explore and contribute structured historical data, helping build a growing, collaborative resource for understanding the history of the Indian subcontinent.',
		tags: [
			'React',
			'TypeScript',
			'Node.js',
			'GraphQL',
			'MongoDB',
			'Redis',
			'Docker',
			'AWS',
			'DigitalOcean',
		],
		githubUrl: 'https://github.com/sunillshastry/itihaas-api',
		liveDemoUrl: 'https://itihaas.netlify.app/',
	},
	{
		id: 2,
		name: 'DinnerDibs',
		description:
			'DinnerDibs is a community-driven marketplace that connects local home cooks and small-scale food entrepreneurs with people looking for affordable, authentic homemade meals. The platform allows buyers to discover nearby food listings with detailed information about ingredients, dietary preferences, and the people behind each dish, while giving sellers a simple way to showcase and grow their food ventures. By removing conservative intermediaries, commissions, and unnecessary fees, DinnerDibs encourages direct communication and coordination between buyers and sellers. Its focus on transparency, accessibility, and community aims to create a more personal alternative to conventional food delivery platforms, while helping local cooks build relationships with customers and keep more value within their communities.',
		tags: [
			'Next.js',
			'TypeScript',
			'Spring Boot',
			'PostgreSQL',
			'Java',
			'Redis',
			'RabbitMQ',
			'Docker',
			'AWS',
		],
		githubUrl: 'http://github.com/dinnerdibs/',
	},
];

export default projects;
