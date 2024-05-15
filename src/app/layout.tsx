import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
	title: 'PERFEKT | Сантехніка',
	description:
		'Інтернет-магазин сантехніки, Україна, доставка по всій Україні,онлайн-магазин сантехніки, змішувачі, крани, шланги, аксесуари для ванної кімнати, фітинги, розумного унітазу біде та інше',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="uk">
			<head>
				<link
					rel="icon"
					href="/favicon.ico"
					sizes="any"
				/>
				<meta
					name="theme-color"
					content="#002d18"
				/>
				<meta
					name="google-site-verification"
					content="4O18LnTdQMyNriZRQv_QCkAHlZ7UvR1U8Znw86a53aQ"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
