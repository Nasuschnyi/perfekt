import Logo from '@/components/UI/Logo/Logo';
import style from './SearchPage.module.scss';
import About from '../About/About';
import Search from '@/components/UI/Input/Search/Search';
import SearchButtonClose from '@/components/UI/Button/SearchButtonClose/SearchButtonClose';

const SearchPage = () => {
	return (
		<>
			<header className={style.header}>
				<div className={style.container}>
					<Logo />
					<Search />
					<button
						style={{ display: 'none' }}
						className={style.burger}
					></button>
				</div>
			</header>
			<main className={style.main}></main>
		</>
	);
};

export default SearchPage;
