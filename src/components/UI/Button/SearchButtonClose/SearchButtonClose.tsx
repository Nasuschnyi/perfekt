import style from './SearchButtonClose.module.scss';
import { IoMdArrowRoundBack } from 'react-icons/io';

interface SearchButtonCloseProps {
	onClick: () => boolean;
	updateInputFocus: () => void;
}

const SearchButtonClose: React.FC<SearchButtonCloseProps> = ({
	onClick,
	updateInputFocus,
}) => {
	return (
		<button
			className={style.close}
			onClick={() => {
				onClick();
				updateInputFocus();
			}}
		>
			<IoMdArrowRoundBack />
		</button>
	);
};

export default SearchButtonClose;
