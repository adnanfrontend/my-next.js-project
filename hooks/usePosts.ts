import { useEffect, useState } from "react";
import { fetchPosts } from "@/services/api";
import { Post } from "@/types/post";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading };
}