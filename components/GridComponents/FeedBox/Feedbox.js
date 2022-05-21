import { Flex, GridItem, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import CREATORS from "../../../data/creators";
import exploreState from "../../../recoil/atoms/exploring";
import { THEME } from "../../../theme/colors";

function Post({ postData }) {
	const [explore, setExplore] = useRecoilState(exploreState);
	const router = useRouter();
	const pushUsersPage = () => {
		setExplore(postData.username);
		router.push({
			pathname: "/Artist/Artist",
			query: { username: postData.username },
		});
	};

	return (
		<Flex
			w='80%'
			mt='2rem'
			minH='30rem'
			bgImage={`url(${postData.imageUrl})`}
			bgRepeat='no-repeat'
			bgPos='center'
			bgSize='contain'>
			<Flex
				flexDir='column'
				left='2rem'
				w='12rem'
				overflowX='clip'
				top='1rem'
				position='relative'>
				<Flex
					gap='.5rem'
					maxW='12rem'
					textOverflow='ellipsis'
					//bg='rgba(0,0,0,.75)'
					bg='rgba(255, 255, 255, 0.9)'
					h='3rem'
					px='.5rem'
					py='.5rem'
					align='flex-end'
					borderBottom={`${THEME.bar} 1px solid`}
					borderRadius='.25rem .25rem 0 0'>
					<Image
						position='relative'
						alt='Icon'
						src={CREATORS[postData.username].iconLink}
						w={30}
						h={30}
					/>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<Link
						onClick={pushUsersPage}
						px='.5rem'
						fontWeight='bold'
						borderRadius='.5rem'
						position='relative'
						color={THEME.secondaryLight}>
						{postData.username}
					</Link>
				</Flex>
				<Flex
					px='.5rem'
					py='.25rem'
					mb='.25rem'
					//bg='rgba(0,0,0,.75)'
					//color={THEME.textWhite}
					borderRadius='0 0 .25rem .25rem'
					bg='rgba(255, 255, 255, 0.9)'
					color={THEME.textBlack}>
					{postData.caption}
				</Flex>
			</Flex>
		</Flex>
	);
}

function FeedBox({ feed }) {
	return (
		<GridItem h='100%' rowSpan={3} colSpan={3}>
			<Text
				height='1.7rem'
				ml='1rem'
				fontSize='1.1rem'
				fontWeight='bold'
				color={THEME.boxHeader}>
				Feed
			</Text>
			<Flex
				//shadow='inset 0px 0px 15px 1px rgba(0, 0, 0, .9)'
				shadow='0px 2px 8px 0px rgba(99, 99, 99, 0.2)'
				h='calc(100% - 1.6rem)'
				align='center'
				justify='flex-start'
				overflowY='scroll'
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
					"-webkit-mask-image":
						"linear-gradient(180deg, #000 98.5%, transparent)",
				}}
				bg={THEME.bgBoxes}
				borderRadius='1rem'
				flexDir='column'>
				{feed.map((ele, index) => (
					<Post key={index} postData={ele} />
				))}
			</Flex>
		</GridItem>
	);
}

export default FeedBox;
