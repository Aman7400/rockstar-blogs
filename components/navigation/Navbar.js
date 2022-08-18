import Link from "next/link";
import { Box, Button, Container, Heading, HStack, Input, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList, useDisclosure } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa"
import React from "react";

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleSearchIconClick = () => {
        onOpen()
    }


    const handleChange = (event) => setSearchQuery(event.target.value)



    const [searchQuery, setSearchQuery] = React.useState("");

    const allBlogs = [
        "10 of the Most Popular News Blogs on the Internet",
        "Pat Flynn’s story of how he got chucked out of his job following the 2008 economic ",
        "Ryan Robinson claims to provide no BS advice on blogging, and I couldn’t agree more.",
        "Adam Enfroy started his blog just a few years back in 2019 but he has quickly grown it to over 1 million monthly readers with some amazing strategies that every budding blogger should emulate. ",
        "Adam Connell has a simple objective with his blog, and that is to turn his readers into wizards of blogging. And that’s not a brag. I",
    ]

    const filteredBlogs = allBlogs.filter((title) => title.toLowerCase().includes(searchQuery))

    return (
        <Container py="4" maxW='container.xl' display="flex" justifyContent="space-between" alignItems="center" spacing="24">
            {/* Logo */}
            <HStack>
                <Heading as='h1' size='lg'><Link href="/">Rockstar</Link></Heading>
                <HStack gap="2">
                    {
                        [
                            { title: "Blogs", href: "/" },
                            { title: "About Us", href: "/about" },
                            { title: "Contact Us", href: "/contact" }
                        ].map((menuItem, i) =>
                            <Link key={i} href={menuItem.href}>{menuItem.title}</Link>
                        )
                    }
                </HStack>
            </HStack>
            {/* Menu */}
            <HStack gap="2">
                <Button size={"sm"} variant="ghost" colorScheme="red">
                    <Link href="/auth/login">
                        Login
                    </Link>
                </Button>
                <Button colorScheme="red" size={"sm"}>
                    <Link href="/auth/register">
                        Register
                    </Link>
                </Button>
                <Box p={2} onClick={() => handleSearchIconClick()} style={{ cursor: "pointer" }} display="flex" alignItems="center" justifyContent="center" borderRadius="100" bgColor={"red.500"}>
                    <FaSearch color="white" size={14} />
                </Box>
            </HStack>
            <Modal onClose={() => {
                setSearchQuery("");
                onClose()
            }} size={"2xl"} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Input variant="filled" size="lg" color={"red.500"} value={searchQuery}
                            onChange={handleChange} placeholder='Search with keywords...' />
                    </ModalHeader>
                    <ModalBody>
                        <UnorderedList>
                            {
                                filteredBlogs.map((title, i) =>
                                    <ListItem mb={2} onClick={onClose} key={i}>
                                        <Text>
                                            <Link href={`/blogs/${i}`}>
                                                {title}
                                            </Link>
                                        </Text>
                                    </ListItem>)
                            }
                        </UnorderedList>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme={"red"} onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    )

}

export default Navbar;