import React, { CSSProperties } from 'react';
import Link from 'next/link';
import style from './SubMenu.module.scss';
import { IoMdArrowRoundDown } from 'react-icons/io';
import Title from '../UI/Title/Title';
import Logo from '../UI/Logo/Logo';

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
				<section className={style.about}>
					<h2 className={style.aboutTitle}>
						{data.about.details.title}
					</h2>
					<div className={style.aboutContent}>
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
									<svg viewBox="0 0 1024.000000 1024.000000">
							<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)">
								<path
									d="M5040 8338 c-47 -27 -195 -113 -330 -191 -135 -77 -328 -188 -430
								-247 -102 -59 -504 -291 -895 -516 -390 -224 -787 -452 -881 -506 -186 -107
								-221 -134 -229 -182 -3 -17 -4 -737 -3 -1601 l3 -1570 21 -30 c16 -21 166
								-112 505 -306 266 -152 693 -397 949 -544 256 -148 627 -361 825 -475 198
								-114 400 -230 449 -259 49 -28 94 -51 100 -51 15 0 155 79 706 398 621 359
								742 429 1070 617 527 303 965 558 1007 586 80 55 74 -80 71 1679 l-3 1565 -22
								31 c-26 36 -47 50 -318 206 -110 64 -346 200 -525 304 -179 103 -365 211 -415
								239 -49 28 -313 180 -585 337 -272 157 -592 340 -710 408 -118 67 -228 131
								-245 141 l-30 17 -85 -50z m274 -742 c99 -56 366 -208 591 -336 226 -129 529
								-301 675 -385 146 -83 388 -220 537 -305 l273 -155 0 -1292 0 -1292 -82 -49
								c-46 -27 -146 -86 -223 -129 -77 -44 -196 -113 -265 -153 -69 -40 -217 -125
								-330 -190 -248 -142 -927 -533 -1175 -677 l-179 -104 -46 26 c-25 14 -80 44
								-122 68 l-78 42 0 228 c0 125 2 227 5 227 2 0 54 -28 115 -61 64 -36 118 -59
								128 -57 16 5 488 273 987 562 77 45 298 171 492 281 l352 200 -2 1074 -2 1074
								-175 100 c-96 55 -209 119 -250 142 -41 23 -162 92 -269 154 -195 113 -265
								151 -276 151 -4 0 9 -19 28 -42 19 -24 46 -62 60 -84 14 -23 57 -81 96 -129
								83 -104 142 -218 172 -335 20 -78 22 -115 26 -453 6 -469 -5 -563 -83 -721
								-104 -208 -255 -342 -479 -425 l-70 -26 -527 -3 -528 -3 0 -869 c0 -479 -2
								-870 -5 -870 -3 0 -23 11 -44 25 -31 19 -303 179 -603 354 l-28 16 0 1948 c0
								1846 1 1948 18 1954 23 9 922 521 1037 591 28 17 54 31 59 31 4 1 90 -46 190
								-103z m-1504 -871 l0 -225 -44 -28 c-24 -15 -143 -83 -264 -152 -200 -113
								-222 -128 -227 -155 -3 -16 -4 -500 -3 -1074 l3 -1044 90 -49 c127 -70 429
								-240 435 -245 3 -3 5 -110 6 -239 l1 -234 -31 19 c-95 58 -277 163 -476 276
								-204 115 -262 148 -341 195 -14 8 -45 26 -67 39 l-42 25 0 1288 0 1287 82 48
								c432 251 855 492 866 492 9 1 12 -50 12 -224z"
								/>
								<path
									d="M4905 7108 c-353 -206 -424 -249 -430 -259 -4 -5 176 -9 462 -8 257
								1 455 5 438 9 -17 4 55 8 168 9 151 1 198 4 195 13 -4 10 -488 300 -588 352
								-23 12 -39 5 -245 -116z"
								/>
								<path
									d="M4690 5677 l0 -507 413 2 c397 3 414 4 458 24 25 12 59 39 75 60 l29
								37 3 356 c2 196 0 371 -3 389 -3 18 -20 48 -37 68 -62 71 -47 68 -516 74
								l-422 5 0 -508z"
								/>
							</g>
						</svg>
						</figure>
					</div>
					<Title/>
				</section>
			);
			break;
		case 3:
			content = (
				<div>
					<p>{data.contact.information.address}</p>
					<p>{data.contact.information.phone}</p>
					<p>{data.contact.information.email}</p>
					<Title/>
				</div>
			);
			break;
	}

	return <>{content}</>;
};

export default SubMenu;
