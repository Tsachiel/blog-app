import { PostType } from "@/types";
import { safeUrl } from "@/lib/utils"; 
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import Link from "next/link";
import OpenInNewTab from "@/components/ui/OpenInNewTab"; 
import ClapsButton from "@/components/ClapsButton";

export default function PostCard({ post }: { post: PostType }) {
  return (
    <Card sx={{ maxWidth: 600, margin: "1rem auto" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link href={`/posts/${safeUrl(post.id)}`} passHref>
            {post.title}
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
