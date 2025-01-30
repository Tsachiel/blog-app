import { fetchPosts } from "@/lib/fetchPosts";

type PageProps = {
  params: {
    postId: string;
  };
};

export default async function PostPageWrapper({ params }: PageProps) {

  const posts = await fetchPosts();
  const decodedPostId = decodeURIComponent(params.postId);
  const post = posts.find((p) => p.id === decodedPostId);

  if(!post) return <div>no post</div>
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p><strong>Source:</strong> {post.source}</p>
      <p><strong>Published:</strong> {post.publishedAt}</p>
      <p>{post.content || "No content available."}</p>
    </div>
  );
}
