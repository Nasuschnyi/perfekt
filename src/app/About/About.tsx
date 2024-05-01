import React from 'react';
import style from './About.module.scss';
import data from './data';
import { IoCloseOutline, IoTime } from 'react-icons/io5';
import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';

export default function About() {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const handleToggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	const handleClose = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsOpen(false);
	};

	const handleListClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	React.useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (isOpen && !(e.target as Element).closest(`.${style.list}`)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<>
			<button
				className={style.about}
				onClick={handleToggle}
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			{isOpen && (
				<ul
					className={style.list}
					onClick={handleListClick}
				>
					<li className={style.item}>
						<IoTime className={style.icon} />
						{data.time}
					</li>
					<li className={style.item}>
						<Link
							className={style.link}
							target="_blank"
							href="https://maps.app.goo.gl/5CEszVb75pUBjVWL6"
						>
							<FaLocationDot className={style.icon} />
							{data.address}
						</Link>
					</li>
					<button
						className={style.close}
						onClick={handleClose}
					>
						<IoCloseOutline />
					</button>
				</ul>
			)}
		</>
	);
}
