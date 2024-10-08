import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import Background from "../components/Background";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={client}>
				<RainbowKitProvider
					theme={darkTheme({
						accentColor: "#0B88A0",
						accentColorForeground: "#fff",
						borderRadius: "large",
						fontStack: "system",
						overlayBlur: "small",
					})}>
					<ChakraProvider>
						<Background>
							<Component {...pageProps} />
						</Background>
					</ChakraProvider>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default MyApp;
