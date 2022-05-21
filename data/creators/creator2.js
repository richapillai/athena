// interface User {
// 	// a user is both a creator and viewer
// 	username: string;
// 	contentCW721: CW721;
// 	content: Post[];
// 	subscriptions: string[]; // array of usernames
// 	url: string;
// }

const username = "SoccerBoy123";

const Creator2Content = [
	{
		username,
		imageUrl:
			"https://expatguideturkey.com/wp-content/uploads/2022/05/ronaldo-1.jpg",
		caption: "I love Ronaldo!!",
	},
	{
		username,
        imageUrl:
			"https://cdn.cnn.com/cnnnext/dam/assets/121111084734-messi-thumb-suck-horizontal-large-gallery.jpg",
		caption: "Messi is a baby",
	},
	{
		username,
		imageUrl:
			"https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNjYxMjE0MDY2NjM4/why-do-some-people-call-it-soccers-featured-photo.jpg",
		caption: "goalllll",
	}
];

const Creator2 = {
	username,
	iconLink:
		"https://i.pinimg.com/originals/2e/cf/c7/2ecfc78355ee319c0c3f9d340e77c4cd.jpg",
	contentCW721: {
		address: "",
		price: 93,
		quantity: 254,
	},
	content: Creator2Content,
	subscriptions: ["DogLover", "CosmWasm"],
};

export  {Creator2};
