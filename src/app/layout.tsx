import { Metadata } from 'next';
import '../styles/globals.css';
import Head from 'next/head';

interface CustomWindow extends Window {
	dataLayer: any[];
}

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
	const customWindow = Object.assign(window, {
		dataLayer: [],
	}) as CustomWindow;
	return (
		<html lang="uk">
			<Head>
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
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-16565936038"
				></script>
				<script>
					customWindow.dataLayer = customWindow.dataLayer || [];
					function gtag(){customWindow.dataLayer.push(arguments)}
					gtag('js', new Date()); gtag('config', 'AW-16565936038');
				</script>
			</Head>
			<body>{children}</body>
		</html>
	);
}
