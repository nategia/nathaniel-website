import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

export function EmailSignUp() {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <SimpleGrid
      columns={[1, 1, 1, 2, 2]}
      borderRadius={34}
      h="xl"
      alignItems="center"
      justifyContent={"center"}
      p={8}
      bgColor="blackAlpha.900"
    >
      <Heading justifySelf="center">Sign up for my secret newsletter</Heading>
      <FormControl>
        <Stack spacing={4}>
          <FormLabel>Email address</FormLabel>
          <Input w={96} type="email" placeholder="bleepbloop@blop.com" />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          <Flex gap={2}>
            <Checkbox size="md" colorScheme="green" defaultChecked />
            <FormHelperText>
              I wish to receive awesome secret newsletters.
            </FormHelperText>
          </Flex>
          <Button maxW={32}>Submit</Button>
        </Stack>
      </FormControl>
    </SimpleGrid>
  );
}
