import { ImageResponse } from 'next/og';
import { MdPlumbing } from 'react-icons/md';

export const runtime = 'edge';

export const size = {
	width: 64,
	height: 64,
};
export const contentType = 'image/png';

export default function Icon() {
	return new ImageResponse(
		(
			<figure
				style={{
					fontSize: 64,
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: '#ff0800',
				}}
			>
				<MdPlumbing />
			</figure>
		),
		{
			width: 64,
			height: 64,
		}
	);
}
