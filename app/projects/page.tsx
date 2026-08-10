'use client';
import BackButton from '@/components/back-button';
import Paragraph from '@/components/paragraph';
import ProjectCard from '@/components/project-card';
import { useTheme } from '@/context/ThemeContext';
import projects from '@/data/projects';
import { cn } from '@/lib/utils';

export default function Page() {
	const { theme } = useTheme();
	const isDarkTheme = theme === 'dark';

	return (
		<section>
			<header className="pt-6">
				<BackButton title="Home" href="/">
					Home
				</BackButton>

				<h1
					className={cn(
						'mt-6 text-4xl font-semibold',
						isDarkTheme ? 'linear-text' : 'linear-text-light'
					)}
				>
					Projects
				</h1>
				<Paragraph className="mt-5 w-[80%] text-sm max-md:w-full">
					A collection of things I&apos;ve built, explored, and worked on over
					the years. Each project started with an idea, a problem, or simply a
					curiosity to learn something new. These are some of the projects that
					have helped me grow as a developer and shape the way I build software.
				</Paragraph>
			</header>

			<main className="mt-12 pb-10">
				<ul className="list-none">
					{projects.map(function (project) {
						return <ProjectCard project={project} key={project.id} />;
					})}
				</ul>
			</main>
		</section>
	);
}
