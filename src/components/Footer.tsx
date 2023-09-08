import { Flex, Link } from "@chakra-ui/react";
import { mdiLinkedin, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";


function Footer() {

  return (
    <Flex justify='center' p={6} gap={8}>
      <Link href="https://www.linkedin.com/in/nathaniel-giabardo-419235b8/" target="_blank" rel="noopener noreferrer">
        <Icon path={mdiLinkedin} size={2} color='black' />
      </Link>
      <Link href="https://twitter.com/NathanielAus" target="_blank" rel="noopener noreferrer">
        <Icon path={mdiTwitter} size={2} color='black' />
      </Link>
    </Flex>
  )
}

export default Footer