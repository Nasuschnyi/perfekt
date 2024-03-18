import { useState } from 'react';
import style from './Burger.module.scss';

export default function Burger() {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<button
			onClick={handleClick}
			className={
				isActive ? `${style.burger} ${style.active}` : `${style.burger}`
			}
		>
			<div className={style.box}>
				<div className={style.inner}></div>
			</div>
		</button>
	);
}
