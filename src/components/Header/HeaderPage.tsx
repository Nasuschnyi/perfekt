import React from 'react';
import style from './HeaderPage.module.scss';
import About from '@/app/About/About';
import Menu from '../Menu/Menu';
import Logo from '../UI/Logo/Logo';
import Burger from '../UI/Button/Burger/Burger';
import Search from '../UI/Input/Search/Search';
import SearchPage from '@/app/SearchPage/SearchPage';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Contact from '@/app/Contact/Contact';
import data from '../SubMenu/data';
import Link from 'next/link';
import { MdOutlineNearbyError } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';

interface CatalogItem {
	title: string;
	id: number;
	[key: string]: any;
}

const HeaderPage = React.memo(() => {
	const [isBurgerActive, setBurgerActive] = React.useState<boolean>(false);
	const [isSearchPage, setIsSearchPage] = React.useState<boolean>(false);
	const [isFooterVisible, setIsFooterVisible] = React.useState<boolean>(true);
	const [filter, setFilter] = React.useState<{ sort: string; query: string }>(
		{
			sort: '',
			query: '',
		}
	);

	const sortedItems = React.useMemo(() => {
		if (filter.sort) {
			return [...data.catalog.items].sort(
				(a: CatalogItem, b: CatalogItem) => {
					return a[filter.sort].localeCompare(b[filter.sort]);
				}
			);
		}
		return data.catalog.items;
	}, [filter.sort, data.catalog.items]);

	const searchItems = React.useMemo(() => {
		return data.catalog.items.filter((item) =>
			item.title.toLowerCase().includes(filter.query.toLowerCase())
		);
	}, [filter.query, sortedItems]);

	const handleSearchClick = React.useCallback(() => {
		setIsSearchPage(true);
		setIsFooterVisible(false);
	}, []);

	const handleSearchClose = React.useCallback(() => {
		setIsSearchPage(false);
		setIsFooterVisible(true);
	}, []);

	return (
		<>
			<header className={style.header}>
				<section className={style.container}>
					<Logo />
					<div className={style.wrapper}>
						<Search
							onClick={handleSearchClick}
							onClose={handleSearchClose}
							filter={filter}
							setFilter={setFilter}
						/>
						{filter.query ? (
							searchItems.length > 0 ? (
								<ul className={style.searchItems}>
									{searchItems.map((item) => (
										<li className={style.searchItem}>
											<Link
												className={style.searchLink}
												key={item.id}
												href=""
											>
												{item.title}
											</Link>
										</li>
									))}
								</ul>
							) : (
								<ul className={style.searchItems}>
									<h2 className={style.searchNotFound}>
										Товар не знайдено
										<MdOutlineNearbyError />
										Спробуйте ще
										<FcLike />
									</h2>
								</ul>
							)
						) : null}
					</div>
					<Contact />
					<About />
					<Burger setIsActive={setBurgerActive} />
				</section>
				<Menu isBurgerActive={isBurgerActive} />
			</header>
			{isSearchPage ? (
				<SearchPage onClick={handleSearchClose} />
			) : (
				<Main />
			)}
			{isFooterVisible && <Footer />}
		</>
	);
});

HeaderPage.displayName = 'HeaderPage';

export default HeaderPage;
