import { Box, Button, Flex, GridItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import exploreState from "../../../recoil/atoms/exploring";
import { THEME } from "../../../theme/colors";

function ImageThumbnail({ height, thumbnailData, thumbnailText = "" }) {
	const setExploreState = useSetRecoilState(exploreState);
	const router = useRouter();
	const pushUsersPage = () => {
		setExploreState(thumbnailData.username);
		router.push({
			pathname: "/Artist/Artist",
		});
	};

	return (
		<Box
			bg={`url(${thumbnailData.imageUrl})`}
			bgSize='contain'
			onClick={pushUsersPage}
			cursor='pointer'
			h={`${height}%`}
			textAlign='center'>
			<Flex
				backdropFilter='auto'
				backdropBlur={thumbnailText.length ? "none" : "md"}
				h='100%'
				align='center'
				justify='center'
				w='100%'>
				<Button
					display='flex'
					bg={THEME.primary}
					h='2rem'
					px='1rem'
					align='center'
					borderRadius='.25rem'
					color={THEME.textWhite}>
					<Text>
						{thumbnailData.username ||
							"Mint Subscription to Unlock"}
					</Text>
				</Button>
			</Flex>
		</Box>
	);
}

function ThumbnailCol({ numRows, exploreData, thumbnailText = "" }) {
	const percentage = 100 / numRows;
	const cols = [];
	for (let i = 0; i < numRows; i += 1) {
		cols.push(
			<ImageThumbnail
				key={i}
				thumbnailData={exploreData[i]}
				height={percentage}
				thumbnailText={thumbnailText}
			/>
		);
	}
	return (
		<GridItem display='flex' flexDir='column'>
			{cols}
		</GridItem>
	);
}

export default ThumbnailCol;
