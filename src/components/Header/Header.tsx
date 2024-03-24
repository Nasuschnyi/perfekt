import style from './Header.module.scss';
import About from '@/app/About/About';
import Menu from '../Menu/Menu';
import Logo from '../UI/Logo/Logo';
import SearchBar from '../UI/Input/SearchBar/SearchBar';
import CallButton from '../UI/Button/CallButton/CallButton';
import Burger from '../UI/Button/Burger/Burger';
import React from 'react';

const Header = () => {
	const [isBurgerActive, setBurgerActive] = React.useState(false);

	return (
		<header className={style.header}>
			<div className={style.container}>
				<Logo />
				<SearchBar />
				<CallButton />
				<About />
				<Burger setIsActive={setBurgerActive} />
			</div>
			<Menu isBurgerActive={isBurgerActive} />
		</header>
	);
};

export default Header;
