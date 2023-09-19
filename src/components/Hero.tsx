import { Flex, Heading, Stack, Button, useMediaQuery } from "@chakra-ui/react";

function Hero() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <Stack
      h="xl"
      borderRadius={34}
      boxShadow="dark-lg"
      bgImage="url('/hero-bg.jpg')"
      bgSize="cover"
      bgPosition="center"
    >
      <Flex
        direction={isLargerThan800 ? "row" : "column"}
        p={isLargerThan800 ? 32 : 16}
      >
        <Stack
          gap={isLargerThan800 ? 6 : 4}
          textAlign="left"
          justifyItems="left"
        >
          <Heading fontSize={isLargerThan500 ? "4xl" : "2xl"}>
            Passionate{" "}
            <Heading
              as="span"
              fontSize={isLargerThan500 ? "5xl" : "3xl"}
              bgGradient="linear(to-r, cyan.200, blue.500, purple.600)"
              bgClip="text"
            >
              front-end developer
            </Heading>{" "}
            ready to bring your ideas to life.
          </Heading>
          <Heading fontSize={isLargerThan500 ? "2xl" : "xl"}>
            With a strong focus on user-experience and clean code.
          </Heading>
          <Stack spacing={4} direction={isLargerThan500 ? "row" : "column"}>
            <Button
              size={isLargerThan500 ? "md" : "sm"}
              height={isLargerThan500 ? "48px" : "32px"}
              width={isLargerThan500 ? "200px" : "auto"}
              border="2px"
              variant="outline"
            >
              Hire
            </Button>
            <Button
              size={isLargerThan500 ? "md" : "sm"}
              height={isLargerThan500 ? "48px" : "32px"}
              width={isLargerThan500 ? "200px" : "auto"}
              border="2px"
              variant="outline"
            >
              Contact
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default Hero;
