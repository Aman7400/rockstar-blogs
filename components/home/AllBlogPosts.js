import { Box, Container, Grid, GridItem, Heading, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import React from "react"
import BlogCard from "./BlogCard"

const allTabs = [
  "All",
  "Technology",
  "Social Media",
  "Business",
  "Entertainment",
  "Lifestyle",
  "Geek",
]

export default function AllBlogPosts() {
  return (
    <Container maxW="container.xl">
      <Tabs variant='enclosed'>
        <TabList mb="2">
          {
            allTabs.map((title, i) => <Tab key={i}>{title}</Tab>)
          }
        </TabList>
        <TabPanels>
          {
            allTabs.map((tab, i) =>
              <TabPanel key={i}>
                <Grid
                  templateColumns='repeat(6, 1fr)'
                  gap={6} >
                  {
                    [1, 2, 3, 4, 5, 6].map((title, i) =>
                      <GridItem key={i} colSpan={2}>
                        <BlogCard id={`${tab} ${title}`} />
                      </GridItem>)
                  }
                </Grid>
              </TabPanel>)
          }
        </TabPanels>
      </Tabs>
    </Container>
  )
}