import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
// import { useRouter } from "next/router"; 
import { useRecoilValue } from "recoil";
import { THEME } from "../../theme/colors";
// import { DUMMY_FEED } from "../../data"; 
import { ThumbnailCol } from "../../components";
import CREATORS from "../../data/creators";
import exploreState from "../../recoil/atoms/exploring";

const getContent = (currAccount) => {
	const userContent = CREATORS[currAccount].content;

	return userContent;
};

function Artist() {
	const addressViewing = useRecoilValue(exploreState);
	const [account, setAccount] = useState(CREATORS[addressViewing]); 

	const userContent = getContent(addressViewing);

	return (
		<Flex
			bg={THEME.bgPrimary}
			h='calc(100vh - 6rem)'
			flexDir='column'
			p='2rem'>
			<Flex
				h='10%'
				mb='2rem'
				justify='flex-start'
				align='center'
				gap='2rem'
				fontSize='3rem'
				color={THEME.primary}>
				<Text>@{account.username}</Text>
				<Button color={THEME.textWhite} bg={THEME.primary}>
					Mint Subscription
				</Button>
				<Text fontSize='1.5rem'>PRICE: {account.contentCW721.price} UST</Text>
			</Flex>
			<Grid templateColumns='repeat(2, 1fr)' w='100%' h='90%'>
				<ThumbnailCol
					exploreData={userContent.slice(0, 3)}
					numRows={userContent.slice(0, 3).length}
				/>
				<ThumbnailCol
					exploreData={userContent.slice(3, 6)}
					numRows={userContent.slice(3, 6).length}
				/>
			</Grid>
		</Flex>
	);
}

export default Artist;
