import { ComponentPropsWithoutRef } from 'react';

interface FunctionProps extends ComponentPropsWithoutRef<'p'> {
	children?: Readonly<React.ReactNode>;
}

export default function Paragraph({
	children,
	className,
	...defaultProps
}: FunctionProps) {
	return (
		<p
			className={`text-base leading-10 text-inherit ${className}`}
			{...defaultProps}
		>
			{children}
		</p>
	);
}
