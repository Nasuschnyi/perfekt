import React, { useState } from 'react';
import style from '../Menu.module.scss';

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
		</button>
	);
};

export default MenuButton;
