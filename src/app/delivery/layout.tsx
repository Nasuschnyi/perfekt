import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Доставка',
	description: 'Доставка, оплата та умови',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
