import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { Navbar, WalletWrapper } from "../components";

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<ChakraProvider>
				<WalletWrapper>
					<Navbar />
					<Component {...pageProps} />
				</WalletWrapper>
			</ChakraProvider>
		</RecoilRoot>
	);
}

export default MyApp;
