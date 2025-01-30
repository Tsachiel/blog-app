import { fetchPosts } from "@/lib/fetchPosts";
import { PostType } from "@/types";
import PostCard from "@/components/blog/PostCard";
import { Container, Typography } from "@mui/material";

export default async function HomePage() {
  const posts: PostType[] = await fetchPosts();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Latest Posts
      </Typography>

      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <Typography variant="h6" align="center">
          No posts available.
        </Typography>
      )}
    </Container>
  );
}
