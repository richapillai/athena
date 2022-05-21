import { Grid } from "@chakra-ui/react";
import { Feedbox, FollowingBox, ProfileBox } from "../../components";
import CREATORS from "../../data/creators";
import { THEME } from "../../theme/colors";
import { Creator4 } from "../../data/creators/creator4";

const getFeed = (currentUser) => {
	const subscribed = currentUser.subscriptions;

	let content = [];
	for (let i = 0; i < subscribed.length; i += 1) {
		if (content.length % 2 === 1) {
			content = content.concat(CREATORS[subscribed[i]].content);
		} else {
			content = CREATORS[subscribed[i]].content.concat(content);
		}
	}
	return content;
};

function Home() {
	/*
	const currentUser = props?.currentUser || Creator4;
	if (typeof (currentUser) === 'undefined') {
		currentUser = Creator4
	}
	*/
	const currentUser = Creator4;
	const feed = getFeed(currentUser);

	return (
		<Grid
			gap='2rem'
			templateColumns='repeat(4, 1fr)'
			templateRows='repeat(3, 30%)'
			h='calc(100vh - 6rem)'
			bg={THEME.bgPrimary}
			p='1rem 2rem 2rem 2rem'>
			<ProfileBox user={currentUser} />
			<Feedbox feed={feed} />
			<FollowingBox following={currentUser.subscriptions} />
		</Grid>
	);
}

export default Home;
