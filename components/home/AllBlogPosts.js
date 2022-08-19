import { Box, Container, Grid, GridItem, Heading, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import React from "react"
import BlogCard from "./BlogCard"

export default function AllBlogPosts() {
    const [mouseOver, setMouseOver] = React.useState(false)
    const [tabSection, setTabSection] = React.useState("all")
    return (
      <Container maxW="container.xl">
        <Text fontSize="xl" >
          All Blog Posts
        </Text>
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid
                templateColumns='repeat(6, 1fr)'
                gap={4}
                width="container.xl" >
                {
                  [1, 2, 3, 4, 5, 6].map((title, i) =>
                    <GridItem key={i} colSpan={2}>
                      <BlogCard id={title}  />
                    </GridItem>)
                }
              </Grid>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* 3*3 grid of Articles */}
        <Grid
          templateColumns='repeat(6, 1fr)'
          gap={4}
          width="container.xl" >
          {
            [1, 2, 3, 4, 5, 6].map((title, i) =>
              <GridItem key={i} colSpan={2}>
                <Box p={5} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)} shadow={mouseOver ? "lg" : "none"} borderWidth='1px'>
                  <Heading fontSize='xl'> {tabSection} Blog #{title}</Heading>
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