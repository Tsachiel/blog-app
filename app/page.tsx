import { fetchPosts } from "@/lib/fetchPosts";
import { PostType } from "@/types";
import PostList from "@/components/blog/PostList";
import { Container, Typography } from "@mui/material";

export default async function HomePage() {
  const posts: PostType[] = await fetchPosts();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Latest Posts
      </Typography>
      <PostList posts={posts} />
    </Container>
  );
}
