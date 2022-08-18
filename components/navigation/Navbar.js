import Link from "next/link";
import { Box, Container, Heading, HStack } from '@chakra-ui/react'

const Navbar = () => {

    return (
        <Container py="4" maxW='container.xl' display="flex" justifyContent="space-between" alignItems="center" spacing="24">
            {/* Logo */}
            <Heading as='h1' size='lg'>Rockstar</Heading>
            {/* Menu */}
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
        </Container>
    )

}

export default Navbar;