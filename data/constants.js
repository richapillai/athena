const DUMMY_USER = {
	username: "SportsMan1234",
};

const DUMMY_LIST = [
	{
		username: "funny ardvark",
		url: "https://mail.google.com/mail/u/0/#inbox",
	},
	{
		username: "what the dog doing",
		url: "https://mail.google.com/mail/u/0/#inbox",
	},
	{
		username: "hello my frined",
		url: "https://mail.google.com/mail/u/0/#inbox",
	},
	{ username: "miami baby", url: "https://mail.google.com/mail/u/0/#inbox" },
	{ username: "what's up", url: "https://mail.google.com/mail/u/0/#inbox" },
	{
		username: "two plus two",
		url: "https://mail.google.com/mail/u/0/#inbox",
	},
	{
		username: "where we off 2",
		url: "https://mail.google.com/mail/u/0/#inbox",
	},
	{
		username: "hamilton is a great musical",
		url: "https://mail.google.com/mail/u/0/#inbox",
	},
	{ username: "doggo", url: "https://mail.google.com/mail/u/0/#inbox" },
	{ username: "unsplash", url: "https://mail.google.com/mail/u/0/#inbox" },
	{
		username: "a stealth rogue",
		url: "https://mail.google.com/mail/u/0/#inbox",
	},
	{
		username: "what it do beb",
		url: "https://mail.google.com/mail/u/0/#inbox",
	},
	{
		username: "la colombe coffee",
		url: "https://mail.google.com/mail/u/0/#inbox",
	},
];

const DUMMY_FEED = [
	{
		link: "https://media.istockphoto.com/photos/string-light-bulbs-at-sunset-picture-id1300384615?b=1&k=20&m=1300384615&s=170667a&w=0&h=rkDm5TdJp_dU7VAknk4EuZEZ2ho2QQspOavjlwGrsuI=",
		username: "dono",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Whatup, what it do. how's life going?",
	},
	{
		link: "https://images.unsplash.com/photo-1652816437851-2eab839b89ad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500",
		username: "pushC2shove",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "The lights",
	},
	{
		link: "https://images.unsplash.com/photo-1652487346667-b89061ca7b40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500",
		username: "pokerSTAr123",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Space so pretty",
	},
	{
		link: "https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		username: "whatruDOING",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Deez",
	},
	{
		link: "https://media.istockphoto.com/photos/string-light-bulbs-at-sunset-picture-id1300384615?b=1&k=20&m=1300384615&s=170667a&w=0&h=rkDm5TdJp_dU7VAknk4EuZEZ2ho2QQspOavjlwGrsuI=",
		username: "Payment_platform",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Sponsored",
	},
	{
		link: "https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		username: "to_the_moooon",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Bitcoin hehehe",
	},
	{
		link: "https://media.istockphoto.com/photos/string-light-bulbs-at-sunset-picture-id1300384615?b=1&k=20&m=1300384615&s=170667a&w=0&h=rkDm5TdJp_dU7VAknk4EuZEZ2ho2QQspOavjlwGrsuI=",
		username: "Payment_platform",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Sponsored",
	},
	{
		link: "https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		username: "to_the_moooon",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Bitcoin hehehe",
	},
	{
		link: "https://media.istockphoto.com/photos/string-light-bulbs-at-sunset-picture-id1300384615?b=1&k=20&m=1300384615&s=170667a&w=0&h=rkDm5TdJp_dU7VAknk4EuZEZ2ho2QQspOavjlwGrsuI=",
		username: "Payment_platform",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Sponsored",
	},
	{
		link: "https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		username: "to_the_moooon",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Bitcoin hehehe",
	},
	{
		link: "https://media.istockphoto.com/photos/string-light-bulbs-at-sunset-picture-id1300384615?b=1&k=20&m=1300384615&s=170667a&w=0&h=rkDm5TdJp_dU7VAknk4EuZEZ2ho2QQspOavjlwGrsuI=",
		username: "Payment_platform",
		icon: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
		caption: "Sponsored",
	},
];

export { DUMMY_FEED, DUMMY_LIST, DUMMY_USER };
