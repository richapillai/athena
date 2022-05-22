import { Flex, GridItem, Link, Text } from "@chakra-ui/react";
import { THEME } from "../../../theme/colors"

function FollowerCards({ following }) {
	return (
		<>
			{following.map((ele, index) => (
				<FollowerCard
					userId={ele}
					url={ele.url}
					last={index === following.length - 1}
					key={index}
				/>
			))}
		</>
	);
}

function FollowerCard({ userId, url, last }) {
	return (
		<Link href={url} rel='noreferrer' target='_blank'>
			<Text
				color={THEME.primary}
				padding='1rem'
				borderBottom={last ? "" : "solid gray 1px"}>
				{userId}
			</Text>
		</Link>
	);
}

function FollowingBox({ following }) {
	return (
		<GridItem h='100%' rowSpan={2} colSpan={1}>
			<Text
				height='9%'
				fontWeight='bold'
				ml='1rem'
				fontSize='1.05rem'
				color={THEME.boxHeader}>
				Following
			</Text>
			<Flex
				// shadow='inset 0px 0px 15px 1px rgba(0, 0, 0, .9)'
				shadow='0px 2px 8px 0px rgba(99, 99, 99, 0.2)'

				h='91%'
				overflow='scroll'
				css={{
					"&::-webkit-scrollbar": {
						width: "0px",
					},
					"&::-webkit-scrollbar-track": {
						width: "0px",
					},
					"&::-webkit-scrollbar-thumb": {
						background: THEME.bgPrimary,
						borderRadius: "0px",
					},
				}}
				bg={THEME.bgBoxes}
				borderRadius='1rem'
				flexDir='column'>
				<FollowerCards following={following} />
			</Flex>
		</GridItem>
	);
}

export default FollowingBox;
