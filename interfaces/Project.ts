export type ProjectPhase = 'planning' | 'development' | 'production';

interface Project {
	id: string | number;
	name: string;
	description: string;
	tags: string[];
	phase: ProjectPhase;
	githubUrl?: string;
	liveDemoUrl?: string;
}

export type { Project };
