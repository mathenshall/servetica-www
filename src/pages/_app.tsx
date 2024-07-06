// pages/_app.js
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import { fonts } from "../lib/fonts";
import { theme } from "./theme";

function ServeticaWwwApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-montserrat: ${fonts.montserrat.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default ServeticaWwwApp;
