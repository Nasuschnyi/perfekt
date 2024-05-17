import type { Metadata } from 'next';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

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
			</Head>
			<body>
				{/* Google tag (gtag.js) */}
				<Script
					strategy="lazyOnload"
					src="https://www.googletagmanager.com/gtag/js?id=AW-16565936038"
				></Script>
				<Script
					id="google-analytics"
					strategy="lazyOnload"
				>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					
						gtag('config', 'AW-16565936038');
					`}
				</Script>
				{children}
			</body>
		</html>
	);
}
