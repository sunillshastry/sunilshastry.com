'use client';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { GithubIcon } from '@dev.icons/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/interfaces/Project';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

interface FunctionProps {
	project: Project;
}

export default function ProjectCard({ project }: FunctionProps) {
	const { theme } = useTheme();
	const isDarkTheme = theme === 'dark';

	return (
		<li
			className={cn(
				'mt-6 rounded-md border px-6 py-5 shadow-sm first-of-type:my-3',
				isDarkTheme && 'border-gray-100/35 shadow-gray-100/35'
			)}
		>
			<h4
				className={cn(
					'border-b py-2 text-xl font-bold',
					isDarkTheme && 'border-b-gray-100/35'
				)}
			>
				{project.name}
			</h4>
			<p className="pt-3 text-base leading-8 text-inherit">
				{project.description}
			</p>

			<div className="mt-5">
				{project.tags.map(function (projectTag) {
					return (
						<Badge
							className={cn(
								'mx-0.5 rounded-sm text-xs first-of-type:ml-0 max-md:my-1',
								isDarkTheme && 'bg-gray-200 text-black'
							)}
							key={projectTag}
						>
							{projectTag}
						</Badge>
					);
				})}
			</div>

			<div className="mt-6 flex items-center justify-start gap-x-3 text-base">
				{project.githubUrl && (
					<Link
						href={project.githubUrl}
						target="_blank"
						className={cn(
							'flex items-center justify-start gap-x-1.5 rounded-md border px-4 py-2',
							isDarkTheme && 'border-gray-100/35'
						)}
					>
						<GithubIcon
							size={20}
							className={cn(isDarkTheme && 'rounded-sm bg-white p-1')}
						/>
						<span>GitHub</span>
					</Link>
				)}

				{project.liveDemoUrl && (
					<Link
						href={project.liveDemoUrl}
						target="_blank"
						className={cn(
							'flex items-center justify-start gap-x-1.5 rounded-md border border-cyan-600 px-4 py-2 text-cyan-600',
							isDarkTheme && 'border-cyan-400 text-cyan-400'
						)}
					>
						<span>Live Demo</span>
						<ExternalLink size={18} />
					</Link>
				)}
			</div>
		</li>
	);
}
