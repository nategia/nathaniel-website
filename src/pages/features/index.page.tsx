import { NextPage } from "next"
import { Box, Text } from '@chakra-ui/react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Head from 'next/head'
import styles from '../styles/Home.module.css'




const Features: NextPage = () => {
  return (
    <Box className={styles.container}>
      <Header />
      <Head>
        <title>Nathaniel Codes</title>
        <meta name="description" content="Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box py={2} minHeight="calc(100vh - 64px)"   >
        <Text>Features</Text>
      </Box>




      <Footer />
    </Box>
  )
}

export default Features