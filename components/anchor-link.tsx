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
	return (
		<Link
			href={href as string}
			className={`relative inline-block p-0 text-white ${className}`}
			target="_blank"
			{...defaultProps}
		>
			{children}
		</Link>
	);
}
