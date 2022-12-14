import { Badge, Box, Button, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function BlogCard({ id, orientation = "column" }) {

    let imgSize = { width: 800, height: 360 }
    let textSize = { heading: "2xl", desc: "lg" }
    let btnSize = { readMore: "lg", badge: "" }
    let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id.';
    let textContainer = {
        padding: 5
    }
    if (orientation === "row") {
        imgSize.width = 180;
        imgSize.height = 180;
        textSize.heading = "lg";
        textSize.desc = "small";
        btnSize.readMore = "sm";
        textContainer.padding = 2.5
        description = description.substring(0, 96) + "..."

    }


    const [isHovering, setIsHovering] = React.useState(false)

    const boxProps = {

        onMouseOver: () => setIsHovering(true),
        onMouseOut: () => setIsHovering(false),
        shadow: isHovering ? "lg" : "none",
        mb: orientation === "row" ? "5" : "0",
        cursor: "pointer",
        display: "flex",
        flexDirection: orientation,
        borderWidth: '1px'

    }



    return (
        <Box {...boxProps} >
            <Image alt='Dan Abramov' objectFit='cover' src={`https://picsum.photos/${imgSize.width}/${imgSize.height}`} />
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