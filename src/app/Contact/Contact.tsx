import React from 'react';
import style from './Contact.module.scss';
import data from './data';
import { IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';
import { FaPhone, FaPhoneFlip } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export default function Contact() {
	const [isOpen, setIsOpen] = React.useState(false);

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
				className={style.contact}
				onClick={handleToggle}
			>
				<FaPhone />
			</button>
			{isOpen && (
				<ul
					className={style.list}
					onClick={handleListClick}
				>
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
