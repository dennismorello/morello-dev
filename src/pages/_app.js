import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";

import seo from "../next-seo.config";
import theme from "../theme";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
