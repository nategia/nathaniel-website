import {
  Button,
  Card,
  Code,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const codeStyles = {
  _hover: {
    transform: "translateY(-8px)",
  },
  transition: "transform 0.5s ease-in-out",
  bgColor: "transparent",
  fontSize: "sm",
  textColor: "blackAlpha.900",
  fontWeight: "bold",
};

function Testimonials() {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <VStack
      h="auto"
      alignItems="center"
      justifyContent={"center"}
      borderTopWidth={2}
      borderTopColor="ActiveBorder"
      borderBottomWidth={2}
      borderBottomColor="ActiveBorder"
      p={8}
    >
      <Icon
        as={FormatQuoteIcon}
        mt={-6}
        w={32}
        h={32}
        color="ActiveBorder"
        justifySelf="center"
      />

      <SimpleGrid columns={[1, 1, 1, 3, 3]} gap={12} px={4} textAlign="center">
        <Code {...codeStyles}>
          <Text>
            &quot;Nate transformed the website for my jiu-jitsu gym from
            nothing, to outstanding. His communication, professionalism, and
            knowledge were fantastic, but most importantly, he understood what I
            wanted. Very happy with the work.&quot;
          </Text>
          <Flex justify="center">
            <Divider my={8} maxW={32} bgColor="blackAlpha.900" />
          </Flex>{" "}
          <Text fontSize="xs">Dan Ward, Melbourne</Text>
        </Code>
        <Code {...codeStyles} mt={[0, 0, 0, 12, 12]}>
          <Text>
            &quot;Nathaniel always makes positive contributions, is prepared,
            courteous, and insightful. I was particularly impressed with the
            thought-provoking questions he asked in class. He excels in
            communication and problem solving skills, gets along with his team
            mates and is the type of colleague one would enjoy working
            with.&quot;
          </Text>
          <Flex justify="center">
            <Divider my={8} maxW={32} bgColor="blackAlpha.900" />
          </Flex>{" "}
          <Text fontSize="xs">
            Dr Jiemiao Chen, Department of Marketing, Monash Business School
          </Text>
        </Code>
        <Code {...codeStyles}>
          <Text>
            &quot;Nathaniel was a pleasure to work with and brough a lot of
            value and a new perspective to the team. I mentored him and he has
            been growing exponentially and teaching me a thing or two.&quot;
          </Text>
          <Flex justify="center">
            <Divider my={8} maxW={32} bgColor="blackAlpha.900" />
          </Flex>
          <Text fontSize="xs">Doug Neale, Lead front-end developer</Text>
        </Code>{" "}
      </SimpleGrid>
    </VStack>
  );
}

export default Testimonials;
