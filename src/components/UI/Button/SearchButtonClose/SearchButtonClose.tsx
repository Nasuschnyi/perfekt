import Link from "next/link";
import style from "./SearchButtonClose.module.scss";
import { IoMdArrowRoundBack } from "react-icons/io";

const SearchButtonClose = () => {
	return (
		<Link
			href="/"
			className={style.close}
		>
			<IoMdArrowRoundBack />
		</Link>
	);
};

export default SearchButtonClose;
