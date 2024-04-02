import React from "react";
import Link from "next/link";
import style from "./SubMenu.module.scss";
import Title from "../UI/Title/Title";
import { IoMdArrowRoundDown, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";

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
				time: string;
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
						<li
							key={id}
							className={style.subItem}
						>
							<button
								className={`${style.subBtn} ${
									openSubItem === id ? style.active : ""
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
				<section className={style.about}>
					<h2 className={style.aboutTitle}>
						{data.about.details.title}
					</h2>
					<div className={style.aboutContent}>
						<ul className={style.contact}>
							<li>
								<FaLocationDot />
								{data.contact.information.address}
							</li>
							<li>
								<BsFillTelephoneFill />
								<Link href="tel:{data.contact.information.phone}">
									{data.contact.information.phone}
								</Link>
							</li>
							<li>
								<IoMdMail />
								<Link href="mailto:{data.contact.information.email}">
									{data.contact.information.email}
								</Link>
							</li>
							<li>
								<IoTime />
								{data.contact.information.time}
							</li>
							<HiShoppingBag className={style.shoppingBag} />
						</ul>
						<p className={style.aboutDescription}>
							<Link
								className={style.aboutLink}
								target="_blank"
								href="https://perfekt.com.ua"
							>
								Perfekt.com.ua
							</Link>
							{data.about.details.description
								.split("\n")
								.map((sentence, index) => (
									<React.Fragment key={index}>
										{sentence.trim()}
										<br />
									</React.Fragment>
								))}
						</p>
					</div>
					<Title />
				</section>
			);
			break;
	}

	return <>{content}</>;
};

export default SubMenu;
