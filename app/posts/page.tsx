import { fetchPosts } from "@/lib/fetchPosts";
import { PostType } from "@/types";
import BlogCard from "@/components/blog/PostCard";
import { Container, Typography } from "@mui/material";

export default async function PostsPage() {
  const posts: PostType[] = await fetchPosts();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Latest Posts
      </Typography>

      {posts.length > 0 ? (
        posts.map((post) => <BlogCard key={post.id} post={post} />)
      ) : (
        <Typography variant="h6" align="center">
          No posts available.
        </Typography>
      )}
    </Container>
  );
}
