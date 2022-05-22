import { Grid } from "@chakra-ui/react";
import { ActivateButton, CreatorParameters, Feedbox } from "../../components";
// import { DUMMY_FEED } from "../../data"; 
// import CREATORS from "../../data/creators"; 
import { Creator4 } from "../../data/creators/creator4";
import { THEME } from "../../theme/colors";

function Create() {
	// const username = "SpaceSuitMan";
	const feed = Creator4.content;
	return (
		<Grid
			gap='2rem'
			templateColumns='repeat(4, 1fr)'
			h='calc(100vh - 6rem)'
			bg={THEME.bgPrimary}
			templateRows='repeat(3, 30%)'
			p='1rem 2rem 2rem 2rem'>
			{/* <ActivateButton /> */}
			<Feedbox feed={feed} />
			<CreatorParameters />
		</Grid>
	);
}

export default Create;
