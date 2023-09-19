import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function HeaderDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");

  return (
    <Flex py={6} w="100%" justifyContent="flex-end">
      <Heading color="blackAlpha.900">Nathaniel Codes</Heading>
      <Spacer />
      <IconButton
        icon={<MenuIcon />}
        aria-label="hamburger-menu-button"
        onClick={onOpen}
        borderWidth={2}
        borderRadius={8}
        _hover={{ transform: "translateY(-1px)", color: "#0BC5EA" }}
        color="RGBA(0, 0, 0, 0.80)"
        borderColor="blackAlpha.800"
      ></IconButton>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={2} align="flex-start">
              <Button
                variant="ghost"
                bgColor="transparent"
                _active={{ color: "blue.500" }}
                textAlign="left"
                as={Link}
                _hover={{
                  transform: "translateY(-4px)",
                  textDecoration: "none",
                }}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                textAlign="left"
                _active={{ color: "blue.500" }}
                as={Link}
                href="src/pages/features/index.page.tsx"
                _hover={{
                  transform: "translateY(-4px)",
                  textDecoration: "none",
                }}
              >
                Features
              </Button>
              <Button
                variant="ghost"
                textAlign="left"
                _active={{ color: "blue.500" }}
                as={Link}
                _hover={{
                  transform: "translateY(-4px)",
                  textDecoration: "none",
                }}
              >
                Blogs
              </Button>
              <Button
                variant="ghost"
                textAlign="left"
                _active={{ color: "blue.500" }}
                as={Link}
                _hover={{
                  transform: "translateY(-4px)",
                  textDecoration: "none",
                }}
              >
                Contact
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default HeaderDrawer;
