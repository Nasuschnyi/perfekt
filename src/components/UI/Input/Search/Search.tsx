'use client';
import React, { useState } from 'react';
import SearchButtonClose from '../../Button/SearchButtonClose/SearchButtonClose';
import style from './Search.module.scss';
import { FiSearch } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

type SearchProps = {
	onClick: () => void;
	onClose: () => void;
};

const Search: React.FC<SearchProps> = ({ onClick, onClose }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [isInputFocused, setIsInputFocused] = useState(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleInputFocus = () => {
		setIsInputFocused(true);
	};

	const handleClearSearch = () => {
		setSearchQuery('');
	};

	const handleFormClick = () => {
		onClick();
	};

	return (
		<form
			className={style.searchForm}
			onClick={handleFormClick}
		>
			{!searchQuery && <FiSearch className={style.searchIcon} />}
			<input
				className={style.search}
				type="text"
				value={searchQuery}
				onChange={handleInputChange}
				onFocus={handleInputFocus}
				placeholder="Пошук товарів..."
			/>
			{searchQuery && (
				<button
					className={style.reset}
					onClick={handleClearSearch}
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
