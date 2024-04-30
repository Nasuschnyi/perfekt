import style from './SearchPage.module.scss';
import Link from 'next/link';
import data from './data';
import Image from 'next/image';

interface SearchPageProps {
	onClick: () => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onClick }) => {
	const content = data.items.map((item) => (
		<li
			key={item.id}
			className={style.contentItem}
			style={{ animationDelay: `${item.id * 0.2}s` }}
		>
			<Link
				className={style.contentLink}
				href={item.link}
				target="_blank"
			>
				<figure className={style.contentFigure}>
					<Image
						src={item.img}
						alt={item.alt}
						width={500}
						height={500}
					/>
				</figure>
				<h2 className={style.contentTitle}>{item.title}</h2>
			</Link>
		</li>
	));

	const links = data.items.map((item) => (
		<li
			key={item.id}
			className={style.asideItem}
			style={{ animationDelay: `${item.id * 0.2}s` }}
		>
			<Link
				href={item.link}
				target="_blank"
				className={style.asideLink}
			>
				{item.title}
			</Link>
		</li>
	));

	return (
		<main className={style.main}>
			<aside className={style.aside}>
				<h1 className={style.asideTitle}>ТОП ПОШУКУ</h1>
				<ul className={style.asideList}>{links}</ul>
			</aside>
			<section className={style.content}>
				<ul className={style.contentList}>{content}</ul>
			</section>
		</main>
	);
};

export default SearchPage;
