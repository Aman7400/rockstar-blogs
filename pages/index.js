import { Box, Button, Container, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement, Text, useTheme } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MdBuild, MdCall } from "react-icons/md"

export default function Home() {
  const theme = useTheme()
  return (
    <>
      <HeroSection />
      <RecentBlogPosts />
      <AllBlogPosts />
      <MobileAppMockup />
    </>
  )
}

function HeroSection() {
  return (
    <Container paddingBlock="8" display="flex" flexDirection="column" alignItems="center " maxW='container.lg'>
      <Heading as="h2" size='2xl' color="red.400">
        Welcome to Rockstar Blogs !!
      </Heading>
      <Text align="center" color="gray.500" marginBlock="4" fontSize="2xl" >
        The quick brown fox jumps over the lazy dog is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
      {/* Subsrcibe */}
      <Box>
        <InputGroup>
          <Input variant='filled' placeholder='Enter Your Email' size="lg" />
          <Button marginInlineStart="4" colorScheme="red" size="lg">
            Subsrcibe
          </Button>
        </InputGroup>
      </Box>
    </Container>
  )
}

function RecentBlogPosts() {
  return (
    <Container maxW="container.xl">
      <Text fontSize="xl" >
        Recent Blog Posts
      </Text>
      <Grid h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4} width="container.xl" >
        <GridItem rowSpan={2} colSpan={3} bg='tomato' />
        <GridItem rowSpan={1} colSpan={2} bg='tomato' />
        <GridItem rowSpan={1} colSpan={2} bg='tomato' />
      </Grid>
      {/* Blog Wrapper */}
      {/* Latest #1 */}
      {/* Latest #2 */}
      {/* Latest #3 */}
    </Container>
  )
}
function AllBlogPosts() {
  const [mouseOver,setMouseOver] = React.useState(false)
  return (
    <Container maxW="container.xl">
      <Text fontSize="xl" >
        All Blog Posts
      </Text>
      {/* 3*3 grid of Articles */}
      <Grid
        templateColumns='repeat(6, 1fr)'
        gap={4}
        width="container.xl" >
        {
          [1, 2, 3, 4, 5, 6].map((title, i) =>
            <GridItem key={i} colSpan={2}>
              <Box p={5} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}shadow={mouseOver ? "lg" :"none"} borderWidth='1px'>
                <Heading fontSize='xl'>Blog #{title}</Heading>
                <Text mt={4}>lorem ipsum dolor sit</Text>
                <Link href={`/blogs/${title}`}>Read More</Link>
              </Box>
            </GridItem>)
        }
      </Grid>
      {/* Pagination */}
      <Text>Pagination</Text>
    </Container>
  )
}

function MobileAppMockup() {
  return (
    <Container maxW="container.xl">
      <Heading>
        Mobile Mockup goes here
      </Heading>
    </Container>
  )
}