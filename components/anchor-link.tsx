'use client';

import { useTheme } from '@/context/ThemeContext';
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

	return (
		<Link
			href={href as string}
			className={`${theme === 'dark' ? 'anchor-link-dark text-white' : 'anchor-link-light text-black'} anchor-link relative inline-block p-0 text-shadow-md text-shadow-white/25 ${className}`}
			target="_blank"
			{...defaultProps}
		>
			{children}
		</Link>
	);
}
