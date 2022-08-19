import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function LatestBlogs() {
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
            <BlogCard id={1} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={3} >
            <BlogCard id={2} orientation="row" />
          </GridItem>
          <GridItem rowSpan={1} colSpan={3} >
            <BlogCard id={3} orientation="row" />
          </GridItem>
          <GridItem rowSpan={1} colSpan={3} >
            <BlogCard id={4} orientation="row" />
          </GridItem>
        </Grid>
      </Container>
    )
  }