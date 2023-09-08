import type { NextPage } from 'next'
import { Box, Spacer } from "@chakra-ui/react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe';

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <Header />
      <Head>
        <title>Nathaniel Codes</title>
        <meta name="description" content="Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box py={2} minHeight="calc(100vh - 64px)"   >
        <Hero />
        <Spacer h={16} />
        <AboutMe />
      </Box>




      <Footer />
    </Box>
  )
}

export default Home
