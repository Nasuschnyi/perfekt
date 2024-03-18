import React from 'react';
import style from './Menu.module.scss';
import MenuButton from './MenuButton/MenuButton';
import menuList from './data';
import SubMenu from '../SubMenu/SubMenu';
import data from '../SubMenu/data';

const Menu: React.FC = () => {
	const [selectedItem, setSelectedItem] = React.useState<number | null>(null);

	return (
		<nav className={style.nav}>
			<menu className={style.menu}>
				{menuList.map((item) => (
					<li key={item.id} className={style.item}>
						<MenuButton
							title={item.title}
							openMenu={() =>
								selectedItem === item.id
									? setSelectedItem(null)
									: setSelectedItem(item.id)
							}
							isSelected={selectedItem === item.id}
						/>
						{selectedItem === item.id && (
							<div className={style.sub}>
								<SubMenu data={data} id={item.id} />
							</div>
						)}
					</li>
				))}
			</menu>
		</nav>
	);
};

export default Menu;
