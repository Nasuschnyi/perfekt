'use client';
import { FiSearch } from 'react-icons/fi';
import style from './SearchBar.module.scss';
import { useRouter } from 'next/navigation';

const SearchBar: React.FC = () => {
	const router = useRouter();

	return (
		<form className={style.searchBar}>
			<FiSearch className={style.searchIcon} />
			<input
				className={style.search}
				onClick={() => router.push('/search')}
				type="text"
				placeholder="Пошук товарів..."
			/>
		</form>
	);
};

export default SearchBar;
