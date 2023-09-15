import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Radio, RadioGroup, Spacer, Stack, useDisclosure } from "@chakra-ui/react"
import React from "react"


function HeaderDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (
    <Flex p={6} w='100%' >
      <Heading color='blackAlpha.900'>
        Nathaniel Codes
      </Heading>
      <Spacer />
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex >
  )
}

export default HeaderDrawer