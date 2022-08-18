import { Badge, Box, Button, Container, Grid, GridItem, Heading, Image, Input, InputGroup, InputLeftElement, Stack, Text, useTheme, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MdBuild, MdCall } from "react-icons/md"
import { FaExternalLinkAlt } from "react-icons/fa"

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
  const toast = useToast()
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
          <Button onClick={() =>
            toast({
              title: 'Subscription Added',
              description: "Thank you for subscribing to Rockstar Blogs",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          } marginInlineStart="4" colorScheme="red" size="lg">
            Subsrcibe
          </Button>
        </InputGroup>
      </Box>
    </Container>
  )
}

function RecentBlogPosts() {
  return (
    <Container maxW="container.xl" my={16}>
      <Text fontSize="xl" mb={4} >
        Recent Blog Posts
      </Text>
      <Grid
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(8, 1fr)'
        gap={4} width="container.xl" >
        <GridItem rowSpan={3} colSpan={5}>
          <RecentBlogCard id={1} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} >
          <RecentBlogCard id={2} orientation="row" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} >
          <RecentBlogCard id={3} orientation="row" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} >
          <RecentBlogCard id={4} orientation="row" />
        </GridItem>
      </Grid>
    </Container>
  )
}

function RecentBlogCard({ id, orientation = "column" }) {
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
    description = description.substring(0,96) + "..."

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
        <Heading fontSize={textSize.heading}>Blog Recent {id}</Heading>
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

function AllBlogPosts() {
  const [mouseOver, setMouseOver] = React.useState(false)
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
              <Box p={5} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)} shadow={mouseOver ? "lg" : "none"} borderWidth='1px'>
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