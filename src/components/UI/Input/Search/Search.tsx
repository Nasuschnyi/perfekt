import { useState } from 'react';
import SearchButtonClose from '../../Button/SearchButtonClose/SearchButtonClose';
import style from './Search.module.scss';

const Search: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [isInputFocused, setIsInputFocused] = useState(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleClearSearch = () => {
		setSearchQuery('');
	};

	const handleInputFocus = () => {
		setIsInputFocused(true);
	};

	return (
		<form className={style.searchForm}>
			<input
				className={style.search}
				type="text"
				value={searchQuery}
				onChange={handleInputChange}
				onFocus={handleInputFocus}
				placeholder="Пошук товарів..."
			/>
			{searchQuery && (
				<button className={style.reset} onClick={handleClearSearch}>
					Reset
				</button>
			)}
			{isInputFocused && <SearchButtonClose />}
		</form>
	);
};

export default Search;
