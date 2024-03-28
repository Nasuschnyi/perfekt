import style from './Main.module.scss';
import images from './data';

const Main = () => {
	return (
		<main className={style.main}>
			<section className={style.section}>
				{images.map((image) => (
					<img
						key={image.id}
						className={`${style.image} ${
							style[`image-${image.ratio}`]
						}`}
						src={image.src}
						alt={image.alt}
					/>
				))}
			</section>
		</main>
	);
};

export default Main;
