"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PostType } from "@/types";
import PostCard from "./PostCard";
import { Container, Typography } from "@mui/material";
import SearchBar from "../SearchBar";

export default function PostList({ posts }: { posts: PostType[] }) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || ""; 

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, posts]);

  return (
    <Container>
      <SearchBar searchQuery={searchQuery} />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <Typography variant="h6" align="center">No posts found.</Typography>
      )}
    </Container>
  );
}
