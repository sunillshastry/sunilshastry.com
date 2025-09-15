'use client';
import { useTheme } from '@/context/ThemeContext';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

export default function Main({ children }: FunctionProps) {
	const { theme } = useTheme();
	return (
		<>
			<main
				className={`${theme === 'dark' ? 'bg-black text-gray-300 selection:bg-white selection:text-black' : 'bg-white text-gray-600 selection:bg-black selection:text-white'} min-h-screen pr-8 pl-12 transition max-lg:pr-5 max-lg:pl-8`}
			>
				{children}
			</main>
		</>
	);
}
