export interface SubItem {
	id: number;
	title: string;
	subList: { subId: number; subTitle: string; subLink: string }[];
}

export interface CatalogDetails {
	title: string;
	description: string;
}

export interface Information {
	address: string;
	phone: string;
	email: string;
	time: string;
}

export interface SubMenuProps {
	data: {
		catalog: {
			items: SubItem[];
		};
		about: {
			details: CatalogDetails;
		};
	};
	id: number;
}
