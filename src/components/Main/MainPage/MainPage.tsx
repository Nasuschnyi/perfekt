import style from "./MainPage.module.scss";
import images from "../data";

const MainPage: React.FC = () => {
	const items = images.map((image) => (
		<li
			key={image.id}
			className={style.item}
			style={{ animationDelay: `${image.id * 0.2}s` }}
		>
			<img
				src={image.src}
				alt={image.alt}
			/>
		</li>
	));

	return <ul className={style.list}>{items}</ul>;
};

export default MainPage;
