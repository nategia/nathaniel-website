import { Flex, Heading, Stack, useMediaQuery } from "@chakra-ui/react";

function Testimonials() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <Stack
      h="xl"
      borderRadius={34}
      boxShadow="dark-lg"
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
          <Heading as="span" fontSize={isLargerThan500 ? "5xl" : "3xl"}>
            Testimonials
          </Heading>{" "}
        </Stack>
      </Flex>
    </Stack>
  );
}

export default Testimonials;
