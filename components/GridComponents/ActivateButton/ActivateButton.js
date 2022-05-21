import { Button, GridItem, Text } from "@chakra-ui/react";
import { THEME } from "../../../theme/colors";

function ActivateButton({ user }) {
	return (
		<GridItem rowSpan={1} colSpan={1}>
			<Text
				height='1.5rem'
				fontWeight='bold'
				fontSize='1rem'
				color={THEME.secondaryLight}>
				Activate Creator Account
			</Text>
			<Button bg={THEME.tertiary} w='100%' h='50%'>
				CLICK HERE TO ACTIVATE
			</Button>
		</GridItem>
	);
}

export default ActivateButton;
