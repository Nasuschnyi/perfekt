import style from './Main.module.scss';
import MainPage from './MainPage/MainPage';

const Main = () => {
	return (
		<main className={style.main}>
			<MainPage/>
		</main>
	);
};

export default Main;
