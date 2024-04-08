import style from './MainPage.module.scss';
import images from '../data';
import Image from 'next/image';

const MainPage: React.FC = () => {
	const items = images.map((image) => (
		<li
			key={image.id}
			className={style.item}
			style={{ animationDelay: `${image.id * 0.2}s` }}
		>
			<Image
				src={image.src}
				alt={image.alt}
				width={600}
				height={600}
				loading="lazy"
			/>
		</li>
	));

	return <ul className={style.list}>{items}</ul>;
};

export default MainPage;
