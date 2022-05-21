interface User {
	// a user is both a creator and viewer
	username: string;
	iconLink: string;
	contentCW721: CW721;
	content: Post[];
	subscriptions: string[]; // array of usernames
}

// subscription
interface CW721 {
	address: string;
	price: number;
	quantity: number;
}

// post
interface Post {
	username: string;
	imageUrl: string;
	caption: string;
	subscribers: string[]; //optional
}

// wallet
interface Wallet {
	owner: string;
	nft_subscriptions: string[];
}

export { Wallet, Post, CW721, User };
