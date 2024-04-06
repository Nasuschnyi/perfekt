import { useState } from 'react';
import style from './CallButton.module.scss';
import { FaPhone } from 'react-icons/fa6';

const CallButton: React.FC = () => {
	const [showNumber, setShowNumber] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState('');

	const handleToggleNumber = () =>
		setShowNumber((prevShowNumber) => !prevShowNumber);

	const handleSelectNumber = (phoneNumber: string) => {
		setSelectedNumber(phoneNumber);
		setShowNumber(false);
		window.location.href = `tel:${phoneNumber}`;
	};

	return (
		<div className={style.container}>
			<button
				className={style.call}
				onClick={handleToggleNumber}
				style={{
					opacity: showNumber ? 1 : 0.8,
					transition: 'all 0.3s ease-in-out',
				}}
			>
				<FaPhone />
			</button>
			{showNumber && (
				<ul className={style.list}>
					<li className={style.item}>
						<button
							className={style.btn}
							onClick={() => handleSelectNumber('+380976557668')}
						>
							+38 (097) 655 76 68
						</button>
					</li>
				</ul>
			)}
		</div>
	);
};

export default CallButton;
