import React, { RefObject } from 'react';
import style from './Menu.module.scss';
import MenuButton from './MenuButton/MenuButton';
import menuList from './data';
import SubMenu from '../SubMenu/SubMenu';
import data from '../SubMenu/data';

const Menu = ({ isBurgerActive }: { isBurgerActive: boolean }) => {
	const [selectedItem, setSelectedItem] = React.useState<number | null>(null);
	const menuRef: RefObject<HTMLDivElement> =
		React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setSelectedItem(null);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<nav
			ref={menuRef}
			className={
				isBurgerActive ? `${style.nav} ${style.active}` : style.nav
			}
		>
			<menu className={style.menu}>
				{menuList.map((item) => (
					<li
						key={item.id}
						className={style.item}
					>
						<MenuButton
							title={item.title}
							openMenu={() => {
								setSelectedItem(
									selectedItem === item.id ? null : item.id
								);
								return selectedItem !== item.id;
							}}
							isSelected={selectedItem === item.id}
						/>
						{selectedItem === item.id && (
							<div className={style.sub}>
								<SubMenu
									data={data}
									id={item.id}
								/>
							</div>
						)}
					</li>
				))}
			</menu>
		</nav>
	);
};

export default Menu;
