import style from './Main.module.scss';
import MainPage from './MainPage/MainPage';

const Main = () => {
	return (
		<main className={style.main}>
			<MainPage/>
			<h1 className={style.title}>Perfekt</h1>	
		</main>
	);
};

export default Main;
