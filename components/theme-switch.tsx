'use client';

import { useTheme } from '@/context/ThemeContext';
import { Moon, SunMedium } from 'lucide-react';

const ICON_SIZE = 18;

export default function ThemeSwitch() {
	const { theme, lightSwitch, darkSwitch } = useTheme();

	const lightStyles = `bg-white border-black/15 text-black`;
	const darkStyles = `bg-black border-white/15 shadow-white/10 text-white`;

	return (
		<div
			className={`fixed top-4 right-5 z-50 flex items-center justify-center gap-x-3 rounded-full border px-2 py-1.5 shadow-md ${theme === 'dark' ? darkStyles : lightStyles}`}
		>
			<button
				className="hover:cursor-pointer"
				onClick={lightSwitch}
				aria-label="Light Mode"
			>
				<SunMedium size={ICON_SIZE} />
			</button>
			<button
				className={`${theme === 'light' ? 'border-black/15' : 'border-white/25'} border-l pl-3 hover:cursor-pointer`}
				onClick={darkSwitch}
				aria-label="Dark Mode"
			>
				<Moon size={ICON_SIZE} />
			</button>
		</div>
	);
}
