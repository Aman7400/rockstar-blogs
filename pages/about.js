/* eslint-disable @next/next/no-img-element */
import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react"
import Image from "next/image"


const About = () => {
    return (
        <Container maxW="container.xl" py={8}>
            <Heading color="red.500" my={4} textAlign={"center"} size="3xl">
                We’re building the next evolution of digital reading experience
            </Heading>

            <HStack my={8}>
                <img src="/teams-1.png" style={{
                    height: "480px",
                    width: "420px"
                }} />

                <Box p={16}>
                    <Heading size="xl">
                        Meet  Our team
                    </Heading>
                    <Text fontSize={"xl"} color="gray.500" my={4}>
                        Integer non volutpat lorem. Proin hendrerit quam et erat ornare, ultrices consectetur elit iaculis. Nunc laoreet, urna in sodales scelerisque, lectus risus feugiat sapien, nec facilisis felis diam ac ligula. Nulla facilisi. Pellentesque sed laoreet nibh, ut bibendum erat. Suspendisse consectetur quam et mollis tempus. Sed non mauris malesuada nisi hendrerit porttitor sed id magna. Curabitur ullamcorper, augue at condimentum imperdiet, nisi libero pretium justo, eu tempus ligula risus eget ligula. Quisque lacinia neque sit amet venenatis fringilla. Curabitur non auctor mauris, quis cursus sapien.
                    </Text>
                </Box>


            </HStack>

            <Box textAlign="center" bgColor="gray.100" p={8} mt={8} mb={4}>
                <Heading size="xl">
                    Our team at Rockstar, creates blogs that help our readers to consume information, find resources, and grow ideas.
                </Heading>
                <Text fontSize="2xl" color="gray.500" >
                    We are moving beyond boring ordinary articles into immersive reading experiences,helping create the next evolution of social technology.
                </Text>
            </Box>

            <HStack my={8} >
                <Box p={16} pl={0}>
                    <Heading size="xl">
                        Proin hendreri
                    </Heading>
                    <Text fontSize={"xl"} color="gray.500" my={4}>
                        Integer non volutpat lorem. Proin hendrerit quam et erat ornare, ultrices consectetur elit iaculis. Nunc laoreet, urna in sodales scelerisque, lectus risus feugiat sapien, nec facilisis felis diam ac ligula. Nulla facilisi. Pellentesque sed laoreet nibh, ut bibendum erat. Suspendisse consectetur quam et mollis tempus. Sed non mauris malesuada nisi hendrerit porttitor sed id magna. Curabitur ullamcorper, augue at condimentum imperdiet, nisi libero pretium justo, eu tempus ligula risus eget ligula. Quisque lacinia neque sit amet venenatis fringilla. Curabitur non auctor mauris, quis cursus sapien.
                    </Text>
                </Box>
                <Box borderRadius="16px" boxShadow="lg">
                    <img src="/some.png" style={{
                        maxWidth: "560px",
                        borderRadius: "16px"
                    }} />
                </Box>
            </HStack>

            <Box textAlign="center" p={16} my={8}>
                <Heading size="xl" color="gray.700">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </Heading>
                <Text fontSize="2xl"  >
                    onsectetur quam et mollis tempus. Sed non mauris malesuada ni at condimentum imperdiet, nisi libero pretium justo, eu tempus ligula risus eget ligula. Quisque lacinia neque sit amet venenatis fringilla. Curabitur non auctor mauris, quis cursus sapien. </Text>
            </Box>

            <Box borderRadius="10px" my={8} boxShadow="lg">
                <img src="/teams.png" style={{
                    borderRadius: "10px"
                }} />
            </Box>
        </Container >
    )
}

export default About