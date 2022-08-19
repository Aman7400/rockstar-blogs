import { Badge, Box, Button, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function BlogCard({ id, orientation = "column" }) {
    let imgSize = { width: 800, height: 400 }
    let textSize = { heading: "2xl", desc: "lg" }
    let btnSize = { readMore: "lg", badge: "" }
    let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id.';
    let textContainer = {
        padding: 5
    }
    if (orientation === "row") {
        imgSize.width = 240;
        imgSize.height = 140;
        textSize.heading = "lg";
        textSize.desc = "x-small";
        btnSize.readMore = "xs";
        textContainer.padding = 2.5
        description = description.substring(0, 96) + "..."

    }



    return (
        <Box display="flex" flexDirection={orientation} shadow={"md"} borderWidth='1px'>
            <Image alt='Dan Abramov' objectFit='cover'
                src={`https://picsum.photos/${imgSize.width}/${imgSize.height}`} />

            <Box p={textContainer.padding}>
                <Stack marginBlock={2} direction='row' flexWrap="wrap">
                    <Badge >Default</Badge>
                    <Badge colorScheme='green'>Success</Badge>
                    <Badge colorScheme='red'>Removed</Badge>
                    <Badge colorScheme='purple'>New</Badge>
                </Stack>
                <Heading fontSize={textSize.heading}>{id}</Heading>
                <Text color="gray.500" fontSize={textSize.desc} mt={1}>{description}</Text>
                <Button size={btnSize.readMore} variant="ghost" colorScheme="red" rightIcon={<FaExternalLinkAlt />}>
                    <Link href={`/blogs/recent${id}`}>
                        Read More
                    </Link>
                </Button>
            </Box>
        </Box>
    )
}