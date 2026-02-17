'use client';

import { useTheme } from '@/context/ThemeContext';
import { Moon, SunMedium } from 'lucide-react';

const ICON_SIZE = 16;

export default function ThemeSwitch() {
	const { theme, lightSwitch, darkSwitch } = useTheme();

	const lightStyles = `bg-white border-black/15 text-black`;
	const darkStyles = `bg-black border-white/15 shadow-white/10 text-white`;

	return (
		<div
			className={`fixed top-4 right-5 z-50 flex items-center justify-center gap-x-2 rounded-full border px-2 py-1.5 shadow-md ${theme === 'dark' ? darkStyles : lightStyles}`}
		>
			<button
				className={`rounded-full p-[2px] hover:cursor-pointer ${theme === 'light' && 'bg-gray-300'}`}
				onClick={lightSwitch}
				aria-label="Light Mode"
			>
				<SunMedium size={ICON_SIZE} />
			</button>
			<button
				className={`rounded-full p-[2px] hover:cursor-pointer ${theme === 'dark' && 'bg-gray-100 text-black'}`}
				onClick={darkSwitch}
				aria-label="Dark Mode"
			>
				<Moon size={ICON_SIZE} />
			</button>
		</div>
	);
}
