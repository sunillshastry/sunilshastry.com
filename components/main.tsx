'use client';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

export default function Main({ children }: FunctionProps) {
	const { theme } = useTheme();
	return (
		<>
			<main
				className={cn(
					theme === 'dark'
						? 'bg-black text-gray-300 selection:bg-[#E5FFC3] selection:text-black'
						: 'bg-white text-gray-600 selection:bg-[#E5FFC3]/80',
					'min-h-screen pr-8 pl-12 transition max-lg:pr-5 max-lg:pl-8'
				)}
			>
				{children}
			</main>
		</>
	);
}
