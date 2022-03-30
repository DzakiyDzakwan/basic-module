db.products.insert({
	_id: 3,
	name: 'Pencil',
	price: 0.8,
	stock: 30,
	reviews: [
		{
			authorName: 'Suzy',
			rating: 4,
			reviews: 'good pencil',
		},
		{
			authorName: 'Juno',
			rating: 5,
			reviews: 'Awesome pencil',
		},
	],
});