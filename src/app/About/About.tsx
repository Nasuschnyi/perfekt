import { useState } from 'react';
import style from './About.module.scss';
import data from './data';
import { IoCloseOutline, IoTime } from 'react-icons/io5';
import Link from 'next/link';
import { FaLocationDot, FaPhoneFlip } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export default function About() {
	const [isOpen, setIsOpen] = useState(false);

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
						<FaLocationDot className={style.icon} />
						{data.address}
					</li>
					<li className={style.item}>
						<Link
							className={style.link}
							href={`tel:${data.phone}`}
						>
							<FaPhoneFlip className={style.icon} />
							{data.phone}
						</Link>
					</li>
					<li className={style.item}>
						<Link
							className={style.link}
							href={`mailto:${data.email}`}
						>
							<IoMdMail className={style.icon} />
							{data.email}
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
