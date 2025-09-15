'use client';
import { useTheme } from '@/context/ThemeContext';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NoBlogPosts() {
	const { theme } = useTheme();
	const styles =
		theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white';

	return (
		<div className="flex flex-col items-center justify-center">
			<h2 className="text-center font-semibold text-gray-400/75">
				Nothing to show just yet. Check back for upcoming posts!
			</h2>
			<Link
				href="/"
				className={`group mt-4 flex items-center justify-center gap-x-1 rounded-md px-2 py-2 text-sm ${styles}`}
			>
				<span className="transition group-hover:-translate-x-0.5">
					<ArrowLeft size={13} />
				</span>
				<span>Back home</span>
			</Link>
		</div>
	);
}
