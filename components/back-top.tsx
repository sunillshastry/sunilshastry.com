'use client';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import { ArrowBigUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackTop() {
	const { theme } = useTheme();

	const [visible, setVisible] = useState<boolean>(false);

	function toggleVisibility() {
		setVisible(window.scrollY > window.innerHeight);
	}

	function scrollBackUp() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	useEffect(function () {
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		visible && (
			<button
				onClick={scrollBackUp}
				className={cn(
					`group fixed right-4 bottom-4 rounded-full p-2 text-lg shadow-md transition hover:cursor-pointer`,
					theme === 'dark'
						? 'bg-white text-black shadow-white/10'
						: 'bg-black text-white'
				)}
				aria-label="Scroll Top"
			>
				<span className="block transition group-hover:-translate-y-0.5">
					<ArrowBigUp fill={theme === 'dark' ? 'black' : 'white'} />
				</span>
			</button>
		)
	);
}
