'use client';
import { useTheme } from '@/context/ThemeContext';
import { ChevronRight, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function BlogHeader() {
	const { theme } = useTheme();
	return (
		<div
			className={`flex items-center justify-between border-b px-3 py-2 pb-4 ${theme === 'dark' ? 'border-b-white/25' : 'border-b-black/15'}`}
		>
			<h3 className="font-black">
				<Link href="/" title="Sunil Shastry">
					Sunil Shastry
				</Link>
			</h3>

			<div className="flex items-center gap-x-2">
				<span className="flex items-center gap-x-1 font-mono text-xs uppercase opacity-80">
					<span>Follow me</span>
					<span>
						<ChevronRight size={12} />
					</span>
				</span>

				<Link
					href="https://x.com/sunillshastry"
					target="_blank"
					className="rounded-full p-2 transition hover:bg-gray-400/25"
					aria-label="Twitter Icon"
					title="Sunil's Twitter"
				>
					<Twitter />
				</Link>

				<Link
					href="https://github.com/sunillshastry/"
					target="_blank"
					className="rounded-full p-2 transition hover:bg-gray-400/25"
					aria-label="Github Icon"
					title="Sunil's GitHub"
				>
					<Github />
				</Link>
			</div>
		</div>
	);
}
