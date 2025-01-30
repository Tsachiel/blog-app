import ClapsButton from "@/components/ClapsButton";
import OpenInNewTab from "@/components/ui/OpenInNewTab";
import { fetchPosts } from "@/lib/fetchPosts";
import { Card, CardActions, CardContent, Container, Typography } from "@mui/material";

type PageProps = {
  params: {
    postId: string;
  };
};

export default async function PostPage({ params }: PageProps) {

  const posts = await fetchPosts();
  const decodedPostId = decodeURIComponent(params.postId);
  const post = posts.find((p) => p.id === decodedPostId);

  if(!post) return <div>no post</div>
  return (
    
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>{post.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{post.description}</Typography>
          <Typography variant="caption" display="block" gutterBottom>
            <strong>Source:</strong> {post.source} | <strong>Published:</strong> {post.publishedAt}
          </Typography>
        <CardActions>
          <ClapsButton postId={post.id} />
          <OpenInNewTab url={post.id} />
        </CardActions>
          <Typography variant="body1" sx={{ marginTop: 2 }}>{post.content || "No content available."}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
