import {
  Card,
  Code,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const cardStyles = {
  p: 8,
  bgColor: "blue.200",
  shadow: "2xl",
  bgGradient: "linear(to-b,   blue.200,cyan.300,)",
};

function Testimonials() {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex h="auto">
      <Stack w="full" spacing={4}>
        <Heading
          py={6}
          as="span"
          fontSize={isLargerThan700 ? "6xl" : "4xl"}
          textColor="blackAlpha.900"
          textAlign="center"
        >
          Testimonials
        </Heading>{" "}
        <SimpleGrid
          columns={[1, 1, 1, 3, 3]}
          gap={4}
          px={4}
          alignItems="center"
        >
          <Card {...cardStyles} textAlign="center">
            <Code
              bgColor="transparent"
              fontSize={isLargerThan500 ? "initial" : "xs"}
              textColor="blackAlpha.900"
              fontWeight="bold"
            >
              <Text>
                &quot;Nate transformed the website for my jiu-jitsu gym from
                nothing, to outstanding. His communication, professionalism, and
                knowledge were fantastic, but most importantly, he understood
                what I wanted. Very happy with the work.&quot;
              </Text>
              <Flex justify="center">
                <Divider my={4} maxW={32} bgColor="blackAlpha.900" />
              </Flex>{" "}
              <Text>Dan Ward, Melbourne</Text>
            </Code>
          </Card>
          <Card {...cardStyles} textAlign="center">
            <Code
              textColor="blackAlpha.900"
              fontWeight="bold"
              bgColor="transparent"
              fontSize={isLargerThan500 ? "initial" : "xs"}
            >
              <Text>
                &quot;Nathaniel always makes positive contributions, is
                prepared, courteous, and insightful. I was particularly
                impressed with the thought-provoking questions he asked in
                class. He excels in communication and problem solving skills,
                gets along with his team mates and is the type of colleague one
                would enjoy working with.&quot;
              </Text>
              <Flex justify="center">
                <Divider my={4} maxW={32} bgColor="blackAlpha.900" />
              </Flex>{" "}
              <Text>
                Dr Jiemiao Chen, Department of Marketing, Monash Business School
              </Text>
            </Code>
          </Card>
          <Card {...cardStyles} textAlign="center">
            <Code
              textColor="blackAlpha.900"
              fontWeight="bold"
              bgColor="transparent"
              fontSize={isLargerThan500 ? "initial" : "xs"}
            >
              <Text>
                &quot;Nathaniel was a pleasure to work with and brough a lot of
                value and a new perspective to the team. I mentored him and he
                has been growing exponentially and teaching me a thing or
                two.&quot;
              </Text>
              <Flex justify="center">
                <Divider my={4} maxW={32} bgColor="blackAlpha.900" />
              </Flex>
              <Text>Doug Neale, Lead front-end developer</Text>
            </Code>{" "}
          </Card>
        </SimpleGrid>
      </Stack>
    </Flex>
  );
}

export default Testimonials;
