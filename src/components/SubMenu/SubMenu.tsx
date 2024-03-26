import Link from 'next/link';
import style from './SubMenu.module.scss';
import data from './data';
import React from 'react';
import { IoMdArrowRoundDown } from 'react-icons/io';

interface SubItem {
	id: number;
	title: string;
	subList: { subId: number; subTitle: string; subLink: string }[];
}

interface SubMenuProps {
	data: {
		catalog: {
			items: SubItem[];
		};
		about: {
			details: {
				title: string;
				description: string;
			};
		};
		contact: {
			information: {
				address: string;
				phone: string;
				email: string;
			};
		};
	};
	id: number;
}

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
						<li key={id} className={style.subItem}>
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
				<div>
					<h3>{data.about.details.title}</h3>
					<p>{data.about.details.description}</p>
				</div>
			);
			break;
		case 3:
			content = (
				<div>
					<p>{data.contact.information.address}</p>
					<p>{data.contact.information.phone}</p>
					<p>{data.contact.information.email}</p>
				</div>
			);
			break;
	}

	return <>{content}</>;
};

export default SubMenu;
