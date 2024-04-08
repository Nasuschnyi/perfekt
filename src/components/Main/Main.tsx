import Title from '../UI/Title/Title';
import style from './Main.module.scss';
import MainPage from './MainPage/MainPage';

const Main = () => {
	return (
		<main className={style.main}>
			<MainPage />
			<Title />
		</main>
	);
};

export default Main;
