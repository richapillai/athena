import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { THEME } from "../../../theme/colors";

// function ProfileOption({ title, url }) {
// 	return (
// 		<GridItem
// 			px='.5rem'
// 			color= {THEME.primary}
// 			border='solid black 1px'
// 			textAlign='center'
// 			borderRadius='.25rem'>
// 			<Link target='_blank' href={url}>
// 				{title}
// 			</Link>
// 		</GridItem>
// 	);
// }

function ProfileOption({ title, url }) {
	return (
		<GridItem rowSpan={1} colSpan={1}>
			<Button
				bg={THEME.bgPrimary}
				color={THEME.primary}
				// onClick={() => onPress(url)} how do i make these buttons a link
				h='2rem'
				w='7rem'
				px='0.5rem'
				borderRadius='.25rem'
				shadow = '0px 2px 8px 0px rgba(99, 99, 99, 0.2)'>
				<Text>{title}</Text>
			</Button>
		</GridItem>
	);
}


function ProfileBox({ user }) {
	return (
		<GridItem rowSpan={1} colSpan={1}>
			<Text
				height='1.5rem'
				fontWeight='bold'
				ml='1rem'
				fontSize='1.1rem'
				color={THEME.boxHeader}>
				Profile
			</Text>
			<Flex
				p='1rem'
				gap='1rem'
				height='100%'
				justify='center'
				align='center'
				flexDir='column'
				borderRadius='1rem'
				// shadow='inset 0px 0px 15px 1px rgba(0, 0, 0, .9)'
				shadow='0px 2px 8px 0px rgba(99, 99, 99, 0.2)'
				bg={THEME.bgBoxes}>
				<Text
					color={THEME.tertiary}
					text-transform='lowercase' // this is not working so we should change usernames to lowercase
					fontWeight='bold'
					fontSize='1.25rem'>
					{user.username}
				</Text>
				<Grid
					gap='.25rem'
					templateColumns='repeat(2, 1fr)'
					templateRows='repeat(2, 1fr)'>
					<ProfileOption
						url='https://www.google.com/'
						title='My Content'
					/>
					<ProfileOption
						url='https://www.google.com/'
						title='Favorites'
					/>
					<ProfileOption
						url='https://www.google.com/'
						title='Settings'
					/>
					<ProfileOption
						url='https://www.google.com/'
						title='Followers'
					/>
				</Grid>
			</Flex>
		</GridItem>
	);
}

export default ProfileBox;
