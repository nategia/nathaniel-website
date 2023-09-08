import { Button, Flex, HStack, Heading, Image, Link, Spacer } from "@chakra-ui/react";
import Features from "../pages/features/index.page";


function Header() {

  return (
    <Flex p={6}>
      <Heading color='blackAlpha.900'>
        Nathaniel Codes
      </Heading>
      <Spacer />
      <HStack spacing={4} >
        <Button
          variant='ghost'
          bgColor='transparent'
          _active={{ color: 'blue.500' }}
          textAlign='center'
          textColor='blackAlpha.900'
          as={Link}
          _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
        >
          Home
        </Button>
        <Button
          variant='ghost'
          textAlign='center'
          textColor='blackAlpha.900'
          _active={{ color: 'blue.500' }}
          as={Link}
          href='src/pages/features/index.page.tsx'
          _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
        >
          Features
        </Button>
        <Button
          variant='ghost'
          textAlign='center'
          textColor='blackAlpha.900'
          _active={{ color: 'blue.500' }}
          as={Link}
          _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
        >
          Blogs
        </Button>
        <Button
          variant='ghost'
          textAlign='center'
          textColor='blackAlpha.900'
          _active={{ color: 'blue.500' }}
          as={Link}
          _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
        >
          Contact
        </Button>
      </HStack>

    </Flex>
  )
}


export default Header