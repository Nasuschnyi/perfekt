import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
	title: 'Perfekt',
	description: 'Онлайн магазин',
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
