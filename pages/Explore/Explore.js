import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { THEME } from "../../theme/colors";
import { ThumbnailCol } from "../../components";
import CREATORS from "../../data/creators";


const FilterList = () => {
	const onPress = (text) => {
		console.log(text);
	};

	const eles = [];
	for (let i = 0; i < 11; i += 1) {
		eles.push(
			<Button
				key={i}
				onClick={() => onPress("filter 1")}
				bg={THEME.primary}
				color={THEME.textWhite}
				h='2rem'
				px='1rem'
				borderRadius='.25rem'>
				<Text>Filter {i}</Text>
			</Button>
		);
	}
	return eles;
};

const getExploreFeed = (currentAccount) => {
	const creators = [];
	// eslint-disable-next-line no-restricted-syntax
	for (const [_, value] of Object.entries(CREATORS)) {
		// if (!value.subscriptions.includes(currentAccount)) {
		// 	creators.push(value.content[0]);
		// }
		creators.push(value.content[0]);
		if (creators.length === 12) {
			break;
		}
	}
	return creators;
};

function Explore() {
	const currentUser = CREATORS.creator4; //Creator4; //"SpaceSuitMan";
	const creatorContent = getExploreFeed(currentUser);
	const thumbnailText = "Click To Visit This Account";

	return (
		<Flex
			bg={THEME.bgPrimary}
			h='calc(100vh - 6rem)'
			flexDir='column'
			p='2rem'>
			<Flex h='10%' justify='space-between'>
				<FilterList />
			</Flex>
			<Grid templateColumns='repeat(4, 1fr)' w='100%' h='90%'>
				<ThumbnailCol
					exploreData={creatorContent.slice(0, 3)}
					numRows={creatorContent.slice(0, 3).length}
					thumbnailText={thumbnailText}
				/>
				<ThumbnailCol
					exploreData={creatorContent.slice(3, 6)}
					numRows={creatorContent.slice(3, 6).length}
					thumbnailText={thumbnailText}
				/>
				<ThumbnailCol
					exploreData={creatorContent.slice(6, 9)}
					numRows={creatorContent.slice(6, 9).length}
					thumbnailText={thumbnailText}
				/>
				<ThumbnailCol
					exploreData={creatorContent.slice(9, 12)}
					numRows={creatorContent.slice(9, 12).length}
					thumbnailText={thumbnailText}
				/>
			</Grid>
		</Flex>
	);
}

export default Explore;
