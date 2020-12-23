import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";

import seo from "../next-seo.config";
import theme from "../theme";

import "../styles/main.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...seo} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
