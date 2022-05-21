// interface User {
// 	// a user is both a creator and viewer
// 	username: string;
// 	iconLink: string;
// 	contentCW721: CW721;
// 	content: Post[];
// 	subscriptions: string[]; // array of usernames
// 	url: string;
// }

// // subscription
// interface CW721 {
// 	address: string;
// 	price: number;
// 	quantity: number;
// }

const username = "CosmWasm";

const Creator3Content = [
	{
		username,
		imageUrl:
			"https://media.shellypalmer.com/wp-content/images/2021/04/cryptocurrencies1600.jpg",
		caption: "Bitcoin is going to the moooooooon!",
	},
	{
		username,
		imageUrl:
			"https://usa.visa.com/content/dam/VCOM/regional/na/us/Solutions/visa-crypto-opportunities-800x450.jpg",
		caption: "More bitcoin!!!",
	},
	{
		username,
		imageUrl:
			"https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg",
		caption: "shoutout to satoshi for being so cool!!",
	},
	{
		username,
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprJx56Duq9iRK9hm9_EohrPtrvATJJVVfPw&usqp=CAU",
		caption: "More and more bitcoins! This one has Litecoin too....!",
	},
	{
		username,
		imageUrl:
			"https://img.money.com/2021/10/Explainer-What-Is-Cryptocurrency.jpg",
		caption: "Bitcoin, the dogekiller!",
	},
];

const Creator3 = {
	username,
	iconLink:
		"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
	contentCW721: {
		address: "",
		price: 3,
		quantity: 5,
	},
	content: Creator3Content,
	subscriptions: ["DogLover"],
};

export { Creator3 };
