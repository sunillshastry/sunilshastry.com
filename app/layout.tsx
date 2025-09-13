import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Sunil Shastry | University of Saskatchewan',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${inter.className} antialiased selection:bg-white selection:text-black`}
			>
				<main className="min-h-screen bg-black pr-8 pl-12 text-gray-300 max-lg:pr-5 max-lg:pl-8">
					{children}
				</main>
			</body>
		</html>
	);
}
