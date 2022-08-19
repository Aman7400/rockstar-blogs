import { Box, Button, Container, Heading, Input, InputGroup, Text, useToast } from "@chakra-ui/react"

export default function HeroSection() {
    const toast = useToast()
    return (
      <Container paddingBlock="8" display="flex" flexDirection="column" alignItems="center " maxW='container.lg'>
        <Heading as="h2" size='2xl' color="red.400">
          Welcome to Rockstar Blogs !!
        </Heading>
        <Text align="center" color="gray.500" marginBlock="4" fontSize="2xl" >
          The quick brown fox jumps over the lazy dog is an English-language pangram—a
          sentence that contains all of the letters of the English alphabet. Owing to
          its existence, Chakra was created.
        </Text>
        {/* Subsrcibe */}
        <Box>
          <InputGroup>
            <Input variant='filled' placeholder='Enter Your Email' size="lg" />
            <Button onClick={() =>
              toast({
                title: 'Subscription Added',
                description: "Thank you for subscribing to Rockstar Blogs",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            } marginInlineStart="4" colorScheme="red" size="lg">
              Subsrcibe
            </Button>
          </InputGroup>
        </Box>
      </Container>
    )
  }
  