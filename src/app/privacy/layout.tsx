import type { Metadata } from 'next';
import '../../styles/globals.css';

export const metadata: Metadata = {
	title: 'Конфіденційність',
	description: 'Конфіденційність',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
