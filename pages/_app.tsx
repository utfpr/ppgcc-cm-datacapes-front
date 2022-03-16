import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Navbar>
    <Component {...pageProps} />
    </Navbar>
  </ChakraProvider>
  )
}

export default MyApp
