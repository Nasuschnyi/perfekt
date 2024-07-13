import { ImCheckmark } from 'react-icons/im';
import style from './Title.module.scss';
import Link from 'next/link';

export default function Title() {
	return (
		<>
			<h1 className={style.slogan}>
				<Link
					href="https://perfekt.com.ua"
					target="_blank"
					className={style.title}
				>
					Perfekt
				</Link>{' '}
				Ваш надійний магазин сантехніки!
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
					Ми пропонуємо все, від <strong>змішувачів</strong> та{' '}
					<strong>кранів</strong>, <strong>шлангів</strong>,{' '}
					<strong>аксесуарів для ванної кімнати</strong>,{' '}
					<strong>фітингів до розумного унітазу біде</strong> ,{' '}
					<strong>зарядних станцій</strong>,{' '}
					<strong>портативних зарядних станцій</strong>,{' '}
					<strong>павербанків</strong>, <strong>генераторів</strong>{' '}
					та <strong>інше</strong>.
				</li>{' '}
				<li className={style.item}>
					<ImCheckmark />
					Наша команда досвідчених фахівців завжди готова допомогти
					вам знайти ідеальний продукт, що відповідає вашим потребам
					та бюджету.
				</li>{' '}
				<li className={style.item}>
					<ImCheckmark />
					Доставимо замовлення до вашого дому по всій Україні.
				</li>{' '}
			</ul>
		</>
	);
}
