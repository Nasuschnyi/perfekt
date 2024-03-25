import Logo from '@/components/UI/Logo/Logo';
import style from './SearchPage.module.scss';
import Search from '@/components/UI/Input/Search/Search';

const SearchPage = () => {
	return (
		<>
			<header className={style.header}>
				<div className={style.container}>
					<Logo />
					<Search />
				</div>
			</header>
			<main className={style.main}></main>
		</>
	);
};

export default SearchPage;
