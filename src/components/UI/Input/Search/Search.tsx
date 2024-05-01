import React from 'react';
import SearchButtonClose from '../../Button/SearchButtonClose/SearchButtonClose';
import style from './Search.module.scss';
import { FiSearch } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

type SearchProps = {
	onClick: () => void;
	onClose: () => void;
	filter: { sort: string; query: string };
	setFilter: React.Dispatch<
		React.SetStateAction<{ sort: string; query: string }>
	>;
};

const Search: React.FC<SearchProps> = ({
	onClick,
	onClose,
	filter,
	setFilter,
}) => {
	const [searchQuery, setSearchQuery] = React.useState('');
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [isInputFocused, setIsInputFocused] = React.useState<boolean>(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleInputFocus = () => {
		setIsInputFocused(true);
	};

	const handleClearSearch = () => {
		setSearchQuery('');
		setFilter((prevFilter) => ({
			...prevFilter,
			query: '',
			sort: prevFilter.sort,
		}));
		handleInputFocus();
	};

	const handleFormClick = () => {
		onClick();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilter((prevFilter) => ({
			...prevFilter,
			query: e.target.value,
			sort: prevFilter.sort,
		}));
	};

	const handleResetClick = () => {
		handleClearSearch();
		inputRef.current?.focus();
	};

	return (
		<form
			className={style.searchForm}
			onClick={handleFormClick}
		>
			{!searchQuery && <FiSearch className={style.searchIcon} />}
			<input
				ref={inputRef}
				className={style.search}
				type="text"
				value={searchQuery || filter.query}
				onChange={(e) => {
					handleInputChange(e);
					handleChange(e);
				}}
				onFocus={handleInputFocus}
				placeholder="Пошук товарів..."
			/>
			{searchQuery && (
				<button
					className={style.reset}
					onClick={handleResetClick}
				>
					<IoCloseOutline />
				</button>
			)}
			{isInputFocused && (
				<SearchButtonClose
					onClick={onClose}
					updateInputFocus={handleInputFocus}
				/>
			)}
		</form>
	);
};

export default Search;
