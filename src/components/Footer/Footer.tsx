import Link from 'next/link';
import style from './Footer.module.scss';
import { TbTruckDelivery } from 'react-icons/tb';
import { SiGnuprivacyguard } from 'react-icons/si';

export default function Footer() {
	return (
		<footer className={style.footer}>
			<section className={style.section}>
				<nav className={style.nav}>
					<Link
						className={style.link}
						href="delivery"
						target="_blank"
					>
						<TbTruckDelivery /> Доставка
					</Link>
					<Link
						className={style.link}
						href="privacy"
						target="_blank"
					>
						<SiGnuprivacyguard /> Конфіденційність
					</Link>
				</nav>
				<p className={style.copyright}>© N.A.O - 2024</p>
			</section>
		</footer>
	);
}
