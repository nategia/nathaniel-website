import {
  Flex,
  SimpleGrid,
  useMediaQuery,
  Code,
  Text,
  Button,
  Link,
  VStack,
  Heading,
  GridItem,
  Grid,
} from "@chakra-ui/react";

const buttonStyles = {
  boxSize: { base: 12, sm: 16, md: 20, lg: 24, xl: 32 },
  borderRadius: "full",
  boxShadow: "2xl",
  bgPosition: "center",
  backgroundSize: "cover",
  _hover: { transform: "translateY(-4px)", textDecoration: "none" },
};

function SkillsDivider() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan1190] = useMediaQuery("(min-width: 1190px)");

  return (
    <SimpleGrid columns={[1]} gap={16}>
      <Flex
        h={isLargerThan1190 ? "xs" : "auto"}
        borderRadius={20}
        direction="column"
        p={8}
        gap={12}
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          color="blackAlpha.800"
          fontSize={isLargerThan700 ? "6xl" : "4xl"}
          textAlign="center"
        >
          My developer toolkit
        </Heading>

        {isLargerThan1190 ? (
          <Flex w="full" justify="space-evenly">
            <VStack spacing={2} w="full">
              <Button
                {...buttonStyles}
                bgImage="/coding-logos/js-icon.svg"
                as={Link}
                _active={{ bg: "/coding-logos/js-icon.svg" }}
                isExternal
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              ></Button>
              <Code
                textColor="gray.900"
                borderRadius={10}
                alignSelf="center"
                px={8}
              >
                <Text>JavaScript</Text>
              </Code>
            </VStack>
            <VStack spacing={2} w="full">
              <Button
                bgImage="/coding-logos/ts-icon.svg"
                {...buttonStyles}
                _active={{ bg: "/coding-logos/ts-icon.svg" }}
                as={Link}
                href="https://www.typescriptlang.org/docs/"
                isExternal
              ></Button>
              <Code
                textColor="gray.900"
                borderRadius={10}
                alignSelf="center"
                px={8}
              >
                <Text>TypeScript</Text>
              </Code>
            </VStack>

            <VStack spacing={2} w="full">
              <Button
                bgImage="/coding-logos/react-icon.svg"
                {...buttonStyles}
                _active={{ bg: "/coding-logos/react-icon.svg" }}
                as={Link}
                href="https://react.dev/learn"
                isExternal
              ></Button>
              <Code
                textColor="gray.900"
                borderRadius={10}
                alignSelf="center"
                px={8}
              >
                <Text>React</Text>
              </Code>
            </VStack>

            <VStack spacing={2} w="full">
              <Button
                bgImage="/coding-logos/nextjs-icon.svg"
                {...buttonStyles}
                _active={{ bg: "/coding-logos/nextjs-icon.svg" }}
                as={Link}
                href="https://nextjs.org/docs/getting-started"
                isExternal
              ></Button>
              <Code
                textColor="gray.900"
                borderRadius={10}
                alignSelf="center"
                px={8}
              >
                <Text>NextJS</Text>
              </Code>
            </VStack>

            <VStack spacing={2} w="full">
              <Button
                bgImage="/coding-logos/jest-icon.svg"
                {...buttonStyles}
                _active={{ bg: "/coding-logos/jest-icon.svg" }}
                as={Link}
                href="https://jestjs.io/docs/getting-started"
                isExternal
              ></Button>
              <Code
                textColor="gray.900"
                borderRadius={10}
                alignSelf="center"
                px={8}
              >
                <Text>Jest Tests</Text>
              </Code>
            </VStack>

            <VStack spacing={2} w="full">
              <Button
                bgImage="/coding-logos/figma-icon.svg"
                {...buttonStyles}
                _active={{ bg: "/coding-logos/figma-icon.svg" }}
                as={Link}
                href="https://www.figma.com/developers/docs"
                isExternal
              ></Button>
              <Code
                textColor="gray.900"
                borderRadius={10}
                alignSelf="center"
                px={8}
              >
                <Text>Figma</Text>
              </Code>
            </VStack>
            <VStack spacing={2} w="full">
              <Button
                bgImage="/coding-logos/html-icon.svg"
                {...buttonStyles}
                _active={{ bg: "/coding-logos/html-icon.svg" }}
                as={Link}
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                isExternal
              ></Button>
              <Code
                textColor="gray.900"
                borderRadius={10}
                alignSelf="center"
                px={8}
              >
                <Text>HTML</Text>
              </Code>
            </VStack>
          </Flex>
        ) : (
          <Flex w="full" justify="center">
            <Grid
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(3, 1fr)"
              gap={isLargerThan700 ? 4 : 2}
            >
              <GridItem colSpan={1} rowSpan={1} minW={0}>
                <VStack spacing={2} w="full">
                  <Button
                    {...buttonStyles}
                    bgImage="/coding-logos/js-icon.svg"
                    as={Link}
                    _active={{ bg: "/coding-logos/js-icon.svg" }}
                    isExternal
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  ></Button>
                  <Code
                    textColor="gray.900"
                    borderRadius={10}
                    alignSelf="center"
                    px={isLargerThan700 ? 8 : 4}
                  >
                    <Text fontSize={isLargerThan700 ? "md" : "xs"}>
                      JavaScript
                    </Text>
                  </Code>
                </VStack>
              </GridItem>

              <GridItem colSpan={1} rowSpan={1} minW={0}>
                <VStack spacing={2} w="full">
                  <Button
                    bgImage="/coding-logos/ts-icon.svg"
                    {...buttonStyles}
                    _active={{ bg: "/coding-logos/ts-icon.svg" }}
                    as={Link}
                    href="https://www.typescriptlang.org/docs/"
                    isExternal
                  ></Button>
                  <Code
                    textColor="gray.900"
                    borderRadius={10}
                    alignSelf="center"
                    px={isLargerThan700 ? 8 : 4}
                  >
                    <Text fontSize={isLargerThan700 ? "md" : "xs"}>
                      TypeScript
                    </Text>
                  </Code>
                </VStack>
              </GridItem>

              <GridItem colSpan={1} rowSpan={1} minW={0}>
                <VStack spacing={2} w="full">
                  <Button
                    bgImage="/coding-logos/react-icon.svg"
                    {...buttonStyles}
                    _active={{ bg: "/coding-logos/react-icon.svg" }}
                    as={Link}
                    href="https://react.dev/learn"
                    isExternal
                  ></Button>
                  <Code
                    textColor="gray.900"
                    borderRadius={10}
                    alignSelf="center"
                    px={isLargerThan700 ? 8 : 4}
                  >
                    <Text fontSize={isLargerThan700 ? "md" : "xs"}>React</Text>
                  </Code>
                </VStack>
              </GridItem>

              <GridItem colSpan={3} rowSpan={1} minW={0}>
                <VStack spacing={2} w="full">
                  <Button
                    bgImage="/coding-logos/nextjs-icon.svg"
                    {...buttonStyles}
                    _active={{ bg: "/coding-logos/nextjs-icon.svg" }}
                    as={Link}
                    href="https://nextjs.org/docs/getting-started"
                    isExternal
                  ></Button>
                  <Code
                    textColor="gray.900"
                    borderRadius={10}
                    alignSelf="center"
                    px={isLargerThan700 ? 8 : 4}
                  >
                    <Text fontSize={isLargerThan700 ? "md" : "xs"}>NextJS</Text>
                  </Code>
                </VStack>
              </GridItem>

              <GridItem colSpan={1} rowSpan={1} minW={0}>
                <VStack spacing={2} w="full">
                  <Button
                    bgImage="/coding-logos/jest-icon.svg"
                    {...buttonStyles}
                    _active={{ bg: "/coding-logos/jest-icon.svg" }}
                    as={Link}
                    href="https://jestjs.io/docs/getting-started"
                    isExternal
                  ></Button>
                  <Code
                    textColor="gray.900"
                    borderRadius={10}
                    alignSelf="center"
                    px={isLargerThan700 ? 8 : 4}
                  >
                    <Text
                      fontSize={isLargerThan700 ? "md" : "xs"}
                      whiteSpace="nowrap"
                    >
                      Jest Tests
                    </Text>
                  </Code>
                </VStack>
              </GridItem>

              <GridItem colSpan={1} rowSpan={1} minW={0}>
                <VStack spacing={2} w="full">
                  <Button
                    bgImage="/coding-logos/figma-icon.svg"
                    {...buttonStyles}
                    _active={{ bg: "/coding-logos/figma-icon.svg" }}
                    as={Link}
                    href="https://www.figma.com/developers/docs"
                    isExternal
                  ></Button>
                  <Code
                    textColor="gray.900"
                    borderRadius={10}
                    alignSelf="center"
                    px={isLargerThan700 ? 8 : 4}
                  >
                    <Text fontSize={isLargerThan700 ? "md" : "xs"}>Figma</Text>
                  </Code>
                </VStack>
              </GridItem>

              <GridItem colSpan={1} rowSpan={1} minW={0}>
                <VStack spacing={2} w="full">
                  <Button
                    bgImage="/coding-logos/html-icon.svg"
                    {...buttonStyles}
                    _active={{ bg: "/coding-logos/html-icon.svg" }}
                    as={Link}
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    isExternal
                  ></Button>
                  <Code
                    textColor="gray.900"
                    borderRadius={10}
                    alignSelf="center"
                    px={isLargerThan700 ? 8 : 4}
                  >
                    <Text fontSize={isLargerThan700 ? "md" : "xs"}>HTML</Text>
                  </Code>
                </VStack>
              </GridItem>
            </Grid>
          </Flex>
        )}
      </Flex>
    </SimpleGrid>
  );
}

export default SkillsDivider;
