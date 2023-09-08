import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "whiteAlpha.900", // Set your desired background color here
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
