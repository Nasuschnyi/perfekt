import React from 'react';
import style from './Privacy.module.scss';
import data from './data';

export default function PrivacyPage() {
	return (
		<section className={style.privacy}>
			<h1 className={style.title}>{data.title}</h1>
			<p className={style.desc}>{data.desc}</p>
			<p className={style.list}>
				{data.list.split('\n').map((sentence, index, array) => (
					<React.Fragment key={index}>
						{sentence.trim()}
						{index !== array.length - 1 && (
							<React.Fragment>
								<br />
								<br />
							</React.Fragment>
						)}
					</React.Fragment>
				))}
			</p>
		</section>
	);
}
