import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Конфіденційність',
	description: 'Політика конфіденційності',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
