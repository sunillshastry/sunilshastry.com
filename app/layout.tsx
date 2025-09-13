import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Sunil Shastry | University of Saskatchewan',
	applicationName: 'sunilshastry.com',
	description:
		'Sunil Shastry is an undergraduate student at the University of Saskatchewan majoring in Computer Science and minoring in Theoretical Mathematics. His primary expertise lies in Human-Computer Interaction and Web Development',
	keywords: [
		'Sunil Shastry',
		'Sunil',
		'Shastry',
		'Sunil Shastri',
		'University of Saskatchewan',
	],
	authors: [
		{
			name: 'Sunil Shastry',
		},
	],
	creator: 'Sunil Shastry',
	publisher: 'Sunil Shastry',

	openGraph: {
		title: 'Sunil Shastry',
		description:
			'Sunil Shastry is an undergraduate student at the University of Saskatchewan majoring in Computer Science and minoring in Theoretical Mathematics. His primary expertise lies in Human-Computer Interaction and Web Development',
		url: 'https://sunilshastry.com',
		siteName: 'sunilshastry.com',
		images: [
			{
				url: 'https://sunilshastry.com/me.jpg',
				alt: `Sunil Shastry's Photo`,
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
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
