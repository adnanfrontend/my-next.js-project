"use client";

import { usePosts } from "@/hooks/usePosts";
import Card from "../ui/Card";

export default function PostList() {
  const { posts, loading } = usePosts();

  if (loading) return <p>Loading...</p>;
  if (!posts.length) return <p>No posts found</p>;
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.slice(0, 6).map((post) => (
        <Card
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}