import { Flex, Heading, GridItem, Button, Grid, Stack, HStack, SimpleGrid, Link } from "@chakra-ui/react";

// Hovering up and down animationm. 
{/* <motion.div
  animate={{ y: 20 }}   // Animation brings it back to its original position
  transition={{
    repeatType: 'mirror',
    repeat: Infinity,   // Repeats the animation indefinitely
    duration: 6,       // Duration for each half of the animation cycle (up and down)
    ease: 'linear', // Easing function for smooth motion
  }}

>
</motion.div> */}

const buttonStyles = {
  boxSize: { base: 12, sm: 16, md: 20, lg: 24, xl: 32 },
  borderRadius: 'full',
  boxShadow: '2xl',
  bgPosition: 'center',
  backgroundSize: 'cover',
  _hover: { transform: 'translateY(-4px)', textDecoration: 'none' },
}

function AboutMeWithDots() {


  return (

    <SimpleGrid columns={[1, 1, 1, 2]} gap={16}>
      <Flex bgColor='whiteAlpha.600' p={24} h='xl' borderRadius={20} boxShadow='2xl' >
        <Stack p={8} maxW='3xl' >
          <HStack>
            <Heading color='blackAlpha.800' fontSize='xxx-large'>I&apos;m</Heading>
            <Heading fontSize='xxx-large' color='twitter.600'>Nathaniel</Heading></HStack>
          <Heading color='blackAlpha.800' fontSize={58}>Nice to meet you.</Heading>
        </Stack>

      </Flex>

      <Grid templateColumns='repeat(6, 1fr)' templateRows='repeat(6, 1fr)' gap={0} p={{ base: 8, lg: 16, xl: 20 }} alignItems='center' justifyItems='center'>


        {/* TOP */}
        <GridItem colSpan={2} rowSpan={2} colStart={2}  >
          <Button {...buttonStyles}
            bgImage='/coding-logos/js-icon.svg' as={Link} _active={{ bg: '/coding-logos/js-icon.svg' }} isExternal href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"

          ></Button>



        </GridItem>
        <GridItem colSpan={2} rowSpan={2} >
          <Button bgImage='/coding-logos/ts-icon.svg'{...buttonStyles} _active={{ bg: '/coding-logos/ts-icon.svg' }} as={Link} href="https://www.typescriptlang.org/docs/"
            isExternal
          >
          </Button>
        </GridItem>

        {/* MID */}
        <GridItem colSpan={2} rowSpan={2} colStart={1} >
          <Button bgImage='/coding-logos/react-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/react-icon.svg' }} as={Link} href="https://react.dev/learn"

            isExternal
          >
          </Button>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Button bgImage='/coding-logos/nextjs-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/nextjs-icon.svg' }} as={Link} href="https://nextjs.org/docs/getting-started"

            isExternal
          >
          </Button>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Button bgImage='/coding-logos/jest-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/jest-icon.svg' }} as={Link} href="https://jestjs.io/docs/getting-started"

            isExternal

          >
          </Button>
        </GridItem>

        {/* BOTTOM */}

        <GridItem colSpan={2} rowSpan={2} colStart={2}>
          <Button bgImage='/coding-logos/figma-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/figma-icon.svg' }} as={Link} href="https://www.figma.com/developers/docs"

            isExternal

          >
          </Button>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Button bgImage='/coding-logos/html-icon.svg' {...buttonStyles} _active={{ bg: '/coding-logos/html-icon.svg' }} as={Link} href="https://developer.mozilla.org/en-US/docs/Web/HTML"

            isExternal

          >
          </Button>
        </GridItem>

      </Grid>
    </SimpleGrid>
  )
}

export default AboutMeWithDots