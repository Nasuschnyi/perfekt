import images from '../Main/data';

const data = {
	catalog: {
		items: [
			{
				id: 1,
				title: 'Одяг, краса та аксесуари',
				subList: [
					{ subId: 1, subTitle: 'Аксесуари', subLink: '' },
					{ subId: 2, subTitle: 'Взуття', subLink: '' },
					{ subId: 3, subTitle: 'Одяг', subLink: '' },
					{ subId: 4, subTitle: 'Краса та здоров’я', subLink: '' },
				],
			},
			{
				id: 2,
				title: 'Техніка та інструменти',
				subList: [
					{ subId: 1, subTitle: 'Побутова техніка', subLink: '' },
					{ subId: 2, subTitle: 'Зарядні станції', subLink: '' },
					{
						subId: 3,
						subTitle: 'Інструменти та автотовари',
						subLink: '',
					},
					{
						subId: 4,
						subTitle: 'Електроніка та аксесуари',
						subLink: '',
					},
				],
			},
			{
				id: 3,
				title: 'Дім та відпочинок',
				subList: [
					{
						subId: 1,
						subTitle: 'Активний відпочинок, туризм та хобі',
						subLink: '',
					},
					{ subId: 2, subTitle: 'Домашній текстиль', subLink: '' },
					{ subId: 3, subTitle: 'Дім та офіс', subLink: '' },
					{ subId: 4, subTitle: 'Посуд та аксесуари', subLink: '' },
				],
			},
			{
				id: 4,
				title: 'Сантехніка',
				subList: [
					{ subId: 1, subTitle: 'Унітази', subLink: '' },
					{ subId: 2, subTitle: 'Змішувачі та крани', subLink: '' },
					{ subId: 3, subTitle: 'Шланги', subLink: '' },
					{ subId: 4, subTitle: 'Фітинги', subLink: '' },
					{
						subId: 5,
						subTitle: 'Аксесуари для ванної кімнати',
						subLink: '',
					},
				],
			},
			{
				id: 5,
				title: 'Діти та подарунки',
				subList: [
					{ subId: 1, subTitle: 'Іграшки', subLink: '' },
					{
						subId: 2,
						subTitle: 'Сувеніри та подарунки',
						subLink: '',
					},
				],
			},
		],
	},
	about: {
		details: {
			title: 'Ми раді вітати вас на сторінках нашого інтернет-магазину',
			description:
				' - це універсальний магазин, що спрощує процес вибору та покупки.\n Ми цінуємо розширення можливостей, включення, різноманітність та повагу до відмінностей.\n Наша мета - бути корисними та творити добро для світу.\n Ми пропонуємо актуальні ціни, зручність замовлення, швидкість, економію часу, якісне обслуговування, широкий вибір доставлення та оплати, програми лояльності, акції та спеціальні пропозиції.\n Ми цінуємо кожного покупця і сподіваємося на плідну співпрацю.\n Бажаємо вам вдалих покупок!',
		},
	},
	contact: {
		information: {
			address: 'м. Кривий ріг',
			phone: '+380976557668',
			email: 'perfekt.com.ua@gmail.com',
			time: 'з 9:00 до 20:00',
		},
	},
};

export default data;
