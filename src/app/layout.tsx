import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';

const font = Montserrat({
	subsets: ['cyrillic'],
	weight: ['400', '500', '600', '700'],
});

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
			<body className={font.className}>{children}</body>
		</html>
	);
}
