// interface User {
// 	// a user is both a creator and viewer
// 	username: string;
// 	contentCW721: CW721;
// 	content: Post[];
// 	subscriptions: string[]; // array of usernames
// 	url: string;
// }

// interface Post {
// 	owner: string;
// 	image_url: string;
// 	subscribers: string[]; //optional
// }

const username = "DogLover";

const Creator1Content = [
	{
		username,
		imageUrl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
        caption: 'i love dogs',
	},
	{
		username,
        imageUrl: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d',
        caption: 'dogs eat cats',
	},
	{
		username,
        imageUrl: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
        caption: 'woof',
	}
];

const Creator1 = {
	username,
	iconLink:
    'https://image.shutterstock.com/image-vector/dogecoin-doge-against-full-moon-260nw-1909080796.jpg',
	contentCW721: {
		address: "",
		price: 93,
		quantity: 254,
	},
	content: Creator1Content,
	subscriptions: ["CosmWasm"],
};

export  {Creator1};