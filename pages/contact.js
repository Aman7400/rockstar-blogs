import { Box, Button, Container, Heading, Input, Text, Textarea, useToast } from "@chakra-ui/react"
import { SiMinutemailer } from "react-icons/si"

const Contact = () => {
    const toast = useToast();

    return (
        <Container display="flex" justifyContent="center" alignItems="center" maxW="container.lg" height={"84vh"} mt="8vh">
            <Box display={"flex"} position="relative" flexDirection="row" width="800px" height="560px" boxShadow="lg">
                <Box boxShadow="md" borderRadius="8px" position="absolute" top={"40px"} left={"-120px"}>
                    <img src="/contact.png" style={{
                        maxHeight: "480px",
                        borderRadius: "8px"
                    }} />
                </Box>
                <Box ml={48} flex={1} display="flex" flexDirection="column" alignItems="center" p={16}>
                    <Box>
                        <Heading color="red.500">
                            Get in Touch
                        </Heading>
                        <Text color="gray.500">
                            Feel Free to drop us a line below
                        </Text>
                    </Box>

                    <Box mt={8} width={360}>
                        <Input variant="filled" mb={4} size="lg" placeholder="Your Name" />
                        <Input variant="filled" mb={4} size="lg" placeholder="Your Email" />
                        <Textarea rows={4} variant="filled" mb={4} size="lg" placeholder="Your Message Here..." />
                        <Button rightIcon={<SiMinutemailer />} onClick={() =>
                            toast({
                                title: 'Thanks for Contacting',
                                description: "Our Team will reach out to you very soon!!",
                                status: "success",
                                isClosable: true,
                            })
                        } width="100%" size={"lg"} colorScheme="red">
                            Send 
                        </Button> 
                    </Box>


                </Box>
            </Box>
        </Container>
    )
}

export default Contact