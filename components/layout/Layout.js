import Navbar from "../navigation/Navbar";
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import Footer from "./Footer";
import { AuthContextProvider } from "../../contexts/AuthContext";

const theme = extendTheme({
    fonts: {
        body: "'Ubuntu', sans-serif",
        heading: "'Ubuntu', sans-serif",
    },

    colors: {
        red:
        {
            50: '#ffe2ec',
            100: '#ffb3c5',
            200: '#fc839f',
            300: '#f95278',
            400: '#f62252',
            500: '#dd0939',
            600: '#ad032c',
            700: '#7c001e',
            800: '#4d0012',
            900: '#200005',
        }
    }


})



export default function Layout({ children }) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            <AuthContextProvider>
                <Navbar />
                <Box marginTop={"8vh"}>
                    {children}
                </Box>
                <Footer />
            </AuthContextProvider>
        </ChakraProvider>
    )
}