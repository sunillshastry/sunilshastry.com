'use client';

import ThemeContextProvider from '@/context/ThemeContext';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

export default function CoreProviders({ children }: FunctionProps) {
	return (
		<>
			<ThemeContextProvider>{children}</ThemeContextProvider>
		</>
	);
}
