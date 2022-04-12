import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        autoClose={3000}
        newestOnTop
        closeOnClick={false}
        draggable={false}
        rtl={false}
      />
    </ChakraProvider>
  );
}

export default MyApp;
