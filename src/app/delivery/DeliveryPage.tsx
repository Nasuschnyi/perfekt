import { TbMoneybag, TbTruckDelivery } from 'react-icons/tb';
import style from './Delivery.module.scss';
import {
	MdAttachMoney,
	MdCreditScore,
	MdOutlineShoppingBag,
} from 'react-icons/md';
import Link from 'next/link';
import { LuShieldCheck } from 'react-icons/lu';
import { RiFilePaper2Line } from 'react-icons/ri';

const DeliveryPage = () => {
	return (
		<section className={style.delivery}>
			<h1 className={style.title}>Умови оплати та доставки</h1>

			<ul className={style.list}>
				<h2 className={style.subTitle}>
					<TbTruckDelivery />
					Здійснюємо доставку через служби
				</h2>
				<li className={style.item}>
					<span className={style.text}>Нова Пошта</span>
				</li>
				<li className={style.item}>
					<span className={style.text}>Укрпошта</span>
				</li>
				<li className={`${style.item} ${style.itemLast}`}>
					<span className={style.text}>
						Термін доставки 1 - 5 днів.
					</span>
				</li>
			</ul>

			<ul className={style.list}>
				<h2 className={style.subTitle}>
					<MdOutlineShoppingBag />
					Що потрібно для отримання товару?
				</h2>
				<li className={style.item}>Для приватних осіб – паспорт.</li>
				<li className={style.item}>
					Для юридичних осіб та СПД: оригінал доручення, виписаного на
					пред'явника компанії, і паспорт.
				</li>
				<li className={style.item}>
					Без оформлення доручення товар може отримати директор
					підприємства із завіренням видаткових накладних печаткою
					підприємства і з паспортом.
				</li>
				<li className={`${style.item} ${style.itemLast}`}>
					<span>
						<span className={style.warning}>Важливо!</span> Якщо
						товар або упаковка пошкоджена, необхідно скласти акт на
						службі доставки та зв'язатися з нашим менеджером. У разі
						виникнення питань, пов'язаних з доставкою або оплатою,
						зв'яжіться з нашим менеджером.
					</span>
				</li>
			</ul>

			<ul className={style.list}>
				<h2 className={style.subTitle}>
					<TbMoneybag />
					Вартість доставки товарів по Україні
				</h2>
				<li className={style.item}>
					<span className={style.text}>
						Безкоштовно – при сумі замовлення від 5000 грн
					</span>
				</li>
				<li className={style.item}>
					<span className={style.text}>
						За тарифами перевізника при сумі замовлення до 5000 грн
					</span>
				</li>
			</ul>

			<ul className={style.list}>
				<h2 className={style.subTitle}>
					<MdAttachMoney />
					Оплата замовлення:
				</h2>
				<li className={style.item}>
					<span className={style.text}>
						На картку ПриватБанку, МоноБанку або розрахунковий
						рахунок ФОП.
					</span>
				</li>
				<li className={style.item}>
					<span className={style.text}>
						Миттєвим платежем LiqPay Visa, Mastercard при оформленні
						замовлення на сайті.
					</span>
				</li>
				<li className={style.item}>
					<span className={style.text}>
						Накладним платежем – оплата готівкою на складі
						вантажоперевізника " (комісія "Нова пошта" - 20 грн + 3%
						від вартості товару).
					</span>
				</li>
				<li className={style.item}>
					<span className={style.text}>
						Готівкою кур'єру при адресній доставці додому.
					</span>
				</li>
				<li className={style.item}>
					<span className={style.text}>
						Оплата частинами від МоноБанк, без додаткових комісій,
						максимум на 3 місяці (4 платежі).
					</span>
				</li>
				<li className={style.item}>
					<span className={style.text}>
						Замовлення у розмірі менше 200 грн. відправляються лише
						за передоплатою.
					</span>
				</li>
				<li className={`${style.item} ${style.itemLast}`}>
					<span>
						<span className={style.warning}>Важливо!</span>
						 Обов'язково перевірте наявність всього товару у
						замовленні при отриманні, а також його зовнішній вигляд.
						У разі пошкодження товару або неповної комплектації
						замовлення, необхідно зв'язатися з менеджером нашого
						інтернет-магазину.
					</span>
				</li>
			</ul>

			<ul className={style.list}>
				<h2 className={style.subTitle}>
					<MdCreditScore />
					Безготівкова оплата
				</h2>
				<li className={style.item}>
					Після оформлення заявки на електронну адресу буде надіслано
					рахунок з реквізитами для оплати.
				</li>
				<li className={style.item}>
					Відвантаження замовлення відбувається тільки після
					зарахування коштів на рахунок магазину.
				</li>
				<li className={style.item}>
					Ми зателефонуємо вам або надішлемо повідомлення про
					відправлення замовлення до відділення перевізника, плановану
					дату отримання.
				</li>
				<li className={style.item}>
					<span>
						Після отримання рахунку, якщо замовлення робиться
						вперше, відправте реєстраційні дані у відповідь на лист
						з рахунком (
						<Link
							href="mailto:perfektbaza@gmail.com"
							target="_blank"
							className={style.link}
						>
							perfektbaza@gmail.com
						</Link>
						).
					</span>
				</li>
				<li className={style.item}>
					Наша компанія не є платником ПДВ.
				</li>
				<li className={style.item}>
					Під час отримання замовлення в пакеті документів надається:
					видаткова накладна, рахунок-фактура.
				</li>
			</ul>

			<ul className={style.list}>
				<h2 className={style.subTitle}>
					<LuShieldCheck />
					Гарантія
				</h2>
				<li className={style.item}>
					<span className={style.text}>
						Гарантія на заводський брак протягом 14 днів.
					</span>
				</li>
			</ul>
			<ul className={style.list}>
				<h2 className={style.subTitle}>
					<RiFilePaper2Line />
					Умови повернення та обміну товарів:
				</h2>
				<li className={style.item}>
					Інтернет-магазин здійснює повернення та обмін товару
					відповідно до вимог законодавства України.
				</li>
				<li className={style.item}>
					Важливо знати при поверненні або обміні товару.
				</li>
				<li className={style.item}>
					Згідно з чинними законами Ви можете повернути товар належної
					якості або обміняти його протягом 14 днів, якщо товар не був
					у вжитку і не має слідів використання, подряпин, сколів,
					потертостей тощо.
				</li>
			</ul>
		</section>
	);
};

export default DeliveryPage;
