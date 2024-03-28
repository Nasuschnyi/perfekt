import style from './Main.module.scss';
import images from './data';

const Main = () => {
	return (
		<main className={style.main}>
			<section className={style.section}>
				{images.map((image) => (
					<img key={image.id}  src={image.src} alt={image.alt} className={`${style.img} ${style[image.ratio]}`}/>
				))}
			</section>
		</main>
	);
};

export default Main;
