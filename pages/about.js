/* eslint-disable @next/next/no-img-element */
import { Box, Container, Heading, Text } from "@chakra-ui/react"


const About = () => {
    return (
        <Container maxW="container.xl">
            <Heading size="2xl">
                About Us
            </Heading>
            <Text fontSize={"xl"} color="gray.500" my={4}>
                Integer non volutpat lorem. Proin hendrerit quam et erat ornare, ultrices consectetur elit iaculis. Nunc laoreet, urna in sodales scelerisque, lectus risus feugiat sapien, nec facilisis felis diam ac ligula. Nulla facilisi. Pellentesque sed laoreet nibh, ut bibendum erat. Suspendisse consectetur quam et mollis tempus. Sed non mauris malesuada nisi hendrerit porttitor sed id magna. Curabitur ullamcorper, augue at condimentum imperdiet, nisi libero pretium justo, eu tempus ligula risus eget ligula. Quisque lacinia neque sit amet venenatis fringilla. Curabitur non auctor mauris, quis cursus sapien.
            </Text>
            <Text fontSize={"xl"} color="gray.500" my={4}>
                In enim magna, congue quis purus eget, rhoncus interdum ligula. Fusce et velit et nulla cursus varius et vitae libero. Curabitur nibh elit, tincidunt in rutrum id, hendrerit vel quam. Pellentesque venenatis tristique elit, eget consectetur sapien cursus ut. Morbi ut ornare quam, ut auctor ipsum. Integer dapibus rutrum metus non tincidunt. Nunc a nisl ac turpis bibendum imperdiet ac sed felis. In a congue metus. Ut pharetra, libero ac semper accumsan, nibh libero euismod erat, nec ultrices lectus nisl et enim. Curabitur congue faucibus consectetur.
            </Text>
            <Box borderRadius="10px" my={8} boxShadow="lg">
                <img src="/teams.png" style={{
                    borderRadius: "10px"
                }} />
            </Box>
        </Container >
    )
}

export default About