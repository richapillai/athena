import { SearchIcon } from "@chakra-ui/icons";
import {
	Link,
	Input,
	InputGroup,
	Flex,
	InputLeftElement,
	Text,
	Button,
} from "@chakra-ui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { useRouter } from "next/router";

import { THEME } from "../../theme/colors";

function Navbar() {
	const router = useRouter();


	return (
		<Flex
			h='6rem'
			px='2rem'
			bg={THEME.bgSecondary}
			align='center'
			justify='space-between'>
			<Link display='flex' href='/' align='center' gap='1rem' w='12rem'>
				<Image
					src='/assets/images/logo.svg'
					alt='pluto'
					height={40}
					width={40}
				/>
				<Text
					fontSize='1.8rem'
					fontWeight='bold'
					fontFamily=''
					color={THEME.secondaryLight}>
					Pluto
				</Text>
			</Link>
			<InputGroup w='30rem'>
				<InputLeftElement pointerEvents='none'>
					<SearchIcon color={THEME.textNeutral} />
				</InputLeftElement>
				<Input
					bg={THEME.bgPrimary}
					variant='ghost'
					_placeholder={{ color: THEME.textNeutral }}
					color={THEME.textWhite}
					placeholder='Search creators, content, and collection'
				/>
			</InputGroup>
			<Link
				href='/Home/Home'
				color={
					router.asPath === "/Home/Home" || router.asPath === "/"
						? THEME.primary
						: THEME.textBlack
				}>
				Home
			</Link>
			<Link
				href='/Explore/Explore'
				color={
					router.asPath === "/Explore/Explore"
						? THEME.primary
						: THEME.textBlack
				}>
				Explore
			</Link>
			<Link
				href='/Create/Create'
				color={
					router.asPath === "/Create/Create"
						? THEME.primary
						: THEME.textBlack
				}>
				Create
			</Link>
			<WalletMultiButton />
		</Flex>
	);
}

export default Navbar;
