'use client';

import { createContext, useContext, useState } from 'react';

interface ThemeContext {
	theme: 'dark' | 'light';
	lightSwitch: () => void;
	darkSwitch: () => void;
}

const ThemeContext = createContext<ThemeContext | null>(null);

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

export default function ThemeContextProvider({ children }: FunctionProps) {
	type ThemeState = 'light' | 'dark';
	const systemSettingsTheme = window.matchMedia('(prefers-color-scheme: dark)')
		.matches
		? 'dark'
		: 'light';

	const storageOption: ThemeState =
		(localStorage.getItem('site-theme') as ThemeState) ??
		(systemSettingsTheme as ThemeState);

	const [theme, setTheme] = useState<ThemeState>(storageOption);

	function lightSwitch() {
		setTheme('light');
		localStorage.setItem('site-theme', 'light');
	}

	function darkSwitch() {
		setTheme('dark');
		localStorage.setItem('site-theme', 'dark');
	}

	return (
		<ThemeContext.Provider value={{ theme, lightSwitch, darkSwitch }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error(
			'Error: useTheme hook used outside the ThemeContext provider'
		);
	}

	return context;
}
