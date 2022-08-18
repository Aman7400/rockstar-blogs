import Link from "next/link";
import { Box, Button, Container, Heading, HStack, Input, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList, useDisclosure } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa"
import React from "react";
import SearchModal from "./SearchModal";

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

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const [scrollPosition, setScrollPosition] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const reqOffSet = 80;

    let navContainerProps = {
        py: "4",
        px: "16",
        bgColor: "white",
        position: scrollPosition > reqOffSet ? "fixed" : "initial",
        boxShadow: scrollPosition > reqOffSet ? "md" : "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        spacing: "24",
        zIndex: 999,
        width: "100vw",
    }


    return (
        <Box {...navContainerProps} >
            {/* Logo */}
            <HStack>
                <Heading as='h1' size='md' marginInlineEnd={4}><Link href="/">Rockstar</Link></Heading>
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
            <SearchModal
                isOpen={isOpen}
                items={filteredBlogs}
                searchQuery={searchQuery}
                onChange={handleChange}
                onClose={() => {
                    setSearchQuery("");
                    onClose()
                }} />
        </Box>
    )

}

export default Navbar;