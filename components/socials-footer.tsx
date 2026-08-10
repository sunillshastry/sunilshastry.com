'use client';

import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';

export default function SocialsFooter() {
	const { theme } = useTheme();
	const isDarkTheme = theme === 'dark';

	return (
		<div className="mt-3">
			<ul
				className={cn(
					'inline-flex items-center justify-start gap-x-1 rounded-full p-2.5 shadow-sm',
					isDarkTheme ? 'bg-zinc-700 shadow-slate-100/35' : 'bg-slate-100'
				)}
			>
				<SocialsListItem
					href="https://www.linkedin.com/in/sunilshastry/"
					title="Sunil's LinkedIn"
				>
					LinkedIn
				</SocialsListItem>

				<SocialsListItem
					href="https://github.com/sunillshastry/"
					title="Sunil's GitHub"
				>
					GitHub
				</SocialsListItem>

				<SocialsListItem href="https://sunilshastry.medium.com/" title="Medium">
					Medium
				</SocialsListItem>

				<SocialsListItem href="/blogs" target="_self" title="Blog">
					Blog
				</SocialsListItem>

				<SocialsListItem href="/projects" target="_self" title="Projects">
					Projects
				</SocialsListItem>
			</ul>
		</div>
	);
}

interface SocialsListItemProps {
	children: Readonly<React.ReactNode>;
	className?: string;
	href: string;
	target?: HTMLAttributeAnchorTarget;
	title?: string;
}

function SocialsListItem({
	children,
	className,
	href,
	target = '_blank',
	title,
}: SocialsListItemProps) {
	const { theme } = useTheme();
	const isDarkTheme = theme === 'dark';

	return (
		<li
			className={cn(
				'border-l border-dashed px-2 py-0.5 text-sm underline-offset-4 transition first-of-type:border-l-0 hover:underline',
				isDarkTheme
					? 'border-slate-300/50 text-slate-300 hover:text-slate-100'
					: 'border-slate-400/50 text-slate-700 hover:text-slate-900',
				className
			)}
		>
			<Link
				href={href}
				target={target}
				title={title ? title : (children as string)}
			>
				{children}
			</Link>
		</li>
	);
}
