import { Flex, HStack, SimpleGrid, useMediaQuery, Code, Text, Button, Link, VStack, Heading } from "@chakra-ui/react";



const buttonStyles = {
  boxSize: { base: 12, sm: 16, md: 20, lg: 24, xl: 32 },
  borderRadius: 'full',
  boxShadow: '2xl',
  bgPosition: 'center',
  backgroundSize: 'cover',
  _hover: { transform: 'translateY(-4px)', textDecoration: 'none' },
}

function SkillsDivider() {

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (

    <SimpleGrid columns={[1]} gap={16} >
      <Flex h='xs' borderRadius={20} direction='column' p={8} gap={12} alignItems='center' justifyContent='center'  >
        <Heading color='blackAlpha.800' fontSize='6xl'>My developer toolkit</Heading>

        <Flex w='full' justify='center' >



          <VStack spacing={2} w='full'>
            <Button {...buttonStyles} flexGrow={1}
              bgImage='/coding-logos/js-icon.svg' as={Link} _active={{ bg: '/coding-logos/js-icon.svg' }} isExternal href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"

            ></Button>
            <Code textColor='gray.900' borderRadius={10} alignSelf='center' px={8}>
              <Text>JavaScript</Text>
            </Code></VStack>
          <VStack spacing={2} w='full'>
            <Button flexGrow={1} bgImage='/coding-logos/ts-icon.svg'{...buttonStyles} _active={{ bg: '/coding-logos/ts-icon.svg' }} as={Link} href="https://www.typescriptlang.org/docs/"
              isExternal
            >
            </Button>
            <Code textColor='gray.900' borderRadius={10} alignSelf='center' px={8}>
              <Text>TypeScript</Text>
            </Code>
          </VStack>

          <VStack spacing={2} w='full'>
            <Button flexGrow={1} bgImage='/coding-logos/react-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/react-icon.svg' }} as={Link} href="https://react.dev/learn"

              isExternal
            ></Button>
            <Code textColor='gray.900' borderRadius={10} alignSelf='center' px={8}>
              <Text>React</Text>
            </Code>
          </VStack>



          <VStack spacing={2} w='full'>
            <Button flexGrow={1} bgImage='/coding-logos/nextjs-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/nextjs-icon.svg' }} as={Link} href="https://nextjs.org/docs/getting-started"

              isExternal
            >
            </Button>
            <Code textColor='gray.900' borderRadius={10} alignSelf='center' px={8}>
              <Text>NextJS</Text>
            </Code>
          </VStack>


          <VStack spacing={2} w='full'>
            <Button flexGrow={1} bgImage='/coding-logos/jest-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/jest-icon.svg' }} as={Link} href="https://jestjs.io/docs/getting-started"

              isExternal

            >
            </Button>
            <Code textColor='gray.900' borderRadius={10} alignSelf='center' px={8}>
              <Text>Jest Testing</Text>
            </Code>
          </VStack>


          <VStack spacing={2} w='full'>
            <Button flexGrow={1} bgImage='/coding-logos/figma-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/figma-icon.svg' }} as={Link} href="https://www.figma.com/developers/docs"

              isExternal

            >
            </Button>
            <Code textColor='gray.900' borderRadius={10} alignSelf='center' px={8}>
              <Text>Figma</Text>
            </Code>
          </VStack>
          <VStack spacing={2} w='full'>
            <Button flexGrow={1} bgImage='/coding-logos/html-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/html-icon.svg' }} as={Link} href="https://developer.mozilla.org/en-US/docs/Web/HTML"

              isExternal

            >
            </Button>
            <Code textColor='gray.900' borderRadius={10} alignSelf='center' px={8}>
              <Text>HTML</Text>
            </Code>
          </VStack>
        </Flex>
      </Flex>
    </SimpleGrid>
  )
}

export default SkillsDivider