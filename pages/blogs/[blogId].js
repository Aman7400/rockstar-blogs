import { Box, Button, ButtonGroup, Container, Heading, Highlight, HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from "next/router"
import { BsFillBookmarksFill,BsLink45Deg, BsFillEmojiHeartEyesFill } from "react-icons/bs"

function BlogDetails() {
    const { query } = useRouter();
    const desc = 'convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim'
    return (
        <Box width="100vw">
            <BlogHeroImage />
            <BlogHeroHeader query={query} />
            <BlogPostBody para={desc} />
        </Box>
    )
}

function BlogHeroImage() {
    return (
        <Box my={8} boxShadow="lg">
            <img src="/teams.png" style={{
            }} />
        </Box>
    )
}

function BlogHeroHeader({ query }) {
    const [stat,setStat] = React.useState({
        isLiked : false,
        isSaved : false,
    })
    let pDate = new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear()
    return (
        <Container maxW="container.xl" my={8}>
            <HStack py={4} justifyContent="space-between">
                <Heading fontSize='4xl'>
                    Blog #{query.blogId}
                </Heading>
                <ButtonGroup >
                    <IconButton onClick={() => setStat(prev => ({...prev,isLiked: !stat.isLiked}))} colorScheme={stat.isLiked ? "red" : "gray"} borderRadius="100" icon={<BsFillEmojiHeartEyesFill />} />
                    <IconButton onClick={() => setStat(prev => ({...prev,isSaved: !stat.isSaved}))} colorScheme={stat.isSaved ? "red" : "gray"} borderRadius="100" icon={<BsFillBookmarksFill />} />
                    <IconButton borderRadius="100" icon={<BsLink45Deg />} />
                </ButtonGroup>
            </HStack>

            <HStack>
             <Heading fontSize='xl' color="gray.500"> Author  - </Heading>
             <Heading fontSize="xl" color="red.500">{"Aman Shukla"}</Heading>
            </HStack>

            <HStack>
             <Text fontSize="small" color="gray.500">Created on - </Text>
             <Text fontSize="small" color="red.500">{pDate}</Text>
            </HStack>
        </Container>
    )
}

function BlogPostBody({ para }) {
    return (
        <Container maxW="container.xl" my={8}>
            {
                [para, para, para, para].map((para, i) => <Text key={i} mt={4}>{para}</Text>)
            }
        </Container>
    )
}

export default BlogDetails