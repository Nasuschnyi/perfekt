import type { Metadata } from 'next';
import '../../styles/globals.css';

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
			<body>{children}</body>
		</html>
	);
}
