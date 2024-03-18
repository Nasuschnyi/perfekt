import Header from '@/components/Header/Header';
import style from './Homepage.module.scss';

const Homepage = () => {
	return (
		<>
			<Header />
			<main className={style.main}></main>
		</>
	);
};

export default Homepage;
