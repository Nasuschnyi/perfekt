import React, { useState } from 'react';
import style from '../Menu.module.scss';
import { IoMdArrowRoundDown } from 'react-icons/io';

const MenuButton: React.FC<{
	title: string;
	openMenu: () => void;
	isSelected: boolean;
}> = ({ title, openMenu, isSelected }) => {
	return (
		<button
			onClick={openMenu}
			className={`${style.button} ${isSelected ? style.active : ''}`}
		>
			{title}
			<IoMdArrowRoundDown />
		</button>
	);
};

export default MenuButton;
