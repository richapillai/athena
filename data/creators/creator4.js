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

const username = "SpaceSuitMan";

const Creator4Content = [
	{
		username,
		imageUrl:
			"https://frontiersinblog.files.wordpress.com/2021/10/main-image-blog.png?w=998",
		caption: "Space travel is soooo awesome!!",
	},
	{
		username,
		imageUrl:
			"https://usa.visa.com/content/dam/VCOM/regional/na/us/Solutions/visa-crypto-opportunities-800x450.jpg",
		caption: "Enter generic space caption here",
	},
	{
		username,
		imageUrl:
			"https://thumbs.dreamstime.com/b/cute-astronaut-playing-smartphone-sits-moon-space-vector-illustration-131608961.jpg",
		caption: "Nasa to the moooooon!",
	},
	{
		username,
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiwcfDDnQR94Q-31yqSiZSZKRpk5MvI2IAg&usqp=CAU",
		caption:
			"So this my rant about space. I mean, its just so awesome and cool. Just look at this picture, there isn't anyone who wouldn't want to go here. Please subscribe",
	},
	{
		username,
		imageUrl:
			"https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/one-small-step-to-space-food-production-japan-seeks-firms-to-develop-regenerative-food-supply-system-for-space-exploration/12911600-1-eng-GB/One-small-step-to-space-food-production-Japan-seeks-firms-to-develop-regenerative-food-supply-system-for-space-exploration.jpg",
		caption: "My dream is to live on mars and sip pina coladas each day",
	},
];

const Creator4 = {
	username,
	iconLink:
		"https://i.pinimg.com/originals/d7/7d/82/d77d82e020703bd1ac13f96418b0c103.png",
	contentCW721: {
		address: "",
		price: 534,
		quantity: 3,
	},
	content: Creator4Content,
	subscriptions: ["DogLover", "SoccerBoy123", "CosmWasm", "Mr_Meeseeks", "DoKwon"],
};

export { Creator4 };
