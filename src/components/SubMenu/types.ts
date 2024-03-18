interface SubMenuItem {
	id: number;
	title: string;
	link: string;
	subList?: Array<{
		subId: number;
		subTitle: string;
		subLink: string;
	}>;
}

export default SubMenuItem;