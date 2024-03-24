import Header from '@/components/Header/Header';
import style from './Homepage.module.scss';
import Hexagon from '@/components/UI/Hexagon/Hexagon';

const Homepage = () => {
	return (
		<>
			<Header />
			<main className={style.main}>
				<Hexagon />
			</main>
		</>
	);
};

export default Homepage;
