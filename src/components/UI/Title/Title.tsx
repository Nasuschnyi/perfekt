import style from './Title.module.scss';

export default function Title() {
	return (
		<>
			<h1 className={style.title}>Perfekt</h1>
			<p className={style.copyright}>© N.A.O - 2024</p>
		</>
	);
}
