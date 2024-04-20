import React from 'react';
import style from './HeaderPage.module.scss';
import About from '@/app/About/About';
import Menu from '../Menu/Menu';
import Logo from '../UI/Logo/Logo';
import Burger from '../UI/Button/Burger/Burger';
import Search from '../UI/Input/Search/Search';
import SearchPage from '@/app/SearchPage/SearchPage';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Contact from '@/app/Contact/Contact';

const HeaderPage = React.memo(() => {
	const [isBurgerActive, setBurgerActive] = React.useState(false);
	const [isSearchPage, setIsSearchPage] = React.useState(false);
	const [isFooterVisible, setIsFooterVisible] = React.useState(true);

	const handleSearchClick = React.useCallback(() => {
		setIsSearchPage(true);
		setIsFooterVisible(false);
	}, []);

	const handleSearchClose = React.useCallback(() => {
		setIsSearchPage(false);
		setIsFooterVisible(true);
	}, []);

	return (
		<>
			<header className={style.header}>
				<section className={style.container}>
					<Logo />
					<Search
						onClick={handleSearchClick}
						onClose={handleSearchClose}
					/>
					<Contact />
					<About />
					<Burger setIsActive={setBurgerActive} />
				</section>
				<Menu isBurgerActive={isBurgerActive} />
			</header>
			{isSearchPage ? (
				<SearchPage onClick={handleSearchClose} />
			) : (
				<Main />
			)}
			{isFooterVisible && <Footer />}
		</>
	);
});

HeaderPage.displayName = 'HeaderPage';

export default HeaderPage;
