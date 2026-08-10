import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

interface FunctionProps extends ComponentPropsWithoutRef<'a'> {
	children?: Readonly<React.ReactNode>;
}

export default function BackButton({
	href,
	children,
	title,
	className,
	...defaultProps
}: FunctionProps) {
	return (
		<>
			<Link
				href={href as string}
				title={title ? title : (children as string)}
				className={cn(
					'group inline-flex items-center justify-start gap-x-1 rounded-full bg-gray-400/25 px-4 py-2 text-sm font-medium',
					className
				)}
				{...defaultProps}
			>
				<span className="transition group-hover:-translate-x-1">
					<ArrowLeft size={12} />
				</span>
				<span>{children}</span>
			</Link>
		</>
	);
}
