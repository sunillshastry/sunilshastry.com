'use client';
import { useTheme } from '@/context/ThemeContext';
import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function BlogHeader() {
	const { theme } = useTheme();
	return (
		<div
			className={`flex items-center justify-between border-b px-3 py-2 pb-4 ${theme === 'dark' ? 'border-b-white/25' : 'border-b-black/15'}`}
		>
			<h3 className="font-black">Sunil Shastry</h3>

			<div className="flex items-center gap-x-2">
				<span className="font-mono text-xs uppercase opacity-80">
					Follow me
				</span>

				<Link
					href="https://x.com/sunillshastry"
					target="_blank"
					className="rounded-full p-2 transition hover:bg-gray-400/25"
				>
					<Twitter />
				</Link>

				<Link
					href="https://github.com/sunillshastry/"
					target="_blank"
					className="rounded-full p-2 transition hover:bg-gray-400/25"
				>
					<Github />
				</Link>
			</div>
		</div>
	);
}
