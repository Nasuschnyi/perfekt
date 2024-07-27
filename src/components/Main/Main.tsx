import Title from '../UI/Title/Title';
import style from './Main.module.scss';
import MainPage from './MainPage/MainPage';
import VideoSlider from './MainSwiper/VideoSlider';

const Main = () => {
	return (
		<main className={style.main}>
			<MainPage />
			<VideoSlider />
			<Title />
		</main>
	);
};

export default Main;
