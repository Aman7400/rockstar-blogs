import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function LatestBlogs() {
  return (
    <Container maxW="container.xl" my={16}>
      <Text fontSize="xl" mb={4} >
        Latests Posts
      </Text>
      <Grid
        
        templateColumns='repeat(8, 1fr)'
        gap={6}>
        <GridItem  colSpan={5}>
          <BlogCard id={1} />
        </GridItem>
        <GridItem  colSpan={3} >
          <BlogCard id={2} orientation="row" />
          <BlogCard id={3} orientation="row" />
          <BlogCard id={2} orientation="row" />
        </GridItem>
      </Grid>
    </Container>
  )
}