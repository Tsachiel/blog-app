import Link from "next/link";
import { PostType } from "@/types";
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import OpenInNewTab from "@/components/ui/OpenInNewTab"; 
import ClapsButton from "@/components/ClapsButton"; 
import { safeUrl } from "@/lib/utils";

export default function PostCard({ post }: { post: PostType }) {
  const postUrl = `/posts/${safeUrl(post.id)}`;

  return (
    <Card sx={{ maxWidth: 600, margin: "1rem auto" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link href={postUrl} passHref>
            <Typography component="span" sx={{ cursor: "pointer", textDecoration: "underline" }}>
              {post.title}
            </Typography>
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          <strong>Source:</strong> {post.source} | <strong>Published:</strong> {post.publishedAt}
        </Typography>
      </CardContent>

      <CardActions>
        <OpenInNewTab url={post.id} />
        <ClapsButton postId={post.id} />
      </CardActions>
    </Card>
  );
}
