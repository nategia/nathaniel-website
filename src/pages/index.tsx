import type { NextPage } from 'next'
import { Box, Spacer, VStack } from "@chakra-ui/react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe';
import HeaderDrawer from '../components/HeaderDrawer';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    handleResize(); // Call it once to set the initial value

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <VStack className={styles.container}>

      {isMobileView ? <HeaderDrawer /> : <Header />
      }
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
    </VStack>
  )
}

export default Home
