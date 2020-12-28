import "@/styles/main.css";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import { useEffect } from "react";

import { pageView } from "@/lib/gtag";

import defaultSeo, { socialProfileJsonLd } from "../next-seo.config";
import theme from "../theme";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
