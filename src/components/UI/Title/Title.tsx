import { ImCheckmark } from 'react-icons/im';
import style from './Title.module.scss';

export default function Title() {
	return (
		<>
			<h1 className={style.slogan}>
				<strong className={style.title}>Perfekt</strong> Ваш надійний
				магазин сантехніки!
			</h1>
			<ul className={style.list}>
				<li className={style.item}>
					<ImCheckmark />
					Вітаємо в нашому інтернет-магазині сантехніки, де ви
					знайдете широкий асортимент високоякісних товарів для ванної
					кімнати та кухні.
				</li>{' '}
				<li className={style.item}>
					<ImCheckmark />
					Ми пропонуємо все, від <strong>змішувачів та кранів</strong>
					, <strong>шлангів</strong>,{' '}
					<strong>аксесуарів для ванної кімнати</strong>,{' '}
					<strong>фітингів</strong> до{' '}
					<strong>розумного унітазу біде</strong> та інше.
				</li>{' '}
				<li className={style.item}>
					<ImCheckmark />
					Наша команда досвідчених фахівців завжди готова допомогти
					вам знайти ідеальний продукт, що відповідає вашим потребам
					та бюджету.
				</li>{' '}
			</ul>
		</>
	);
}
