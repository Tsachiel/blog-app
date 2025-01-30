import { PostType } from "@/types";
import { formatDateTime } from "./utils";

const API_KEY = process.env.NEWS_API_KEY!;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export async function fetchPosts(): Promise<PostType[]> {
  const queryParams = new URLSearchParams({
    country: "us",
    pageSize: "100",
  });

  try {
    const response = await fetch(`${BASE_URL}?${queryParams.toString()}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      next: { revalidate: 60 * 10 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();

    return (data.articles || []).map((article: any) => ({
      id: article.url,
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: formatDateTime(article.publishedAt),
      content: article.content,
      source: article.source.name,
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
