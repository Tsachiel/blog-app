import { fetchPosts } from "@/lib/fetchPosts";
import { PostType } from "@/types";
import PostCard from "@/components/blog/PostCard";
import SearchBar from "@/components/SearchBar";
import { Container, Typography } from "@mui/material";

export default async function HomePage({ searchParams }: { searchParams?: { query?: string } }) {
  const posts: PostType[] = await fetchPosts();
  const searchQuery = searchParams?.query || "";

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Latest Posts
      </Typography>

      <SearchBar searchQuery={searchQuery} />

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <Typography variant="h6" align="center">No posts found.</Typography>
      )}
    </Container>
  );
}
