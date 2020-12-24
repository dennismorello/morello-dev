import Head from "next/head";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";

// Configurations
import defaultSeo, { socialProfileJsonLd } from "../next-seo.config";
import theme from "../theme";

// Styles
import "@/styles/main.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...defaultSeo} />
      <SocialProfileJsonLd {...socialProfileJsonLd} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
