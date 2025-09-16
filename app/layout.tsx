import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import CoreProviders from '@/providers/CoreProviders';
import Main from '@/components/main';
import ThemeSwitch from '@/components/theme-switch';

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
	twitter: {
		title: 'Sunil Shastry',
		description:
			'Sunil Shastry is an undergraduate student at the University of Saskatchewan majoring in Computer Science and minoring in Theoretical Mathematics. His primary expertise lies in Human-Computer Interaction and Web Development',
		card: 'summary_large_image',
		creator: '@sunillshastry',
		images: ['https://sunilshastry.com/me.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},

	other: {
		'msvalidate.01': 'E8950B7B3E09D11CE36423531BD7F526',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: Readonly<React.ReactNode>;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<CoreProviders>
				<body
					className={`${inter.variable} ${inter.className} relative antialiased`}
				>
					<Script
						defer
						src="https://cloud.umami.is/script.js"
						data-website-id="68a3055d-eebf-4dc3-8068-6d39a6c096de"
					/>
					<ThemeSwitch />
					<Main>{children}</Main>
				</body>
			</CoreProviders>
		</html>
	);
}
