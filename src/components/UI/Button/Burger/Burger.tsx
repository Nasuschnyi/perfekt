import React, { useState } from 'react';
import style from './Burger.module.scss';

type BurgerProps = {
	setIsActive: (isActive: boolean) => void;
};

const Burger = ({ setIsActive }: BurgerProps) => {
	const [isActive, setIsActiveState] = React.useState<boolean>(false);

	const handleClick = () => {
		setIsActiveState(!isActive);
		setIsActive(!isActive);
	};

	return (
		<button
			onClick={handleClick}
			className={
				isActive ? `${style.burger} ${style.active}` : `${style.burger}`
			}
		>
			<div className={style.box}>
				<div className={style.inner}></div>
			</div>
		</button>
	);
};

export default Burger;
