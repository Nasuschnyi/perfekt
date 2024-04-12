import React from 'react';
import Link from 'next/link';
import style from './SubMenu.module.scss';
import { IoMdArrowRoundDown } from 'react-icons/io';
import { SubMenuProps } from './types';
import { MdLocalGroceryStore } from 'react-icons/md';
import data from './data';

const SubMenu: React.FC<SubMenuProps> = ({ data, id }) => {
	const [openSubItem, setOpenSubItem] = React.useState<number | null>(null);

	const toggleNestedSubMenu = (subItemId: number) => {
		setOpenSubItem(openSubItem !== subItemId ? subItemId : null);
	};

	let content = null;

	switch (id) {
		case 1:
			content = (
				<ul className={style.subMenu}>
					{data.catalog.items.map((item, id) => (
						<li
							key={id}
							className={style.subItem}
						>
							<button
								className={`${style.subBtn} ${
									openSubItem === id ? style.active : ''
								}`}
								onClick={() => toggleNestedSubMenu(id)}
							>
								{item.title}
								<IoMdArrowRoundDown />
							</button>
							{openSubItem === id && (
								<ul className={style.nestedSubMenu}>
									{item.subList.map((subItem) => (
										<li
											key={subItem.subId}
											className={style.nestedSubItem}
										>
											<Link
												href={subItem.subLink}
												onClick={() =>
													toggleNestedSubMenu(id)
												}
												className={style.nestedSubLink}
												target="_blank"
											>
												{subItem.subTitle}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			);
			break;
		case 2:
			content = (
				<section className={style.about}>
					<h2 className={style.aboutTitle}>
						{data.about.details.title}
					</h2>
					<p className={style.aboutDescription}>
						<Link
							className={style.aboutLink}
							target="_blank"
							href="https://perfekt.com.ua"
						>
							Perfekt.com.ua
						</Link>
						{data.about.details.description
							.split('\n')
							.map((sentence, index) => (
								<React.Fragment key={index}>
									{sentence.trim()}
									<br />
								</React.Fragment>
							))}
					</p>
					<figure className={style.aboutFigure}>
						<MdLocalGroceryStore className={style.aboutIcon} />
					</figure>
				</section>
			);
			break;
	}

	return <>{content}</>;
};

export default SubMenu;
