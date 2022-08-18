import { Container, Heading, Text, VStack } from "@chakra-ui/react"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <VStack display={"flex"} justifyContent="center">
        <Heading size="sm" color="red.500">
          Rockstar Blogs &copy; {currentYear}
        </Heading>
        <Text fontSize={"x-small"} color="gray.400">
          All Rights Reserved
        </Text>
      </VStack>
    </Container>
  )
}

export default Footer