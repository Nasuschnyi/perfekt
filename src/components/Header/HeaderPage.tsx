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
	const searchItems = React.useMemo(
		() => data.catalog.items.flatMap((item) => item.subList),
		[data.catalog.items]
	);

	const sortedItems = React.useMemo(() => {
		if (filter.sort in filter) {
			return searchItems.sort((a, b) => {
				return (a as any)[filter.sort].localeCompare(
					(b as any)[filter.sort]
				);
			});
		}
		return searchItems;
	}, [filter.sort, searchItems]);

	const searchedItems = React.useMemo(() => {
		return searchItems.filter((item) =>
			item.subTitle.toLowerCase().includes(filter.query.toLowerCase())
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
							searchedItems.length > 0 ? (
								<ul className={style.searchItems}>
									{searchedItems.map((item) => (
										<li
											key={item.subId}
											className={style.searchItem}
										>
											<Link
												className={style.searchLink}
												href={item.subLink}
												target="_blank"
											>
												{item.subTitle}
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
