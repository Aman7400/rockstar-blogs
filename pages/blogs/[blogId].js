import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import {useRouter} from "next/router"

function BlogDetails() {
    const {query} = useRouter();
    const desc = 'convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim'
    return (
        <Container maxW="container.xl">
            <Heading fontSize='4xl'>
                Blog #{query.blogId}
            </Heading>
            <Text mt={4}>{desc}</Text>
        </Container>
    )
}

export default BlogDetails