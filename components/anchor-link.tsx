'use client';

import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

interface FunctionProps extends ComponentPropsWithoutRef<'a'> {
	children?: Readonly<React.ReactNode>;
}

export default function AnchorLink({
	children,
	href,
	className,
	...defaultProps
}: FunctionProps) {
	const { theme } = useTheme();

	const isDarkTheme = theme === 'dark';

	return (
		<Link
			href={href as string}
			target="_blank"
			className={cn(
				'rounded-sm border border-dashed px-1 py-0.5 underline-offset-2 transition hover:underline',
				isDarkTheme
					? 'border-slate-400 bg-neutral-900 text-slate-300'
					: 'border-slate-400 bg-slate-100/50 text-slate-700',
				className
			)}
			{...defaultProps}
		>
			{children}
		</Link>
	);
}
