interface Project {
	id: string | number;
	name: string;
	description: string;
	tags: string[];
	githubUrl?: string;
	liveDemoUrl?: string;
}

export type { Project };
